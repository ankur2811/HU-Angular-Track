import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { WishlistComponent } from './wishlist.component';
import { CartService } from '../cart.service';
import {  async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ WishlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should have a rootName with value discover latest courses on react', () => {
    let compiled=fixture.debugElement.nativeElement;
    expect(component.rootName).toEqual('Discover Latest Courses On React')
    });

    it('it should use the wishlist details from the service', () => {
      let app=fixture.debugElement.componentInstance;
      let service=fixture.debugElement.injector.get(CartService);
      expect(service.wishlist).toEqual(app.wishlist);
    });

    it('it  should also implement the OnAddWishList function on clicking Add to Cart', fakeAsync( () => {
      let service=fixture.debugElement.injector.get(CartService);
      service.wishlist.push({title:'abc',price:'67',courseCreator:'ff',discount:'76'});
      fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.addcrt')).nativeElement;
    spyOn(component, 'OnAddCart');
    select.dispatchEvent(new Event('click'));
    tick();
    expect(component.OnAddCart).toHaveBeenCalled();

    }));

    it('it  should also implement the OnDelete function on clicking Delete Icon', fakeAsync( () => {
      let service=fixture.debugElement.injector.get(CartService);
      service.wishlist.push({title:'abc',price:'67',courseCreator:'ff',discount:'76'});
      fixture.detectChanges();
    let select: HTMLSelectElement = fixture.debugElement.query(By.css('.ig')).nativeElement;
    spyOn(component, 'onDelete');
    select.dispatchEvent(new Event('click'));
    tick();
    expect(component.onDelete).toHaveBeenCalled();

    }));
});
