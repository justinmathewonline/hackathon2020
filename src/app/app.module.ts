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
import { LoginComponent } from './login/login.component';
import { BookambulanceComponent } from './bookambulance/bookambulance.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverhomeComponent } from './driverhome/driverhome.component';
import { CompletedtripsComponent } from './completedtrips/completedtrips.component';
import { DriverdashboardComponent } from './driverdashboard/driverdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationComponent,
    AddambulanceComponent,
    AmbulancesComponent,
    LoginComponent,
    BookambulanceComponent,
    PaymentComponent,
    DriverhomeComponent,
    CompletedtripsComponent,
    DriverdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvT-6cB1lqF13MYUk0-qk-915Csu_4b1o',
      libraries: ['places']
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
