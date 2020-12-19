import { Component, OnInit, ViewChild } from '@angular/core';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { Router } from '@angular/router';
import { AvailableAmbulances } from '../models/AvailableAmbulances';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Ambulances } from '../models/Ambulances';
import { QuickrequestService } from '../home-page/service/quickrequest.service';
import { MapComponent } from '../map/map.component';
import { QuickRequest } from '../models/QuickRequest';
import { RegistrationService } from '../registration/service/registration.service';
import { Users } from '../models/Users';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild(MapComponent) mapComp;
  lat = 8.5046;
  lng = 76.899999;
  zoom = 11;
  public isUserLoggedIn: boolean = false;
  public ambulances: Ambulances[];
  public isQkRequestDone: boolean = false;
  qkRequest: FormGroup;
  amb: Ambulances;
  vendor: Users;

  constructor(private fb: FormBuilder, private service: AmbulancesService, private qkService: QuickrequestService,
    private vendService: RegistrationService, private router: Router) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        this.getAvailableAmbulancesByLocation();
      });
    }
    this.createForm();
  }

  createForm() {
    this.qkRequest = this.fb.group({
      sourceLocation: [''],
      phoneNumber: ['', Validators.required]
    });
  }
  availableAmb: string[];
  availableAmbs: AvailableAmbulances[];
  public users: Users[];
  public quickRequests: QuickRequest[];
  public closestAmbulance: AvailableAmbulances;

  ngOnInit(): void {
    this.qkRequest.controls["phoneNumber"].setValidators([Validators.minLength(10), Validators.maxLength(10)]);
    if (localStorage.getItem("phoneNumber") !== "") {
      this.qkRequest.controls.phoneNumber.setValue(localStorage.getItem("phoneNumber"));
    }
    if (localStorage.getItem("isUserLoggedIn") === undefined) {
      localStorage.setItem("isUserLoggedIn", this.isUserLoggedIn.toString());
    }
    else {
      this.isUserLoggedIn = localStorage.getItem("isUserLoggedIn").toString() === "true" ? true : false;
    }
    this.getAvailableAmbulances();
    this.getQuickRequests();
  }
  getAvailableAmbulances() {
    this.service.getAvailableAmbulances().subscribe(data => {
      this.availableAmb = data;
    });
  }
  getAvailableAmbulancesByLocation() {
    this.service.getAvailableAmbulancesLocation().subscribe(data => {
      this.availableAmbs = data.filter(x => x.isOnService === "false");
    });
  }
  onClickSignUp() {
    this.isQkRequestDone = false;
    this.router.navigate(['/registration']);
  }
  onClickLogin() {
    this.isQkRequestDone = false;
    this.router.navigate(['/login']);
  }
  onRequest() {
    this.lat = this.mapComp.latitude;
    this.lng = this.mapComp.longitude;
    if (this.qkRequest.controls["phoneNumber"].value !== "") {
      this.qkService.getQuickRequests().subscribe(data => {
        const args = {
          id: data.length + 1,
          source: this.qkRequest.controls["sourceLocation"].value === "" ? "Source" : this.qkRequest.controls["sourceLocation"].value,
          phoneNumber: this.qkRequest.controls["phoneNumber"].value,
          latitude: this.lat,
          longitude: this.lng,
          status: "Pending",
          vendorId: "",
          vendorName: "",
          ambulanceId: "",
          driverContact: "",
          regNumber: ""
        };
        this.isQkRequestDone = true;
        this.qkService.addQuickRequest(args).subscribe((res) => {          
          this.getQuickRequests();
        });
        //this.assignClosestAmbulance(); // Bypassing the pending logic
      });
    }
  }
  getQuickRequests() {
    let phoneNumber = this.qkRequest.controls["phoneNumber"].value;
    localStorage.setItem("phoneNumber", phoneNumber);
    this.qkService.getQuickRequests().subscribe(data => {
      this.quickRequests = data.filter(x => x.phoneNumber === phoneNumber);
    });
  }
  getCurrentLocation() {
    if (navigator) {
      if (this.qkRequest.controls["sourceLocation"].value !== "") {
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
  getVendors() {
    this.vendService.getVendors().subscribe(data => {
      this.users = data;
    });
  }
  ngOnDestroy() {
    localStorage.removeItem("phoneNumber");
  }

  assignClosestAmbulance() {
    let lat = this.lat;
    let lng = this.lng;
    let R = 5000; // radius of earth in km
    let distances = [];
    let closest = -1;
    let i = 0;
    let closestAmbId = "";
    let closestVenId = "";
    if (this.availableAmbs.length > 0) {
      this.availableAmbs.forEach(marker => {
        var mlat = marker.latitude;
        var mlng = marker.longitude;
        var dLat = this.rad(mlat - lat);
        var dLong = this.rad(mlng - lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(this.rad(lat)) * Math.cos(this.rad(lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        distances[i] = d;
        if (closest == -1 || d < distances[closest]) {
          closest = i;
          closestAmbId = marker.ambulanceId;
          closestVenId = marker.vendorId;
        }
        i++;
      });
    }
    this.closestAmbulance = this.availableAmbs.find(x => x.ambulanceId === closestAmbId && x.vendorId === closestVenId);

    this.service.getAmbulances().subscribe(data => {
      this.amb = data.find(x => x.AmbulanceId === closestAmbId && x.VendorId === closestVenId);
      this.vendService.getVendors().subscribe(res => {
        this.vendor = res.find(x => x.VendorId === closestVenId);
        // Accepting the request for the time being
        const args = {
          id: "qk" + this.qkRequest.controls["phoneNumber"].value,
          source: this.qkRequest.controls["sourceLocation"].value === "" ? "Source" : this.qkRequest.controls["sourceLocation"].value,
          phoneNumber: this.qkRequest.controls["phoneNumber"].value,
          latitude: this.lat,
          longitude: this.lng,
          status: "Accepted",
          vendorId: this.closestAmbulance.vendorId,
          vendorName: this.vendor.Name,
          ambulanceId: this.closestAmbulance.ambulanceId,
          driverContact: this.amb.Mobile,
          regNumber: this.amb.RegNumber
        };
        let id = "qk" + this.qkRequest.controls["phoneNumber"].value;
        this.qkService.addQuickRequest(args).subscribe(data => {
          this.isQkRequestDone = true;
          this.getQuickRequests();
        });
      });
    });
  }

  rad(x) { return x * Math.PI / 180; }


}

