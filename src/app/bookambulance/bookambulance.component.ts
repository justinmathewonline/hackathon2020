import { Component, OnInit } from '@angular/core';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { Router } from '@angular/router';
import { BookAmbulanceModel } from '../models/BookAmbulance';
@Component({
  selector: 'app-bookambulance',
  templateUrl: './bookambulance.component.html',
  styleUrls: ['./bookambulance.component.css']
})
export class BookambulanceComponent implements OnInit {

  constructor(private service: AmbulancesService, private router: Router) { }
  public objAmbulance: BookAmbulanceModel;

  ngOnInit(): void {

  }
  goToProfile()
  {
    debugger;
    this.router.navigate(['/profile']);

  }
  bookAmbulance()
  {  debugger;
   // var e = (document.getElementById("bookHospitalName")) as HTMLSelectElement;
   // var sel = e.selectedIndex;
   // var opt = e.options[sel];


    this.objAmbulance.hospital = (<HTMLSelectElement>document.getElementById('bookHospitalName')).value;//document.getElementById("bookHospitalName").value;
    this.objAmbulance.appointmentDate= " ";
    this.objAmbulance.ambulanceType= " ";
    this.objAmbulance.vehicleType= " ";
    this.objAmbulance.MedicalFacilities= " ";
    this.objAmbulance.PatientPhoneNumber= " ";

      this.service.postBookAmbulances(this.objAmbulance).subscribe(data => {
      
      });
    
  }
}
