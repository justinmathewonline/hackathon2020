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
    this.url= environment.json_server_url + environment.getambulance;
    return this.http.get<string[]>(this.url);
  }
}
