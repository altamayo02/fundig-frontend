import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
providedIn: 'root'
})
export class SecurityService {
  theUser: BehaviorSubject<User>;

  constructor(
    private http: HttpClient
  ) {
    this.theUser = new BehaviorSubject<User>(new User)
  }

  public get activeUserSession(): User {
    return this.theUser.value
  }  

  getUser(): Observable<User> {
    return this.theUser.asObservable()
  }

  setUser(user: User): void {
    this.theUser.next(user)
  }

  getSessionData(): string {
    let currentSession = localStorage.getItem('session');
    return currentSession
  }


  login(user: User): Observable<any> {
    return this.http.post<User>(`${environment.url_ms_security}/api/public/security/login`, user)
  }

  logout(): void {
    localStorage.removeItem('session');
    this.setUser(new User());
  }

  sessionExists(): boolean {
    let currentSession = this.getSessionData()
    return currentSession ? true : false
  }

  loadSession(): void {
    let currentSession = this.getSessionData()
    if (currentSession) {
      this.setUser(JSON.parse(currentSession));
    }
  }

  saveSession(sessionData: any): void {
    let data: User = {
      _id: sessionData['user']['_id'],
      firstnames: sessionData['user']['firstnames'],
      lastnames: sessionData['user']['lastnames'],
      email: sessionData['user']['email'],
      password: '',
      token: sessionData['token']
    }
    localStorage.setItem('session', JSON.stringify(data))
    this.setUser(data)
  }

  send2FACode(user: User): Observable<{session_id: string, message: string}> {
    return this.http.post<{session_id: string, message: string}>(`${environment.url_ms_security}/api/public/security/login`, user)
  }

  validate2FACode(code: String): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${environment.url_ms_security}/api/public/security/2FA`, {
        _id: localStorage.getItem("session_id"),
        code: code
    })
  }

  sendPasswordCode(user: User): Observable<{session_id: string, message: string}> {
    return this.http.post<{session_id: string, message: string}>(`${environment.url_ms_security}/api/public/security/login`, user)
  }
}
