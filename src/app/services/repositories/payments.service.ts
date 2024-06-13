import { Injectable } from '@angular/core';
import { Payment } from '../../models/payment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${environment.url_ms_business}/api/cameras`)
  }

  find(id: number): Observable<Payment> {
    return this.http.get<Payment>(`${environment.url_ms_business}/api/cameras/${id}`)
  }

  create(camera: Payment): Observable<Payment> {
    return this.http.post<Payment>(`${environment.url_ms_business}/api/cameras/`, camera)
  }

  update(camera: Payment): Observable<Payment> {
    return this.http.put<Payment>(`${environment.url_ms_business}/api/cameras/${camera.id}`, camera)
  }
  
  delete(id: number) {
    return this.http.delete<Payment>(`${environment.url_ms_business}/api/cameras/${id}`)
  }
}
