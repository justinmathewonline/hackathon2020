import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddambulanceComponent } from '../app/addambulance/addambulance.component';
import { RegistrationComponent } from '../app/registration/registration.component';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { AmbulancesComponent } from '../app/ambulances/ambulances.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'ambulances', component: AmbulancesComponent },
  { path: 'addambulance', component: AddambulanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
