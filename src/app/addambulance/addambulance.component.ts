import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-addambulance',
  templateUrl: './addambulance.component.html',
  styleUrls: ['./addambulance.component.css']
})
export class AddambulanceComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  goToAmbulances()
  {
    this.router.navigate(['/ambulances']);
  }
}
