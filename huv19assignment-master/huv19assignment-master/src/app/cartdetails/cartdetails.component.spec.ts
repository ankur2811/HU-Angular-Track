import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { CartdetailsComponent } from './cartdetails.component';
import { CartService } from '../cart.service';

describe('CartdetailsComponent', () => {
  let component: CartdetailsComponent;
  let fixture: ComponentFixture<CartdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CartdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('it should use the cart details from the service', () => {
    let app=fixture.debugElement.componentInstance;
    let service=fixture.debugElement.injector.get(CartService);
    expect(service.cart).toEqual(app.cart);
  });
});
