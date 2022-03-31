// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { InterceptorServiceService } from './interceptor-service.service';


// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {

//   constructor(private router: Router, private interceptorService : InterceptorServiceService) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     // debugger
//     const user = this.interceptorService.isLoggedIn();
//     if (user) {
//       // authorised so return true
//       return true;
//     }

//     // not logged in so redirect to login page with the return url
//     this.router.navigate(['/crafted/widgets'], {
//       queryParams: { returnUrl: state.url },
//     });
//     return false;
//   }
// }