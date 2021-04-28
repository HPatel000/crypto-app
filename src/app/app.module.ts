import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MycoinsComponent } from './mycoins/mycoins.component';
import { HeaderComponent } from './header/header.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { RegisterComponent } from './register/register.component';
import { RatesComponent } from './rates/rates.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FullnewsComponent } from './fullnews/fullnews.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MycoinsComponent,
    HeaderComponent,
    NewsletterComponent,
    RegisterComponent,
    RatesComponent,
    HomeComponent,
    FullnewsComponent
  ],
  imports: [  
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
