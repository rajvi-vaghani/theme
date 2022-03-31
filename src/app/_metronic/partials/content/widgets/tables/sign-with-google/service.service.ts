import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  apiUrl = "https://iris-api.mycodelibraries.com/api/User/LoginAuthenticate"
  constructor(private http: HttpClient) { }

  isLoggedIn(){
    return localStorage.getItem('userInfo');
  }

  login(email:string, password:string){
    return this.http.post(this.apiUrl  , {
      email : email,
      password: password
    })
  }
}
