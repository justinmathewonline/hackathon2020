import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HomePageComponent } from './home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBmP5kojmOyKmUmh6dKMfc8L-lPMUWI0S8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
