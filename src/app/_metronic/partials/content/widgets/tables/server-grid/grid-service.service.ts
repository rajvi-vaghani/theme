import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GridServiceService {
    token: any = "adbad2c528827bb0e8dc85ff4b9646804f70dfcfe73e3d5d90f59018c19b1b03"
    private apiURL = "https://gorest.co.in/public/v2/posts";

    httpOptions = {
        headers: new HttpHeaders({
            // "header key " : "header value"
            'Authorization': 'Bearer ' + this.token
        })
    }

    constructor(private httpClient: HttpClient) { }

    getAll(): Observable<any> {
        return this.httpClient.get(this.apiURL, this.httpOptions)
    }

    searchGrid(url: string): Observable<any> {
        return this.httpClient.get(url, this.httpOptions)
    }

    create(value: any): Observable<any> {
        return this.httpClient.post(this.apiURL, value, this.httpOptions)
    }

    findData(id: number): Observable<any> {
        return this.httpClient.get(this.apiURL + '/' + id , this.httpOptions)
    }

    update(value: any, id: any): Observable<any> {
        return this.httpClient.put(this.apiURL + '/' + id, value, this.httpOptions)
        //  return this.httpClient.put(this.apiURL + '/1130' , value , this.httpOptions)
    }

    delete(id: any) {
        return this.httpClient.delete(this.apiURL + '/' + id, this.httpOptions)
    }

}
