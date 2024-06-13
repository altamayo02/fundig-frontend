import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../../models/service.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Service[]> {
    return this.http.get<Service[]>(`${environment.url_ms_business}/api/services`)
  }

  find(id: number): Observable<Service> {
    return this.http.get<Service>(`${environment.url_ms_business}/api/services/${id}`)
  }

  create(service: Service): Observable<Service> {
    return this.http.post<Service>(`${environment.url_ms_business}/api/services/`, service)
  }

  update(service: Service): Observable<Service> {
    return this.http.put<Service>(`${environment.url_ms_business}/api/services/${service.id}`, service)
  }
  
  delete(id: number) {
    return this.http.delete<Service>(`${environment.url_ms_business}/api/services/${id}`)
  }
}
