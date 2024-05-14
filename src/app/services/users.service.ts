import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	constructor(
		private http: HttpClient
	) { }
	
	list(): Observable<UserModel[]> {
		return this.http.get<UserModel[]>(`${environment.url_ms_business}/users`)
	}
	
	find(id: number): Observable<UserModel> {
		return this.http.get<UserModel>(`${environment.url_ms_business}/users/${id}`)
	}
	
	findByMongoId(id: string): Observable<UserModel> {
		return this.http.get<UserModel>(`${environment.url_ms_business}/users/mongo/${id}`)
	}
	
	create(theater: UserModel): Observable<UserModel> {
		return this.http.post<UserModel>(`${environment.url_ms_business}/users`, theater)
	}
	
	update(theater: UserModel): Observable<UserModel> {
		return this.http.put<UserModel>(`${environment.url_ms_business}/users/${theater.id}`, theater)
	}
	
	delete(id: number) {
		return this.http.delete<UserModel>(`${environment.url_ms_business}/users/${id}`)
	}
}
