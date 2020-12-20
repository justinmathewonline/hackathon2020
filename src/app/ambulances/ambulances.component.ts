import { Component, OnInit } from '@angular/core';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { Router } from '@angular/router';
import { Ambulances } from '../models/Ambulances';
import { BookAmbulanceModel } from '../models/BookAmbulanceModel';
@Component({
  selector: 'app-ambulances',
  templateUrl: './ambulances.component.html',
  styleUrls: ['./ambulances.component.css']
})
export class AmbulancesComponent implements OnInit {

  constructor(private service: AmbulancesService, private router: Router) { }
  public ambulances: Ambulances[];
  ngOnInit(): void {
    this.getAmbulances();
  }

  getAmbulances() {
   // localStorage.setItem("addambulance", JSON.stringify(args));
debugger;
    var retrievedData = localStorage.getItem("addambulance");
    var fromLocalstorage = JSON.parse(retrievedData); 


     this.service.getAmbulances().subscribe(data => {
     
      data.forEach(function(item){  
        
        if(fromLocalstorage)
        {
        fromLocalstorage.push(item); 
        }else{
          this.ambulances=data
        }

      }); 
      if(fromLocalstorage)
      {
       this.ambulances=fromLocalstorage;
      }
     });
     
  }
  add() {
    this.router.navigate(['/addambulance']);
  }
}
