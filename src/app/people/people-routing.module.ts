import { NgModule } from '@angular/core';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { RouterModule } from '@angular/router';
import { PersonDetailLesson7Component } from './person-detail-lesson7/person-detail-lesson7.component';
import { PersonDetailLesson8Component } from './person-detail-lesson8/person-detail-lesson8.component';

const routes = [
  {
    path: 'people',
    // component: PersonDetailComponent
    // component: PersonDetailLesson7Component
    component: PersonDetailLesson8Component,
    pathMatch: 'full'

  },
  {
    path: 'people/:personId',
    // component: PersonDetailComponent
    // component: PersonDetailLesson7Component
    component: PersonDetailLesson7Component

  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}