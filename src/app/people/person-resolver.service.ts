import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { PeopleService } from './people.service';

@Injectable({
  providedIn: 'root'
})
export class PersonResolverService implements Resolve<any> {

  constructor(private peopleService: PeopleService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('PersonDataResolver', route.data['loadAddresses']);
    const personId = +route.params['personId'];
    return this.peopleService.getPersonById(personId);
  }
}