import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) {}

  createReservation(reservation: any): Observable<any> {
    return this.http.post('http://localhost:3000/reservation', reservation);
  }
}
