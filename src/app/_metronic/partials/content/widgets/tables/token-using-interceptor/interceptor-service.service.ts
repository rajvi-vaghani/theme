import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorServiceService implements HttpInterceptor{

  apiUrl = "https://iris-api.mycodelibraries.com/api/User/LoginAuthenticate"
  Url = "https://iris-api.mycodelibraries.com/api/User"

  constructor(private httpclient: HttpClient) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req.clone({
      setHeaders: {
        Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjExMDYiLCJFbWFpbCI6ImFkbWluQG1haWwuY29tIiwiVXNlciI6IkFkbWluaXN0cmF0b3IiLCJuYmYiOjE2NDg0NjM3MTQsImV4cCI6MTY0OTA2ODUxNCwiaWF0IjoxNjQ4NDYzNzE0fQ.mIRSFmOnLk_HPKpGwhBzb80dvShaUlWBoEiXm63OS8M"
      }
    })
    console.log("hello world")
    return next.handle(request)
  }

  //  Rajvi@3884@Vaghani

  getData() {
    return this.httpclient.get(this.Url + "/GetAllUsers")
  }

  isLoggedIn() {
    return localStorage.getItem('userInfo')
  }

  login(email: any, password: any) {
    return this.httpclient.post(this.apiUrl, {
      email: email,
      password: password
    })
  }
  
}
