import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Ambulances } from '../models/Ambulances';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
@Component({
  selector: 'app-addambulance',
  templateUrl: './addambulance.component.html',
  styleUrls: ['./addambulance.component.css']
})
export class AddambulanceComponent implements OnInit {

  constructor(private service: AmbulancesService, private router: Router) { }
  public ambulances: Ambulances[];
  ngOnInit(): void {
  }
  form = new FormGroup({
    ambulancetype: new FormControl(''),
    vehiclenumber: new FormControl('', [Validators.required]),
    vehiclemodel: new FormControl('', [Validators.required]),
    basic: new FormControl('', Validators.required),
    firstaid: new FormControl('', Validators.nullValidator),
    ventilator: new FormControl(''),
    ecg: new FormControl('', Validators.nullValidator),
    oxygen: new FormControl('', Validators.nullValidator),
    contactnumber: new FormControl('', Validators.nullValidator),
  });
  goToAmbulances()
  {
    this.router.navigate(['/ambulances']);
  }
  onSubmit()
  {

    let mfacility="";
    if(this.form.controls["basic"].value === true)
    {
      mfacility = "Basic First-Aid";
    }

    if(this.form.controls["ecg"].value === true)
    {
      mfacility = "ECG Machine";
    }
    if(this.form.controls["oxygen"].value === true)
    {
      mfacility = "Oxygen Cylinder";
    }
    if(this.form.controls["ventilator"].value === true)
    {
      mfacility = "Ventilator";
    }

    const args = [{ 
          VendorId:"vkims",
          AmbulanceId: "1",
          Type : this.form.controls["ambulancetype"].value,
          RegNumber : this.form.controls["vehiclenumber"].value,
          Model: this.form.controls["vehiclemodel"].value,
          Facilities:  mfacility,
          Mobile: this.form.controls["contactnumber"].value
    }];

    var retrievedData = localStorage.getItem("addambulance");
    var data = JSON.parse(retrievedData);
   if(data==undefined || data==null)
   {
    localStorage.setItem("addambulance", JSON.stringify(args));
   }else{
     data.push(args[0]);
     localStorage.setItem("addambulance", JSON.stringify(data));
   }

   
      // this.service.addAmbulance(args).subscribe(data => {
 
      this.goToAmbulances();
      // });
    

  }
}
