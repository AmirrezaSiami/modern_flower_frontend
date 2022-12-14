import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // const token = this.authService.getToken();
    //
    // if (token) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `bearer ${token}`
    //     }
    //   });
    // }

    return next.handle(request);
  }
}
