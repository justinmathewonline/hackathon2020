import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }
  public userRole: string;  
  public isUserLoggedIn: boolean;
  ngOnInit(): void {
    this.isUserLoggedIn = localStorage.getItem("isUserLoggedIn").toString() === "true" ? true : false;
    this.userRole =  localStorage.getItem("role");
  }
  logout(){
    localStorage.setItem("isUserLoggedIn", "false");
    this.isUserLoggedIn = false;
    this.router.navigate(['/home']);
  }

}
