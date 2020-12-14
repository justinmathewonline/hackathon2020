import { Component, OnInit } from '@angular/core';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
 
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
 
  constructor(private service: AmbulancesService, private router: Router) { }
 
  ngOnInit(): void {
    
    }
    onClickpay() {
 
      this.router.navigate(['/payment']);
  
    }
  }
