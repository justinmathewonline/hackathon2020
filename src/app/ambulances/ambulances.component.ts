import { Component, OnInit } from '@angular/core';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ambulances',
  templateUrl: './ambulances.component.html',
  styleUrls: ['./ambulances.component.css']
})
export class AmbulancesComponent implements OnInit {

  constructor(private service: AmbulancesService, private router: Router) { }
  public ambulances: string[];
  ngOnInit(): void {
    this.getAmbulances();
  }

  getAmbulances() {
    this.service.getAmbulances().subscribe(data => {
      this.ambulances = data;
    });
  }
  add() {
    this.router.navigate(['/addambulance']);
  }
}
