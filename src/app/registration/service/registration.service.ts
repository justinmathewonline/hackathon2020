import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  
  constructor(private http: HttpClient) { }
  private url: string;

  getVendors(): Observable<string[]>{
    this.url= environment.json_server_url + environment.vendors;
    return this.http.get<string[]>(this.url);
  }
  
  addVendor(args){
    const body = JSON.stringify(args);
    const header = {     
      'Content-Type': 'application/json'
    };
    const options = {
      method: 'POST',
      headers: new HttpHeaders(header)
    };
    this.url = environment.json_server_url + environment.vendors;
    return this.http.post(this.url, body, options);
  }
}
