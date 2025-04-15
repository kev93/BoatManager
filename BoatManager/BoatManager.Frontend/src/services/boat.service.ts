import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boat } from '../models/boat'
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class BoatService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public getBoats(): Observable<Boat[]> {
    return this.http.get<Boat[]>(`${this.apiUrl}/Boat`);
  }
}
