import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
	constructor(
		private http: HttpClient
	) { }
	

	send2FACode(user: UserModel): Observable<{session_id: string, code: number}> {
		return this.http.post<{session_id: string, code: number}>(`${environment.url_ms_security}/api/public/security/login`, user)
	}

	validate2FACode(code: String): Observable<{token: string}> {
		return this.http.post<{token: string}>(`${environment.url_ms_security}/api/public/security/2FA`, {
			_id: sessionStorage.getItem("session_id"),
			code: code
		})
	}
}
