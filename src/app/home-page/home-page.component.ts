import { Component, OnInit } from '@angular/core';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { Router } from '@angular/router';
import { AvailableAmbulances } from '../models/AvailableAmbulances';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Ambulances } from '../models/Ambulances';
import { QuickrequestService } from '../home-page/service/quickrequest.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  lat = 8.5046;
  lng = 76.899999;
  zoom = 11;
  public isUserLoggedIn: boolean = false;
  public ambulances: Ambulances[];
  public isQkRequestDone: boolean = false;
  // qkRequest = new FormGroup({
  //   sourceLocation: new FormControl(''),
  //   phoneNumber: new FormControl('', Validators.required)
  // });
  qkRequest: FormGroup;

  constructor(private fb: FormBuilder, private service: AmbulancesService, private qkService: QuickrequestService, private router: Router) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.getAvailableAmbulancesByLocation(this.lat, this.lng);
      });
    }
    this.createForm();
  }
  
  createForm() {
    this.qkRequest = this.fb.group({
      sourceLocation:[''],
      phoneNumber: ['', Validators.required]
    });
  }
  availableAmb: string[];
  availableAmbs: AvailableAmbulances[];

  ngOnInit(): void {
    this.qkRequest.controls["phoneNumber"].setValidators([Validators.minLength(10), Validators.maxLength(10)]);
    if (localStorage.getItem("isUserLoggedIn") === undefined) {
      localStorage.setItem("isUserLoggedIn", this.isUserLoggedIn.toString());
    }
    else {
      this.isUserLoggedIn = localStorage.getItem("isUserLoggedIn").toString() === "true" ? true : false;
    }
    this.getAvailableAmbulances();
  }

  getAvailableAmbulances() {
    this.service.getAvailableAmbulances().subscribe(data => {
      this.availableAmb = data;
    });
  }
  getAvailableAmbulancesByLocation(lat: any, lng: any) {
    this.service.getAvailableAmbulancesLocation().subscribe(data => {
      //this.availableAmbs = data.filter(x=> x.Latitude.split(".").includes(lat.split(".")) && x.Longitude.split(".").includes(lng.split("."))); 
      this.availableAmbs = data;
    });
  }
  onClickSignUp() {
    this.isQkRequestDone= false;
    this.router.navigate(['/registration']);
  }
  onClickLogin() {
    this.isQkRequestDone= false;
    this.router.navigate(['/login']);
  }
  onRequest() {
    this.getCurrentLocation();
    const args = [{
      Source: this.qkRequest.controls["sourceLocation"].value,
      PhoneNumber: this.qkRequest.controls["phoneNumber"].value,
      Latitude: this.lat,
      Longitude: this.lng,
      IsAccepted: false,
      VendorId:"",
      AmbulanceId:""
    }];
    this.qkService.addQuickRequest(args).subscribe();

    this.isQkRequestDone= true;
  }
  getCurrentLocation() {
    if (navigator) {
      if (this.qkRequest.controls["sourceLocation"].value === "") {
        navigator.geolocation.getCurrentPosition(pos => {
          this.lng = +pos.coords.longitude;
          this.lat = +pos.coords.latitude;
        });
      } else { //Hardcoding as google map requires billing account for autocompletion of source location
        this.lng = 8.5046;
        this.lat = 76.899999;
      }
    }
  }

  getAmbulances() {
    this.service.getAmbulances().subscribe(data => {
      this.ambulances = data;
    });
  }
}

