import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbulancesService {

  constructor(private http: HttpClient) { }
  private url: string;

  getAmbulances(): Observable<string[]>{
    this.url= environment.json_server_url + environment.ambulance;
    return this.http.get<string[]>(this.url);
  }
  getAvailableAmbulances():Observable<string[]>{
    this.url= environment.json_server_url + environment.availableAmbulances;
    return this.http.get<string[]>(this.url);
  }

  addAmbulance(args){
    const body = JSON.stringify(args);
    const header = {     
      'Content-Type': 'application/json'
    };
    const options = {
      method: 'POST',
      headers: new HttpHeaders(header)
    };
    this.url = environment.json_server_url + environment.ambulance;
    return this.http.post(this.url, body, options);
  }
}
