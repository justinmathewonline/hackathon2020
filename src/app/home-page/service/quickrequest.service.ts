import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { QuickRequest } from '../../models/QuickRequest';

@Injectable({
  providedIn: 'root'
})
export class QuickrequestService {

  constructor(private http: HttpClient) { }
  private url: string;

  getQuickRequests(): Observable<QuickRequest[]> {
    this.url = environment.json_server_url + environment.quickRequest;
    return this.http.get<QuickRequest[]>(this.url);
  }
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

  updateQuickRequest(id, args) {
    const body = JSON.stringify(args);
    const header = {
      'Content-Type': 'application/json'
    };
    const options = {
      method: 'PUT',
      headers: new HttpHeaders(header)
    };
    this.url = environment.json_server_url + environment.quickRequest+"/" +id;
    return this.http.put(this.url, body, options)    
  }

  deleteQuickRequest(id){
    this.url = environment.json_server_url + environment.quickRequest + "/" +id;
    return this.http.delete(this.url)    
  }
}
