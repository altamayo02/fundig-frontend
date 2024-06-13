import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { House } from '../../models/house.model';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<House[]> {
    return this.http.get<House[]>(`${environment.url_ms_business}/api/cameras`)
  }

  find(id: number): Observable<House> {
    return this.http.get<House>(`${environment.url_ms_business}/api/cameras/${id}`)
  }

  create(camera: House): Observable<House> {
    return this.http.post<House>(`${environment.url_ms_business}/api/cameras/`, camera)
  }

  update(camera: House): Observable<House> {
    return this.http.put<House>(`${environment.url_ms_business}/api/cameras/${camera.id}`, camera)
  }
  
  delete(id: number) {
    return this.http.delete<House>(`${environment.url_ms_business}/api/cameras/${id}`)
  }
}
