import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-person-list-lesson14',
  templateUrl: './person-list-lesson14.component.html',
  styleUrls: ['./person-list-lesson14.component.scss']
})
export class PersonListLesson14Component implements OnInit {

  people: Observable<any>;
  person: any;
  constructor(
    private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }

}
