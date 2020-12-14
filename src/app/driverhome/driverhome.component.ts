import { Component, OnInit } from '@angular/core';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-driverhome',
  templateUrl: './driverhome.component.html',
  styleUrls: ['./driverhome.component.css']
})
export class DriverhomeComponent implements OnInit {
  lat = 8.5046;
  lng = 76.899999;
  zoom = 11;

 constructor(private service: AmbulancesService, private router: Router) { }
availableAmb: string[];
  ngOnInit(): void {
  }
  onClickLogins() {
    this.router.navigate(['/completedtrips']);
  }

}
