import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AmbulancesService } from '../ambulances/service/ambulances.service';
import { Router } from '@angular/router';
import { QuickrequestService } from '../home-page/service/quickrequest.service';
import { QuickRequest } from '../models/QuickRequest';
import { PopupService } from '../shared/popup/popup.service';
import { RegistrationService } from '../registration/service/registration.service';
import { Users } from '../models/Users';
import { Ambulances } from '../models/Ambulances';
import { AvailableAmbulances } from '../models/AvailableAmbulances';

@Component({
  selector: 'app-driverhome',
  templateUrl: './driverhome.component.html',
  styleUrls: ['./driverhome.component.css']
})
export class DriverhomeComponent implements OnInit {
  lat = 8.5046;
  lng = 76.899999;
  zoom = 11;
  @Input() slatitude: number;
  @Input() slongitude: number;
  @Input() drlatitude: number;
  @Input() drlongitude: number;
  dataSubject: any = {};
  public emgLocation: string;
  closestReq: QuickRequest;
  qkRequest: QuickRequest;
  vendor: Users;
  amb: Ambulances;
  currentAmbs: AvailableAmbulances;
  public requests: QuickRequest[];
  public acceptedRequests: QuickRequest[];

  constructor(private service: QuickrequestService, private router: Router,
    private popup: PopupService, private vendService: RegistrationService,
    private ambService: AmbulancesService) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  ngOnInit(): void {
    this.ambService.getAvailableAmbulancesLocation().subscribe(a => {
      this.currentAmbs = a.find(x => x.ambulanceId === localStorage.getItem("currentAmbulanceId")
        && x.vendorId === localStorage.getItem("vendorId"));
        this.drlatitude = this.currentAmbs.latitude;
        this.drlongitude = this.currentAmbs.longitude;
      if (this.currentAmbs !== undefined && this.currentAmbs.isOnService === "true") {
        this.getAcceptedRequests(this.currentAmbs.vendorId, this.currentAmbs.ambulanceId);        
      }
      else if(this.currentAmbs.isOnService === "false"){
        this.getQuickRequests();
        localStorage.setItem("availAmbId", this.currentAmbs.id);
      }
    });
  }
  onClickLogins() {
    this.router.navigate(['/completedtrips']);
  }

  getQuickRequests() {
    this.service.getQuickRequests().subscribe(data => {
      this.requests = data.filter(x => x.status === "Pending");
      if (this.requests.length > 0) {
        this.alertClosestRequest();
      }
    });
  }
  getAcceptedRequests(vId, aId) {
    this.service.getQuickRequests().subscribe(data => {
      this.acceptedRequests = data.filter(x => x.vendorId === vId && x.ambulanceId === aId);
    });
  }
  onClickTrips() {
    this.router.navigate(['/completedtrips']);
  }
  onClickHome() {
    this.router.navigate(['/driverhome']);
  }
  logout() {
    localStorage.setItem("isUserLoggedIn", "false");
    this.ambService.deleteAvailableAmbulance(localStorage.getItem("availAmbId")).subscribe();
  }
  openModal(id: string) {
    this.popup.open(id);
  }

  closeModal(id: string) {
    this.popup.close(id);
  }
  acceptRequest() {
    this.service.getQuickRequests().subscribe(data => {
      this.qkRequest = data.find(x => x.id === this.closestReq.id);
      this.vendService.getVendors().subscribe(res => {
        this.vendor = res.find(x => x.VendorId === localStorage.getItem("vendorId"));
        this.ambService.getAmbulances().subscribe(result => {
          this.amb = result.find(x => x.VendorId === localStorage.getItem("vendorId")
            && x.AmbulanceId === localStorage.getItem("currentAmbulanceId"));
          this.service.getQuickRequests().subscribe(data => {
            let id = this.qkRequest.id;
            const args = {
              id: id,
              source: this.qkRequest.source,
              phoneNumber: this.qkRequest.phoneNumber,
              latitude: this.qkRequest.latitude,
              longitude: this.qkRequest.longitude,
              status: "Accepted",
              vendorId: this.vendor.VendorId,
              vendorName: this.vendor.Name,
              ambulanceId: this.amb.AmbulanceId,
              driverContact: this.amb.Mobile,
              regNumber: this.amb.RegNumber
            };
            this.service.updateQuickRequest(id, args).subscribe(q => {
              const args = {
                id: this.currentAmbs.id,
                vendorId: this.vendor.VendorId,
                ambulanceId: this.currentAmbs.ambulanceId,
                latitude: this.currentAmbs.latitude,
                longitude: this.currentAmbs.longitude,
                label: "Label not available",
                isOnService: "true"
              };
              this.ambService.updateAvailableAmbulance(this.currentAmbs.id, args).subscribe(del => {
                this.getAcceptedRequests(this.currentAmbs.vendorId, this.currentAmbs.ambulanceId);
                this.closeModal("custom-modal-1");
              });
            });
          });
        });
      });
    });
  }

  alertClosestRequest() {
    let lat = this.currentAmbs.latitude;
    let lng = this.currentAmbs.longitude;
    let R = 5000; // radius of earth in km
    let distances = [];
    let closest = -1;
    let i = 0;
    let closestReqId = "";
    if (this.requests.length > 0) {
      this.requests.forEach(marker => {
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
          closestReqId = marker.id;
        }
        i++;
      });
    }
    this.closestReq = this.requests.find(x => x.id === closestReqId);
    this.emgLocation = this.closestReq.source;
  }
  rad(x) { return x * Math.PI / 180; }
}
