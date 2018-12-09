import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PeopleRoutingModule } from './people-routing.module';
import { PersonDetailLesson10Component } from './person-detail-lesson10/person-detail-lesson10.component';
import { PersonDetailLesson7Component } from './person-detail-lesson7/person-detail-lesson7.component';
import { PersonDetailLesson8Component } from './person-detail-lesson8/person-detail-lesson8.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonDetailLesson14Component } from './person-detail-lesson14/person-detail-lesson14.component';
import { PersonListLesson14Component } from './person-list-lesson14/person-list-lesson14.component';

@NgModule({
  declarations: [PersonDetailComponent,
    PersonDetailLesson7Component,
    PersonDetailLesson8Component,
    PersonDetailLesson10Component,
    PersonDetailLesson14Component,
    PersonListLesson14Component],
  imports: [
    CommonModule, PeopleRoutingModule
  ]
})
export class PeopleModule { }
