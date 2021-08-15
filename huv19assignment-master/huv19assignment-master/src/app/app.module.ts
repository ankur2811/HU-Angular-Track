import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SearchComponent } from './search/search.component';
import { CoursesComponent } from './courses/courses.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import {CartService} from './cart.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { CartpageComponent } from './cartpage/cartpage.component';



const routes=[
  {path:'characters',component:CoursesComponent},
  {path:'profile',component:ProfileComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'cart',component:CartpageComponent},
  {path:'detail',component:CoursedetailComponent},
  {path:'**',redirectTo:'/characters'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    BreadcrumbComponent,
    SearchComponent,
    CoursesComponent,
    CartdetailsComponent,
    ProfileComponent,
    CoursedetailComponent,
    WishlistComponent,
    CartpageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
