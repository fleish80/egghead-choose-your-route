import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-detail-lesson14',
  templateUrl: './person-detail-lesson14.component.html',
  styleUrls: ['./person-detail-lesson14.component.scss']
})
export class PersonDetailLesson14Component implements OnInit {

  person: any;
  constructor(public activatedRoute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      console.log('Person detail component', data.loadAddresses);
      this.person = data.person;
    });
  }
}
