import { CanActivate, ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, CanActivateChild, CanLoad, UrlSegment } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.authService.isLoggedIn()) {
            return of(true);
        } else {
            this.router.navigateByUrl('/');
            return of(false);
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.authService.isLoggedIn()) {
            return of(true);
        } else {
            this.router.navigateByUrl('/');
            return of(false);
        }
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
        if (this.authService.isLoggedIn()) {
            return of(true);
        } else {
            this.router.navigateByUrl('/');
            return of(false);
        }
    }

}