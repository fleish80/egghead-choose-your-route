import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PeopleRoutingModule } from './people-routing.module';
import { PersonDetailLesson7Component } from './person-detail-lesson7/person-detail-lesson7.component';
import { PersonDetailLesson8Component } from './person-detail-lesson8/person-detail-lesson8.component';
import { PersonResolverService } from './person-resolver.service';
import { PersonDetailLesson10Component } from './person-detail-lesson10/person-detail-lesson10.component';

@NgModule({
  declarations: [PersonDetailComponent,
    PersonDetailLesson7Component,
    PersonDetailLesson8Component,
    PersonDetailLesson10Component],
  imports: [
    CommonModule, PeopleRoutingModule
  ],
  providers: [PersonResolverService]
})
export class PeopleModule { }
