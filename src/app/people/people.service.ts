import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private people = [
    {
      id: 1,
      name: 'Juri'
    },
    {
      id: 2,
      name: 'Steffi'
    }
  ];

  constructor() {}

  getPeople() {
    return of (this.people);
  }

  getPersonById(personId: number) {
    return of(this.people.find(x => x.id === personId));
  }

}