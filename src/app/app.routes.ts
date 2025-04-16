import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent ,title:'Home'},
  {path:'about', component: AboutComponent ,title:'About Us'},
  {path:'contact', component: ContactComponent ,title:'Contact Us'},


  {path:'**', component: NotfoundComponent , title:'404 Not Found'}
];
