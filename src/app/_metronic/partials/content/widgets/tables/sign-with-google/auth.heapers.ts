import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AuthHelpers implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('userInfo')) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo') as string)}`
                    // Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo') as string).token}`
                }
            });
        }
        return next.handle(request);
    }
}
