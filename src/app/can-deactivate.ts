import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AboutComponent } from "./about/about.component";
@Injectable({
    providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<AboutComponent> {

    canDeactivate(component: AboutComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const isDirty = component.isDirty;
        if (isDirty) {
            return confirm('You have unsaved changes, do you want to proceed?');
          } else {
            return true;
          }
    }

    
}
