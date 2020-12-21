import { Component, OnInit, ViewChild } from '@angular/core';

interface marker {
  lat: number;
  lng: number;
  label?: string;
  // draggable: boolean;
  // content?: string;
  // isShown: boolean;
  // icon: string;
}
@Component({
  selector: 'app-mapdirection',
  templateUrl: './mapdirection.component.html',
  styleUrls: ['./mapdirection.component.css']
})
export class MapdirectionComponent implements OnInit {
  
  constructor() { }

  lat = 8.5046;
  lng = 76.899999;
  zoom = 11;

  public origin: any;
  public destination: any;

  // markers = [
  //   {
  //     lat: 21.1594627,
  //     lng: 72.6822083,
  //     label: 'Surat'
  //   },
  //   {
  //     lat: 23.0204978,
  //     lng: 72.4396548,
  //     label: 'Ahmedabad'
  //   },
  //   {
  //     lat: 22.2736308,
  //     lng: 70.7512555,
  //     label: 'Rajkot'
  //   }
  // ];
  markers: marker[] = []

  ngOnInit(): void {   

    //this.getDirection();
  }

  getDirection() {
    this.origin = { lat: 21.1594627, lng: 72.6822083 };
    this.destination = { lat: 23.0204978, lng: 72.4396548 };

  }

}
