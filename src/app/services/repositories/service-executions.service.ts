import { Injectable } from '@angular/core';
import { ServiceExecution } from '../../models/service-execution.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceExecutionsService {

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<ServiceExecution[]> {
    return this.http.get<ServiceExecution[]>(`${environment.url_ms_business}/api/cameras`)
  }

  find(id: number): Observable<ServiceExecution> {
    return this.http.get<ServiceExecution>(`${environment.url_ms_business}/api/cameras/${id}`)
  }

  create(camera: ServiceExecution): Observable<ServiceExecution> {
    return this.http.post<ServiceExecution>(`${environment.url_ms_business}/api/cameras/`, camera)
  }

  update(camera: ServiceExecution): Observable<ServiceExecution> {
    return this.http.put<ServiceExecution>(`${environment.url_ms_business}/api/cameras/${camera.id}`, camera)
  }
  
  delete(id: number) {
    return this.http.delete<ServiceExecution>(`${environment.url_ms_business}/api/cameras/${id}`)
  }
}
