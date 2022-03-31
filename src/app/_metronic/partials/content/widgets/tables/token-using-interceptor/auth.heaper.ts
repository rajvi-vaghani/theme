// import { Injectable } from '@angular/core';
// import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
// import { Observable } from 'rxjs';
// @Injectable()
// export class AuthHelpers implements HttpInterceptor {
//     constructor() { }
//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         if (localStorage.getItem('userInfo')) {
//             request = request.clone({
//                 setHeaders: {
//                     Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo') as string).token}`
//                 }
//             });
//         }

//         // request = request.clone({
//         //     setHeaders : {
//         //         Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjExMDYiLCJFbWFpbCI6ImFkbWluQG1haWwuY29tIiwiVXNlciI6IkFkbWluaXN0cmF0b3IiLCJuYmYiOjE2NDg0NjM3MTQsImV4cCI6MTY0OTA2ODUxNCwiaWF0IjoxNjQ4NDYzNzE0fQ.mIRSFmOnLk_HPKpGwhBzb80dvShaUlWBoEiXm63OS8M" 
//         //     }
//         // })
//         debugger
//         return next.handle(request);

//     }

// }
