import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  rootName="Discover Latest Courses On React"
  wishlist;
  swService:CartService;
  constructor(swService:CartService) {
    this.swService=swService;
   }

  ngOnInit(): void {
this.wishlist=this.swService.wishlist;
  }


  //Function to delete course from wishlist
  onDelete(title)
  {
    this.wishlist=this.swService.deleteWishlist(title);
  }

  //Function to add course from wishlist to cart
  OnAddCart(title,price,discount,courseCreator)
  {
     this.swService.addcart({title:title,price:price,discount:discount,courseCreator:courseCreator});

     this.onDelete(title);

  }

}
