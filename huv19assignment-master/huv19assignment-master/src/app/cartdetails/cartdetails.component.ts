import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cartdetails',
  templateUrl: './cartdetails.component.html',
  styleUrls: ['./cartdetails.component.scss']
})
export class CartdetailsComponent implements OnInit {
cart;
value;
swService:CartService;

constructor(swService:CartService) {
  this.swService=swService;
 }



  ngOnInit(): void {



    this.cart=this.swService.cart;


  
  }




}
