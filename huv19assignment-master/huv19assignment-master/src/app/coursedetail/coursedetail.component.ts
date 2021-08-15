import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {description} from '../user'

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.scss']
})
export class CoursedetailComponent implements OnInit {
rootName="Discover Latest Courses On React"
swService:CartService;
description;
time1;
time2;
constructor(swService:CartService) {
  this.swService=swService;
 }

  ngOnInit(): void {

    //Function to fetch details of course
    this.swService.getCourseDetail().subscribe( (data) => {
      this.description= data;
      console.log(this.description);
      this.time1=new Date(this.description.discountValidTill).getDay();
      this.time2=new Date("2021-04-27T04:30:00.000Z").getMinutes();
      console.log(this.time2);
    });

  }


//Function to add course to the cart
  OnAddCart(title,price,courseCreator,discount)
  {
     this.swService.addcart({title:title,price:price,courseCreator:courseCreator,discount:discount});


  }

  //Function to add course to the wishlist
  OnAddWishList(title,price,tags,courseCreator,discount)
  {
    this.swService.addWishlist({title:title,price:price,tags:tags,courseCreator:courseCreator,discount:discount});
  }

}
