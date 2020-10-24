import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:"", component: TravelListComponent
  },
  {
    path:'travels/travelId', component: TravelDetailsComponent
  },
  {
    path:'cart', component: CartComponent
  },
  {
    path:'blog', component: BlogComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
