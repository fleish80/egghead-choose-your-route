import { CanActivate, ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   
    
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any>  {
        if (this.authService.isLoggedIn()) {
            return of(true);
          } else {
            this.router.navigateByUrl('/');
            return of(false);
          }
    }
}