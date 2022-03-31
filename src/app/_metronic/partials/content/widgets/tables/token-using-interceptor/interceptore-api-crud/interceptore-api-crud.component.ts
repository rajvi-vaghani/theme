import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InterceptorServiceService } from '../interceptor-service.service';

@Component({
  selector: 'app-interceptore-api-crud',
  templateUrl: './interceptore-api-crud.component.html',
  styleUrls: ['./interceptore-api-crud.component.scss']
})
export class InterceptoreApiCrudComponent implements OnInit {

  userData:any = []
  apiUrl = "https://iris-api.mycodelibraries.com/api/User"
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjExMDYiLCJFbWFpbCI6ImFkbWluQG1haWwuY29tIiwiVXNlciI6IkFkbWluaXN0cmF0b3IiLCJuYmYiOjE2NDg0NjM3MTQsImV4cCI6MTY0OTA2ODUxNCwiaWF0IjoxNjQ4NDYzNzE0fQ.mIRSFmOnLk_HPKpGwhBzb80dvShaUlWBoEiXm63OS8M"

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  }
  constructor(private http : HttpClient, private service : InterceptorServiceService) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(){
    this.http.get(this.apiUrl + "/GetAllUsers" , this.httpOptions).subscribe((res:any) => {
      this.userData = res.responseData
    })
  }
}
