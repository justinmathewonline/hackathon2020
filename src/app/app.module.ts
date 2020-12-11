import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './registration/registration.component';
import { AddambulanceComponent } from './addambulance/addambulance.component';
import { AgmCoreModule } from '@agm/core';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { AmbulancesComponent } from './ambulances/ambulances.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { BookambulanceComponent } from './bookambulance/bookambulance.component';
=======
import { PaymentComponent } from './payment/payment.component';
>>>>>>> 2b836a1493205b2f26f9187fd9066988ec492a57

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationComponent,
    AddambulanceComponent,    
<<<<<<< HEAD
    AmbulancesComponent, LoginComponent, BookambulanceComponent
=======
    AmbulancesComponent, PaymentComponent
>>>>>>> 2b836a1493205b2f26f9187fd9066988ec492a57
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBmP5kojmOyKmUmh6dKMfc8L-lPMUWI0S8'
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
