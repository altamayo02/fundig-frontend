import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	constructor(
		private http: HttpClient
	) { }
	
	list(): Observable<User[]> {
		return this.http.get<User[]>(`${environment.url_ms_security}/api/users`)
	}
	
	find(id: number): Observable<User> {
		return this.http.get<User>(`${environment.url_ms_security}/api/users/${id}`)
	}
	
	create(user: User): Observable<User> {
		return this.http.post<User>(`${environment.url_ms_security}/api/users`, user)
	}
	
	update(user: User): Observable<User> {
		return this.http.put<User>(`${environment.url_ms_security}/api/users/${user._id}`, user)
	}
	
	delete(id: number) {
		return this.http.delete<User>(`${environment.url_ms_security}/api/users/${id}`)
	}
}
