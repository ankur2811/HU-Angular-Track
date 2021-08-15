import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent implements OnInit {
cart;
len;
showPop;
rootName="Shopping Cart";
swService:CartService;
constructor(swService:CartService) {
  this.swService=swService;
 }

  ngOnInit(): void {
    this.cart=this.swService.cart;
  }

  //Function to add course from cart to wishlist
  OnAddWishList(title,price,tags,courseCreator,discount)
  {
    console.log("abc");
    this.swService.addWishlistCart({title:title,price:price,tags:tags,courseCreator:courseCreator,discount:discount});
  }

  //Function to delete course from cart
  OnDeleteCart(title,price,discount)
  {
    this.cart=this.swService.deleteCart({title:title,price:price,discount:discount});
    console.log(discount)
  }

  //Function to empty the cart on checkout
  Oncheckout(){
    this.showPop=true;
       this.swService.value=0;
       this.swService.discount=0;

         this.len=this.swService.cart.length;
       for(let i=0;i<this.len;i++)
       {
       this.swService.cart.pop();
       }

  }
  //function for closing of popup
   oncross()
   {
    this.showPop=false;
   }

}
