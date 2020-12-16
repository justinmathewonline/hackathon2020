import { Component, OnInit } from '@angular/core';
import { AgmMap, MapsAPILoader } from '@agm/core';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { AvailableAmbulances } from '../models/AvailableAmbulances';
import { Location, Appearance, GermanAddress } from '@angular-material-extensions/google-maps-autocomplete';

import PlaceResult = google.maps.places.PlaceResult;

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  content?: string;
  isShown: boolean;
  icon: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  availableAmbs: AvailableAmbulances[];
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  public selectedAddress: PlaceResult;

  // Radius
  radius = 5000;
  radiusLat = 0;
  radiusLong = 0;

  markers: marker[] = []

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private service: AmbulancesService
  ) {}
  ngOnInit(): void {
    //load Map
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
    });
  }
  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.radiusLat = this.latitude;
        this.radiusLong = this.longitude;
        this.zoom = 12;

        this.mapsAPILoader.load().then(() => {  
          let geocoder = new google.maps.Geocoder;  
          let latlng = {  
              lat: this.latitude,  
              lng: this.longitude  
          };  
          geocoder.geocode({  
              'location': latlng  
          }, function(results) {  
            console.log(results);
              if (results[0]) {  
                  this.currentLocation = results[0].formatted_address;  
                  console.log(this.currentLocation);  
                  
              } else {  
                  console.log('Not found');  
              }  
          });  
      });
        // for (let i = 1; i < 50; i++) {
        //   this.markers.push(
        //     {
        //       lat: this.latitude + Math.random(),
        //       lng: this.longitude + Math.random(),
        //       label: `${i}`,
        //       draggable: false,
        //       content: `Content no ${i}`,
        //       isShown: false,
        //       icon: './assets/marker-red.png'
        //     });
        // }
      });
      this.getAvailableAmbulancesByLocation(this.latitude, this.longitude);
    }
  }
  getAvailableAmbulancesByLocation(lat: any, lng: any) {
    this.service.getAvailableAmbulancesLocation().subscribe(data => {      
      //this.availableAmbs = data.filter(x=> x.Latitude.split(".").includes(lat.split(".")) && x.Longitude.split(".").includes(lng.split("."))); 
      this.availableAmbs = data;  
    });
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  radiusDragEnd($event: any) {
    console.log($event);
    this.radiusLat = $event.coords.lat;
    this.radiusLong = $event.coords.lng;
    this.showHideMarkers();
  }

  event(type, $event) {
    console.log(type, $event);
    this.radius = $event;
    this.showHideMarkers();
  }

  showHideMarkers() {
    Object.values(this.markers).forEach(value => {
      value.isShown = this.getDistanceBetween(value.lat, value.lng, this.radiusLat, this.radiusLong);
    });
  }

  getDistanceBetween(lat1, long1, lat2, long2) {
    var from = new google.maps.LatLng(lat1, long1);
    var to = new google.maps.LatLng(lat2, long2);

    if (google.maps.geometry.spherical.computeDistanceBetween(from, to) <= this.radius) {
      console.log('Radius', this.radius);
      console.log('Distance Between', google.maps.geometry.spherical.computeDistanceBetween(
        from, to
      ));
      return true;
    } else {
      return false;
    }
  }
  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result);
  }

  onLocationSelected(location: Location) {
    console.log('onLocationSelected: ', location);
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }

  onGermanAddressMapped($event: GermanAddress) {
    console.log('onGermanAddressMapped', $event);
  }
  mapClicked($event){
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
  // this.getAddress(this.latitude, this.longitude);
     
    this.mapsAPILoader.load().then(() => {  
        let geocoder = new google.maps.Geocoder;  
        let latlng = {  
            lat: this.latitude,  
            lng: this.longitude  
        };  
        geocoder.geocode({  
            'location': latlng  
        }, function(results) {  
            if (results[0]) {  
                this.currentLocation = results[0].formatted_address;  
                console.log(this.currentLocation);  
            } else {  
                console.log('Not found');  
            }  
        });  
    });  

  }

}
