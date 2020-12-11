import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddambulanceComponent } from '../app/addambulance/addambulance.component';
import { RegistrationComponent } from '../app/registration/registration.component';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { AmbulancesComponent } from '../app/ambulances/ambulances.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { BookambulanceComponent } from './bookambulance/bookambulance.component';
=======
import { PaymentComponent} from '../app/payment/payment.component';
>>>>>>> 2b836a1493205b2f26f9187fd9066988ec492a57

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'ambulances', component: AmbulancesComponent },
  { path: 'addambulance', component: AddambulanceComponent },
<<<<<<< HEAD
  { path: 'login', component:LoginComponent },
  { path: 'bookambulance', component:BookambulanceComponent }
=======
  { path: 'payment', component: PaymentComponent }
>>>>>>> 2b836a1493205b2f26f9187fd9066988ec492a57
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
