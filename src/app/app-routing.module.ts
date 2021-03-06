import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddambulanceComponent } from '../app/addambulance/addambulance.component';
import { RegistrationComponent } from '../app/registration/registration.component';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { AmbulancesComponent } from '../app/ambulances/ambulances.component';
import { LoginComponent } from './login/login.component';
import { BookambulanceComponent } from './bookambulance/bookambulance.component';
import { PaymentComponent} from '../app/payment/payment.component';
import { DriverhomeComponent } from './driverhome/driverhome.component';
import { CompletedtripsComponent } from './completedtrips/completedtrips.component';
import { DriverdashboardComponent } from './driverdashboard/driverdashboard.component';
import { UserComponent } from './user/user.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ProfileComponent } from '../app/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'ambulances', component: AmbulancesComponent },
  { path: 'addambulance', component: AddambulanceComponent },
  { path: 'login', component:LoginComponent },
  { path: 'bookambulance', component:BookambulanceComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'driverhome', component: DriverhomeComponent },
  { path: 'completedtrips', component: CompletedtripsComponent},
  { path: 'driverdashboard', component: DriverdashboardComponent},
  { path: 'user', component: UserComponent },
  { path: 'subscribe', component:SubscribeComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
