import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RatesComponent } from './rates/rates.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MycoinsComponent } from './mycoins/mycoins.component';
import { FullnewsComponent } from './fullnews/fullnews.component';

const routes: Routes = [
  {
    component:LoginComponent,
    path:'login'
  },{
    component:RegisterComponent,
    path:'register'
  },{
    component:HomeComponent,
    path:'home'
  },{
    component:NewsletterComponent,
    path:'news'
  },{
    component:MycoinsComponent,
    path:'mycoins'
  },{
    component:RatesComponent,
    path:'rates'
  },{
    component:FullnewsComponent,
    path:'fullnews'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
