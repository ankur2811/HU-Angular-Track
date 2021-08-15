import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormArray} from '@angular/forms';
import { CartService } from '../cart.service';
import { interest,expertise,experience } from '../user'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  rootName="My Profile"
  swService:CartService;
  interest:interest[] = [];
  experience:experience[]=[];
  expertise:expertise[]=[];
  //profileForm:FormGroup;
  constructor(swService:CartService) {
    this.swService=swService;
   }

  ngOnInit(): void {

    //Function to get area of interest data from API call through service class
    this.swService.getInterestData().subscribe( (data) => {
      this.interest = data;
    });

    //Function to get area of expertise data from API call through service class
    this.swService.getExpertise().subscribe( (data) => {
      this.expertise = data;
    });

    //Function to get total experience data from API call through service class
    this.swService.getExperienceData().subscribe( (data) => {
      this.experience = data;
    });
  }


  //profile form group
  profileForm=new FormGroup({
    'display':new FormControl(null,Validators.required),
    'first':new FormControl(null,Validators.required),
    'last':new FormControl(null),
    'about':new FormControl(null,Validators.maxLength(100)),
    'rad':new FormControl(null),

  });
  showDiv : boolean;
  showPop:boolean;


  //Function to diplay form value on console
  onSaveProject(){
    console.log(this.profileForm.value);
  }


  //Function to display area of expertise and total experience when click on professor profession
  radioButtonChanged(){
this.showDiv=true;
console.log(this.showDiv);

 }


 //Function to display popup window
 popup(){
  this.swService.submitForm(this.profileForm.value);
  this.profileForm.reset();
  this.showPop=true;

 }

 //Function to disable popup window
 oncross()
 {
  this.showPop=false;
 }


}
