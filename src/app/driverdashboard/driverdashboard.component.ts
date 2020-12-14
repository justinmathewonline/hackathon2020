import { Component, OnInit } from '@angular/core';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driverdashboard',
  templateUrl: './driverdashboard.component.html',
  styleUrls: ['./driverdashboard.component.css']
})
export class DriverdashboardComponent implements OnInit {

  constructor(private service: AmbulancesService, private router: Router) { }

  ngOnInit(): void {
    
  }
  onClickTrips() {
    this.router.navigate(['/completedtrips']);
  }
  onClickHome() {
    this.router.navigate(['/driverhome']);
  }
  // // onClickHome(){
  // //   alert("I am loaded and automatically clicked");
  // // }
  // onload = function(){
  //   document.getElementById('btnhome').click();
  // }

}
