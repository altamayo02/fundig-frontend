import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Camera } from '../../models/camera.model';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Camera[]> {
    return this.http.get<Camera[]>(`${environment.url_ms_business}/api/cameras`)
  }

  find(id: number): Observable<Camera> {
    return this.http.get<Camera>(`${environment.url_ms_business}/api/cameras/${id}`)
  }

  create(camera: Camera): Observable<Camera> {
    return this.http.post<Camera>(`${environment.url_ms_business}/api/cameras/`, camera)
  }

  update(camera: Camera): Observable<Camera> {
    return this.http.put<Camera>(`${environment.url_ms_business}/api/cameras/${camera.id}`, camera)
  }
  
  delete(id: number) {
    return this.http.delete<Camera>(`${environment.url_ms_business}/api/cameras/${id}`)
  }
}
