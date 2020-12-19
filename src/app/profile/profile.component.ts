import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { Ambulances } from '../models/Ambulances';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  constructor(private _fb: FormBuilder, private service: AmbulancesService, private router: Router) { }
  public userRole: string;
  private ambulanceList: Ambulances[];

  lat: any;
  lng: any;
  label: string;

  ngOnInit(): void {
    this.form = this._fb.group({
      ambulances: new FormControl('')
    });
    this.userRole = localStorage.getItem("role");
    this.getAmbulancesByVendor();
  }
  getAmbulancesByVendor() {
    let vendorId = localStorage.getItem("vendorId");
    this.service.getAmbulances().subscribe(data => {
      this.ambulanceList = data.filter(x => x.VendorId === vendorId);
    })
  }

  goOnline() {
    let ambId = this.form.controls["ambulances"].value;
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.service.getAvailableAmbulancesLocation().subscribe(data => {
          const args = {
            id: data.length + 1,
            vendorId: localStorage.getItem("vendorId"),
            ambulanceId: ambId.AmbulanceId,
            latitude: this.lat,
            longitude: this.lng,
            label: "Label not available",
            isOnService: "false"
          };
          this.service.goOnline(args).subscribe(data => {
            localStorage.setItem("currentAmbulanceId", ambId.AmbulanceId);
            this.router.navigate(['driverhome']);
          });
        });
      });
    }
  }
}
