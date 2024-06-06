import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { SecurityService } from '../services/security.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const excludedRoutes = [
  '/login',
  '/2FA', // ???
]

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
	private theSecurityService: SecurityService,
	private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let theUser = this.theSecurityService.activeUserSession
    const token = theUser["token"]
    excludedRoutes.forEach(route => {
      if (request.url.includes(route)) {
        return next.handle(request)
      }  
    })
    console.log("colocando token " + token)
    // Adjunta el token a la solicitud
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })
    return next.handle(authRequest).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          Swal.fire({
            title: 'No está autorizado para esta operación',
            icon: 'error',
            timer: 5000
          })
          this.router.navigateByUrl('/dashboard')
        }else if (err.status === 400) {
          Swal.fire({
            title: 'Existe un error, contacte al administrador',
            icon: 'error',
            timer: 5000
          })
        }
        return new Observable<never>()
      })
    )
  }
}
