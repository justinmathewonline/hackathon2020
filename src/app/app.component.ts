import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinSure';
  lat = 13;
  lng = 80;
  public isUserLoggedIn: boolean = false;
  constructor(private router:Router){}
  logout(){
    localStorage.setItem("isUserLoggedIn", "false");
    this.isUserLoggedIn = false;   
    this.router.navigate(['/home']);     
  }  
}
