import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { Ambulances } from '../models/Ambulances';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: AmbulancesService) { }
  public userRole: string;
  private ambulanceList: Ambulances[];
  public driverForm = new FormGroup({
    ambulances: new FormControl('')
  });

  lat: any;
  lng: any;
  address: string;
  private geoCoder;
  label: string;

  ngOnInit(): void {
    this.geoCoder = new google.maps.Geocoder;
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
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        //this.getAddress(this.lat, this.lng);
        // const args = [{          
        //   VendorId: localStorage.getItem("vendorId"),
        //   AmbulanceId: this.driverForm.controls["ambulances"].value,
        //   Latitude: this.lat,
        //   Longitude: this.lng,
        //   Label: "Sample"          
        // }];
        // this.service.goOnline(args).subscribe();
      });
    }


  }
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      this.addressComponents(results);
    });
  }
  addressComponents(addressArray) {
    if (addressArray.length == 0) return false;
    let address = addressArray[0].address_components;

    for (let element of address) {
      if (element.length == 0 && !element['types']) continue

      if (element['types'].indexOf('street_number') > -1) {
        this.label = element['long_name'];
        continue;
      }
    }
  }
}
