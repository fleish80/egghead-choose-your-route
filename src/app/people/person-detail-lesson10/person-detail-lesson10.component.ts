import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail-lesson10',
  templateUrl: './person-detail-lesson10.component.html',
  styleUrls: ['./person-detail-lesson10.component.scss']
})
export class PersonDetailLesson10Component implements OnInit {

  person: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.person = data.person;
    })
  }

}
