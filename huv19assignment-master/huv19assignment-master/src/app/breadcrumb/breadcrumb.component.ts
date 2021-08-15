import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  swService:CartService; //Create instance of service class
  low="abc"

  constructor(swService:CartService) {
    this.swService=swService;
   }

  ngOnInit(): void {
    //this.swService.sortLowToHigh();
  }

//Function to sort the structure of course data based on price of course
  Low(val)
  {
    if(val.value=='high')
    {
this.swService.sortLowToHigh();
    }
    if(val.value=='low')
    {
this.swService.sortHighToLow();
    }


  }

}
