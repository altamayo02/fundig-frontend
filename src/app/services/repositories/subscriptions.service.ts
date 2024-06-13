import { Injectable } from '@angular/core';
import { Subscription } from '../../models/subscription.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(`${environment.url_ms_business}/api/cameras`)
  }

  find(id: number): Observable<Subscription> {
    return this.http.get<Subscription>(`${environment.url_ms_business}/api/cameras/${id}`)
  }

  create(camera: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(`${environment.url_ms_business}/api/cameras/`, camera)
  }

  update(camera: Subscription): Observable<Subscription> {
    return this.http.put<Subscription>(`${environment.url_ms_business}/api/cameras/${camera.id}`, camera)
  }
  
  delete(id: number) {
    return this.http.delete<Subscription>(`${environment.url_ms_business}/api/cameras/${id}`)
  }
}
