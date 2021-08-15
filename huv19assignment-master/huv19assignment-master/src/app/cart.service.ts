import {HttpClient,} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import * as uuid from 'uuid';
import { experience,expertise,interest,description } from './user';
import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';



@Injectable({
  providedIn: 'root'
})

//class to add courses to cart
export class CartService{
   courses=[
//[{id:'',courseCreator:'',courseDescription:'',discount:'',discountValidTill:'',price:'',tag:[],title:''}]

  ];

  //class to add courses to wishlist
   wishlist=[
   // {name:'',Mrprice:'',Slprice:'',author:''}
  ];
  cart=[
    // {name:'',Mrprice:'',Slprice:'',author:''}
   ];
    charactersChanged=new Subject<void>();

  http:HttpClient;

  constructor(http:HttpClient){
this.http=http;
  }

  value=0;
  discount=0;
  courseDesId=0;
  url;
  urlP;
  description;
   myId = uuid.v4();
   pop;


   //Function to fetch details of courses from API
  fetchCourse(){
    this.http.get('https://us-central1-angularhu-83e85.cloudfunctions.net/webApi/api/v1/courses').map((response)=>{
      const data= response;
     // console.log(response[0]);
     for(let i=0;i<10;i++)
     {
      const pos=this.courses.findIndex((char)=>{
        return char.title===data[i].title;
      })
      if(pos===-1)
      {
     this.courses.push(data[i]);
      }
     }



     return response;


    })
    .subscribe(

     (data)=>{
        //console.log(data[0]);

       this.charactersChanged.next();

      }
    );






    }


//Function to sort the course data based on price from low to high
    sortLowToHigh()
    {
      console.log("sorting")
          this.courses.sort((left, right): number => {
      if (left.price < right.price) return -1;
      if (left.price > right.price) return 1;
      return 0;
    })
    };


  //Function to sort the course data based on price from high to low
    sortHighToLow()
    {
          this.courses.sort((left, right): number => {
      if (left.price < right.price) return 1;
      if (left.price > right.price) return -1;
      return 0;
    })
    }


    //Function to add course to the wishlist
  addWishlist(info){
    const pos=this.wishlist.findIndex((char)=>{
      return char.title===info.title;
    })

    if(pos!==-1)
    {
      return;
    }
    const newChar={title:info.title,price:info.price,discount:info.discount,courseCreator:info.courseCreator,tags:info.tags};
    this.wishlist.push(newChar);

  }



  //Function to add course to the wishlist from cart and delete that course from cart

  addWishlistCart(info){
    //this.deleteCart(info.title);
    const pos=this.wishlist.findIndex((char)=>{
      return char.title===info.title;
    })

    if(pos!==-1)
    {
      return;
    }
    const newChar={title:info.title,price:info.price,discount:info.discount,courseCreator:info.courseCreator,tags:info.tags};
    this.wishlist.push(newChar);
  this.deleteCart({title:info.title,price:info.price,discount:info.discount,courseCreator:info.courseCreator,tags:info.tags})

  }


  //Function to add course to the cart
  addcart(info){
    const pos=this.cart.findIndex((char)=>{
      return char.title===info.title;
    })
    console.log(pos);
    if(pos!==-1)
    {
      this.pop=-1;
      return;
    }
    this.pop=-2;
    const newChar={title:info.title,price:info.price,courseCreator:info.courseCreator,discount:info.discount};


    this.cart.push(newChar);
    this.value+=info.price-((info.price*info.discount)/100);
    this.discount+=(info.price*info.discount)/100;
    console.log(info.discount);




  }


  //Function to delete course from wishlist
  deleteWishlist(title)
  {
    let j = 0;
  for (let i = 0; i < this.wishlist.length; i++) {
    const item = this.wishlist[i];
    if (item.title !== title) {
        this.wishlist[j] = item;
        j++;
    }
  }

  this.wishlist.length = j;
  return this.wishlist;

  }


  //Function to delete course from cart
  deleteCart(info)
  {
    let j = 0;
  for (let i = 0; i < this.cart.length; i++) {
    const item = this.cart[i];
    if (item.title !== info.title) {
        this.cart[j] = item;
        j++;
    }
  }

  this.cart.length = j;
  this.value= this.value-info.price;
  this.value=this.value+((info.price*info.discount)/100);
  this.discount=this.discount-(info.price*info.discount)/100;
console.log("jgu");

  return this.cart;
  }


//Function to sent post request to submit profile data to the API
  submitForm(a:any) {


this.urlP='https://us-central1-angularhu-83e85.cloudfunctions.net/webApi/api/v1/user/'+this.myId;
console.log(this.urlP);
/*    this.http.post(this.urlP,a).toPromise().then((data:any) => {
      console.log(data);
    });*/
    this.http.post(this.urlP, a).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
console.log("data sent");
  }


  //Function to get Area of Interest Data from API
  getInterestData(): Observable<interest[]>{
    return this.http.get<interest[]>('https://us-central1-angularhu-83e85.cloudfunctions.net/webApi/api/v1/areaOfInterestOptions');
  }

  //Function to get total years of experience Data from API
  getExperienceData(): Observable<interest[]>{
    return this.http.get<interest[]>('https://us-central1-angularhu-83e85.cloudfunctions.net/webApi/api/v1/experienceOptions');
  }

  //Function to get Area of Expertise Data from API
  getExpertise(): Observable<interest[]>{
    return this.http.get<interest[]>('https://us-central1-angularhu-83e85.cloudfunctions.net/webApi/api/v1/expertiseOptions');
  }


  //Function to get detail of a particular course through API
  getCourseDetail(): Observable<description>{
    this.url="https://us-central1-angularhu-83e85.cloudfunctions.net/webApi/api/v1/course/"+this.courseDesId;
    console.log(this.url);
    return this.http.get<description>(this.url);
  }

  GetCourseDet(){
    this.url="https://us-central1-angularhu-83e85.cloudfunctions.net/webApi/api/v1/course/"+this.courseDesId;
    console.log(this.url);
    this.http.get(this.url).map((response)=>{
      const data= response;
      console.log(data);
     // console.log(response[0]);
     this.description=data;
console.log(data);
     return response;


    })}

}

