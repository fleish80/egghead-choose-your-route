import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-person-detail-lesson7',
  templateUrl: './person-detail-lesson7.component.html',
  styleUrls: ['./person-detail-lesson7.component.scss']
})
export class PersonDetailLesson7Component implements OnInit {

  person: any;
  constructor(private activatedRoute: ActivatedRoute,
    private peopleService: PeopleService) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap(params => this.peopleService.getPersonById(+params.personId))
    ).subscribe(person => this.person = person);
  }

}
