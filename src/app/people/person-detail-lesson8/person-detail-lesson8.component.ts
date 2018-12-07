import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-detail-lesson8',
  templateUrl: './person-detail-lesson8.component.html',
  styleUrls: ['./person-detail-lesson8.component.scss']
})
export class PersonDetailLesson8Component implements OnInit {
  people: Observable<any>;
  person: any;
  constructor(
    private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }

}
