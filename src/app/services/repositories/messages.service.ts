import { Injectable } from '@angular/core';
import { Message } from '../../models/message.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Message[]> {
    return this.http.get<Message[]>(`${environment.url_ms_business}/api/cameras`)
  }

  find(id: number): Observable<Message> {
    return this.http.get<Message>(`${environment.url_ms_business}/api/cameras/${id}`)
  }

  create(camera: Message): Observable<Message> {
    return this.http.post<Message>(`${environment.url_ms_business}/api/cameras/`, camera)
  }

  update(camera: Message): Observable<Message> {
    return this.http.put<Message>(`${environment.url_ms_business}/api/cameras/${camera.id}`, camera)
  }
  
  delete(id: number) {
    return this.http.delete<Message>(`${environment.url_ms_business}/api/cameras/${id}`)
  }
}
