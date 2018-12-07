import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  personId: string;
  shouldShowChildren: boolean;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    //   this.activeRoute.params.subscribe(data => {
    //     this.personId = data['personId'];
    //  });
    this.personId = this.activeRoute.snapshot.params['personId'];
    // this.activeRoute.queryParams.subscribe(data => {
    //   this.shouldShowChildren = (data['showChilds'] === 'true')
    // });
  }

}
