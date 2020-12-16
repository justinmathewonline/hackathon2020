import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { Ambulances } from '../../models/Ambulances';
import { AvailableAmbulances } from '../../models/AvailableAmbulances';

@Injectable({
  providedIn: 'root'
})
export class QuickrequestService {

  constructor(private http: HttpClient) { }
  private url: string;

  // getAmbulances(): Observable<Ambulances[]> {
  //   this.url = environment.json_server_url + environment.ambulance;
  //   return this.http.get<Ambulances[]>(this.url);
  // }
  // getAvailableAmbulances(): Observable<string[]> {
  //   this.url = environment.json_server_url + environment.availableAmbulances;
  //   return this.http.get<string[]>(this.url);
  // }
  // getAvailableAmbulancesLocation(): Observable<AvailableAmbulances[]> {
  //   this.url = environment.json_server_url + environment.availableAmbulances;
  //   return this.http.get<AvailableAmbulances[]>(this.url);
  // }

  addQuickRequest(args) {
    const body = JSON.stringify(args);
    const header = {
      'Content-Type': 'application/json'
    };
    const options = {
      method: 'POST',
      headers: new HttpHeaders(header)
    };
    this.url = environment.json_server_url + environment.quickRequest;
    return this.http.post(this.url, body, options);
  }

}
