import { Component, OnInit } from '@angular/core';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { Router } from '@angular/router';
import { QuickrequestService } from '../home-page/service/quickrequest.service';
import { QuickRequest } from '../models/QuickRequest';
import { JsonService } from '../home-page/service/json.service';

@Component({
  selector: 'app-driverhome',
  templateUrl: './driverhome.component.html',
  styleUrls: ['./driverhome.component.css']
})
export class DriverhomeComponent implements OnInit {
  lat = 8.5046;
  lng = 76.899999;
  zoom = 11;
  dataSubject: any = {};

  constructor(private service: QuickrequestService, private router: Router, private dService: JsonService) { }
  public requests: QuickRequest[];
  ngOnInit(): void {
    this.dService.currentData.subscribe(dataSub => {
      this.dataSubject = dataSub;
      if(this.dataSubject!=null){
        
      }
    })
    this.getQuickRequests();
  }
  onClickLogins() {
    this.router.navigate(['/completedtrips']);
  }

  getQuickRequests() {
    this.service.getQuickRequests().subscribe(data => {
      this.requests = data;
    });
  }
  onClickTrips() {
    this.router.navigate(['/completedtrips']);
  }
  onClickHome() {
    this.router.navigate(['/driverhome']);
  }
}
