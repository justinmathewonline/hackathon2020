import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddambulanceComponent } from '../app/addambulance/addambulance.component';
import { RegistrationComponent } from '../app/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'addambulance', component: AddambulanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
