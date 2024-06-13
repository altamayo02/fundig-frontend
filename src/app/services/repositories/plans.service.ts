import { Injectable } from '@angular/core';
import { Plan } from '../../models/plan.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Plan[]> {
    return this.http.get<Plan[]>(`${environment.url_ms_business}/api/cameras`)
  }

  find(id: number): Observable<Plan> {
    return this.http.get<Plan>(`${environment.url_ms_business}/api/cameras/${id}`)
  }

  create(camera: Plan): Observable<Plan> {
    return this.http.post<Plan>(`${environment.url_ms_business}/api/cameras/`, camera)
  }

  update(camera: Plan): Observable<Plan> {
    return this.http.put<Plan>(`${environment.url_ms_business}/api/cameras/${camera.id}`, camera)
  }
  
  delete(id: number) {
    return this.http.delete<Plan>(`${environment.url_ms_business}/api/cameras/${id}`)
  }
}
