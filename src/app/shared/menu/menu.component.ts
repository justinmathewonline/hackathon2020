import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmbulancesService } from '../../ambulances/service/ambulances.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private service: AmbulancesService) { }
  public userRole: string;
  public isUserLoggedIn: boolean;
   
  ngOnInit(): void {
    this.isUserLoggedIn = localStorage.getItem("isUserLoggedIn").toString() === "true" ? true : false;
    this.userRole = localStorage.getItem("role");
  }
  logout() {
    localStorage.setItem("isUserLoggedIn", "false");
    this.isUserLoggedIn = false;
    if (this.userRole !== "1") {
      this.service.deleteAvailableAmbulance(localStorage.getItem("availAmbId")).subscribe();
    }
    this.router.navigate(['/home']);
  }

}
