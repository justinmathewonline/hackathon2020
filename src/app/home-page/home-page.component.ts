import { Component, OnInit } from '@angular/core';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  lat = 8.5046;
  lng = 76.899999;
  zoom = 11;
  public isUserLoggedIn: boolean = false;

  constructor(private service: AmbulancesService, private router: Router) { }

  availableAmb: string[];

  ngOnInit(): void {
    if (localStorage.getItem("isUserLoggedIn") === undefined) {
      localStorage.setItem("isUserLoggedIn", this.isUserLoggedIn.toString());
    }
    else{
      this.isUserLoggedIn = localStorage.getItem("isUserLoggedIn").toString() === "true" ? true : false;
    }
    this.getAvailableAmbulances();
  }

  getAvailableAmbulances() {
    this.service.getAvailableAmbulances().subscribe(data => {
      this.availableAmb = data;
    });
  }
  onClickSignUp() {
    this.router.navigate(['/registration']);
  }
  onClickLogin() {
    this.router.navigate(['/login']);
  }
}

