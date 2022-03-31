import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TokenCrudService {

  token:any = "adbad2c528827bb0e8dc85ff4b9646804f70dfcfe73e3d5d90f59018c19b1b03"
  private Url = "https://gorest.co.in/public/v2/users"

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  }

  constructor(private http: HttpClient) { }

  searchUser(url: string): Observable<any> {
    return this.http.get(url, this.httpOptions)
  }

  getUser(): Observable<any>  {
    return this.http.get(this.Url, this.httpOptions)
  }

  addUser(value: any): Observable<any>  {
    return this.http.post(this.Url, value, this.httpOptions)
  }

  findUser(id: any): Observable<any>  {
    return this.http.get(this.Url + '/' + id, this.httpOptions)
  }

  updateUser(value: any, id: any): Observable<any>  {
    return this.http.put(this.Url + '/' + id, value, this.httpOptions)
  }

  deleteUser(id: any): Observable<any>  {
    return this.http.delete(this.Url + '/' + id, this.httpOptions)
  }

}
