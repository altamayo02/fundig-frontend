import { Injectable } from '@angular/core';
import { Location } from '../../models/location.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Location[]> {
    return this.http.get<Location[]>(`${environment.url_ms_business}/api/cameras`)
  }

  find(id: number): Observable<Location> {
    return this.http.get<Location>(`${environment.url_ms_business}/api/cameras/${id}`)
  }

  create(camera: Location): Observable<Location> {
    return this.http.post<Location>(`${environment.url_ms_business}/api/cameras/`, camera)
  }

  update(camera: Location): Observable<Location> {
    return this.http.put<Location>(`${environment.url_ms_business}/api/cameras/${camera.id}`, camera)
  }
  
  delete(id: number) {
    return this.http.delete<Location>(`${environment.url_ms_business}/api/cameras/${id}`)
  }
}
