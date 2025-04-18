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

  public addBoat(boat: Boat): Observable<Boat> {
    return this.http.post<Boat>(`${this.apiUrl}/Boat`, boat);
  }

  public deleteBoat(id: string): Observable<Boat> {
    return this.http.delete<Boat>(`${this.apiUrl}/Boat/${id}`);
  }
}
