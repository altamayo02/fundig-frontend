import { Injectable } from '@angular/core';
import { Review } from '../../models/review.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Review[]> {
    return this.http.get<Review[]>(`${environment.url_ms_business}/api/cameras`)
  }

  find(id: number): Observable<Review> {
    return this.http.get<Review>(`${environment.url_ms_business}/api/cameras/${id}`)
  }

  create(camera: Review): Observable<Review> {
    return this.http.post<Review>(`${environment.url_ms_business}/api/cameras/`, camera)
  }

  update(camera: Review): Observable<Review> {
    return this.http.put<Review>(`${environment.url_ms_business}/api/cameras/${camera.id}`, camera)
  }
  
  delete(id: number) {
    return this.http.delete<Review>(`${environment.url_ms_business}/api/cameras/${id}`)
  }
}
