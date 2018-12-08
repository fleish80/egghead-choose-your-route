import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PeopleRoutingModule } from './people-routing.module';
import { PersonDetailLesson10Component } from './person-detail-lesson10/person-detail-lesson10.component';
import { PersonDetailLesson7Component } from './person-detail-lesson7/person-detail-lesson7.component';
import { PersonDetailLesson8Component } from './person-detail-lesson8/person-detail-lesson8.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
  declarations: [PersonDetailComponent,
    PersonDetailLesson7Component,
    PersonDetailLesson8Component,
    PersonDetailLesson10Component],
  imports: [
    CommonModule, PeopleRoutingModule
  ]
})
export class PeopleModule { }
