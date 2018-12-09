import { NgModule } from '@angular/core';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { RouterModule } from '@angular/router';
import { PersonDetailLesson7Component } from './person-detail-lesson7/person-detail-lesson7.component';
import { PersonDetailLesson8Component } from './person-detail-lesson8/person-detail-lesson8.component';
import { PersonDetailLesson10Component } from './person-detail-lesson10/person-detail-lesson10.component';
import { PersonResolverService } from './person-resolver.service';
import { PersonDetailLesson14Component } from './person-detail-lesson14/person-detail-lesson14.component';
import { PersonListLesson14Component } from './person-list-lesson14/person-list-lesson14.component';

const routes = [
  {
    //   path: 'people',
    //   // component: PersonDetailComponent
    //   // component: PersonDetailLesson7Component
    //   component: PersonDetailLesson8Component,
    //   pathMatch: 'full'

    // },
    // {
    //   path: 'people/:personId',
    //   // component: PersonDetailComponent
    //   // component: PersonDetailLesson7Component
    //   // component: PersonDetailLesson7Component
    //   component: PersonDetailLesson10Component,
    //   resolve: {
    //     person: PersonResolverService
    //   },
    //   data: {
    //     loadAddresses: true
    //   },
    path: 'people',
    component: PersonListLesson14Component,
  
    children: [
      {
        path: ':personId',
        component: PersonDetailLesson14Component,
        resolve: {
          person: PersonResolverService
        },
        data: {
          loadAddresses: true
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }