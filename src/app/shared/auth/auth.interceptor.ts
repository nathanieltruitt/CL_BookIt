import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import { exhaustMap, take } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return this.authService.currentUser.pipe(
        take(1),
        exhaustMap(user => {
          // * just does it even if there are errors
          if (!user) return next.handle(req)

          const modifiedReq = req.clone({
            params: new HttpParams().set("auth", user.token)
          })

          return next.handle(modifiedReq)
        })
      )
  }
}
