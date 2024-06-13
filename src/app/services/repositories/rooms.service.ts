import { Injectable } from '@angular/core';
import { Room } from '../../models/room.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Room[]> {
    return this.http.get<Room[]>(`${environment.url_ms_business}/api/cameras`)
  }

  find(id: number): Observable<Room> {
    return this.http.get<Room>(`${environment.url_ms_business}/api/cameras/${id}`)
  }

  create(camera: Room): Observable<Room> {
    return this.http.post<Room>(`${environment.url_ms_business}/api/cameras/`, camera)
  }

  update(camera: Room): Observable<Room> {
    return this.http.put<Room>(`${environment.url_ms_business}/api/cameras/${camera.id}`, camera)
  }
  
  delete(id: number) {
    return this.http.delete<Room>(`${environment.url_ms_business}/api/cameras/${id}`)
  }
}
