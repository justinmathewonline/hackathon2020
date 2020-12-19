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
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './shared/menu/menu.component';
import { DriverhomeComponent } from './driverhome/driverhome.component';
import { CompletedtripsComponent } from './completedtrips/completedtrips.component';
import { DriverdashboardComponent } from './driverdashboard/driverdashboard.component';
import { UserComponent } from './user/user.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { MapComponent } from './map/map.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { PopupModule } from '../app/shared/popup/popup.module';

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
    DriverdashboardComponent,
    UserComponent,
    SubscribeComponent,
    ProfileComponent,
    MenuComponent,
    MapComponent
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
    ReactiveFormsModule,
    MatGoogleMapsAutocompleteModule,
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
