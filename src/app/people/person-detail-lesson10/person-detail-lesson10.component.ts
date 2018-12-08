import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-detail-lesson10',
  templateUrl: './person-detail-lesson10.component.html',
  styleUrls: ['./person-detail-lesson10.component.scss']
})
export class PersonDetailLesson10Component implements OnInit {

  person: any;
  constructor(private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      console.log('Person detail component', data.loadAddresses);
      this.person = data.person;
    });
  }

  public navigateByUrl() {
    this.router.navigateByUrl('/people');
  }

  public navigate() {
    this.router.navigate(['/people']);
  }

  public navigateActiveRoute() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

}
