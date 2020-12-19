import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { Router } from '@angular/router';
import { BookAmbulanceModel } from '../models/BookAmbulanceModel';
@Component({
  selector: 'app-bookambulance',
  templateUrl: './bookambulance.component.html',
  styleUrls: ['./bookambulance.component.css']
})
export class BookambulanceComponent implements OnInit {

  constructor(private service: AmbulancesService, private router: Router) { }
  public objAmbulance: BookAmbulanceModel[];
  private singleObject: BookAmbulanceModel;

  form = new FormGroup({

    hospitalName: new FormControl('', [Validators.required]),

    appointment: new FormControl('', [Validators.required]),

    ambulanceType: new FormControl('', Validators.required),
    vechileType: new FormControl('', Validators.nullValidator),
    firstaid: new FormControl('', Validators.nullValidator),
    ventilator: new FormControl('', Validators.nullValidator),
    ecg: new FormControl('', Validators.nullValidator),
    phoneNumber: new FormControl('', Validators.nullValidator),
  });

  ngOnInit(): void {
 
    var retrievedData = localStorage.getItem("bookambulance");
    var data = JSON.parse(retrievedData);
    this.objAmbulance=data;
   
  }
  goToProfile()
  {
   
    this.router.navigate(['/profile']);

  }
  onBookAmbulance(){
 
    let mfacility="";
    if(this.form.controls["firstaid"].value === true)
    {
      mfacility = "Basic First Aid";
    }
    if(this.form.controls["ventilator"].value === true)
    {
      mfacility = "Ventilator";
    }
    if(this.form.controls["ecg"].value === true)
    {
      mfacility = "ECG Machine";
    }
    const args = [{   
      hospitalName : this.form.controls["hospitalName"].value,
      appointmentDate: this.form.controls["appointment"].value,
      ambulanceType: this.form.controls["ambulanceType"].value,
      vechileType: this.form.controls["vechileType"].value,
      MedicalFacilities:  mfacility,
      PatientPhoneNumber: this.form.controls["phoneNumber"].value,
    }];
    

     // this.service.postBookAmbulances(args).subscribe(data => {

      //  if(data)
       // {
         // this.objAmbulance=args;
      
         this.singleObject = new BookAmbulanceModel(          
          args[0].hospitalName ,
          args[0].appointmentDate ,
          args[0].ambulanceType,
          args[0].vechileType ,
          args[0].MedicalFacilities ,
          args[0].PatientPhoneNumber      
           
         )
          // this.singleObject.hospitalName =args[0].hospitalName ;
          // this.singleObject.appointmentDate =args[0].appointmentDate ;
          // this.singleObject.ambulanceType =args[0].ambulanceType ;
          // this.singleObject.vechileType =args[0].vechileType ;
          // this.singleObject.MedicalFacilities =args[0].MedicalFacilities ;
          // this.singleObject.PatientPhoneNumber =args[0].PatientPhoneNumber ;
          this.objAmbulance=[];
          if(this.objAmbulance)
          {
             this.objAmbulance
          this.objAmbulance.push(this.singleObject);
          localStorage.setItem("bookambulance", JSON.stringify(this.objAmbulance));
          }
        //  this.service.getBookAmbulances().subscribe(data => {
      
        // });
     // }
     // });
    return false;;
  }

  

}
