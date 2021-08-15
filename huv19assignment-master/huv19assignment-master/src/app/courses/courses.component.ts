import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses;
  rootName="Discover Latest Courses On React"
  showPop;
  showPop1;

  swService:CartService;

  constructor(swService:CartService) {
    this.swService=swService;
   }

  ngOnInit(): void {
   this.swService.fetchCourse();
   this.courses=this.swService.courses;

  }

  //Function to add course to the cart
  OnAddCart(title,price,courseCreator,discount)
  {
     this.swService.addcart({title:title,price:price,courseCreator:courseCreator,discount:discount});
     if(this.swService.pop===-2)
     {
       this.showPop=true;
     }
     if(this.swService.pop===-1)
     {
       this.showPop1=true;
     }


  }

  //Function to add course to the wishlist
  OnAddWishList(title,price,tags,courseCreator,discount)
  {
    this.swService.addWishlist({title:title,price:price,tags:tags,courseCreator:courseCreator,discount:discount});
  }




//Function to set ID of description which is used when navigate to course detail page
  OnDesc(id)
  {
    this.swService.courseDesId=id;
  }

  //Function to close popup window
  oncross()
 {
  this.showPop=false;
  this.showPop1=false;
 }


}
