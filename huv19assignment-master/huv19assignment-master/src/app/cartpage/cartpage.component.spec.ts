import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { CartpageComponent } from './cartpage.component';
import { CartService } from '../cart.service';
import {  async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


describe('CartpageComponent', () => {
  let component: CartpageComponent;
  let fixture: ComponentFixture<CartpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CartpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a rootName with value Shopping Cart', () => {
    let compiled=fixture.debugElement.nativeElement;
    expect(component.rootName).toEqual('Shopping Cart')
    });

    it('it should use the cart details from the service', () => {
      let app=fixture.debugElement.componentInstance;
      let service=fixture.debugElement.injector.get(CartService);
      expect(service.cart).toEqual(app.cart);
    });

    it('it should implement the Oncheckout function on clicking checkout', fakeAsync( () => {
      let service=fixture.debugElement.injector.get(CartService);
      service.value=100;

      fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.abc')).nativeElement;
    spyOn(component, 'Oncheckout');
    select.dispatchEvent(new Event('click'));
    tick();
    expect(component.Oncheckout).toHaveBeenCalled();


    }));


    it('it  should implement the OnAddWishList function on clicking Add to wishlist', fakeAsync( () => {
      let service=fixture.debugElement.injector.get(CartService);
      service.cart.push({title:'abc',price:'67',courseCreator:'ff',discount:'76'});
      fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.wish')).nativeElement;
    spyOn(component, 'OnAddWishList');
    select.dispatchEvent(new Event('click'));
    tick();
    expect(component.OnAddWishList).toHaveBeenCalled();

    }));

    it('it  should implement the OnDeleteCart function on clicking Delete From Cart button', fakeAsync( () => {
      let service=fixture.debugElement.injector.get(CartService);
      service.cart.push({title:'abc',price:'67',courseCreator:'ff',discount:'76'});
      fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.de')).nativeElement;
    spyOn(component, 'OnDeleteCart');
    select.dispatchEvent(new Event('click'));
    tick();
    expect(component.OnDeleteCart).toHaveBeenCalled();

    }));


});
