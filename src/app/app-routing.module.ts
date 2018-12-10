import { NgModule } from '@angular/core';
import { Route, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomRoutePreloader } from './custom-route-preloader';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts',
    loadChildren: './contact/contact.module#ContactModule',
    data: {
      preload: true
    }
    
  },
  {
    path: 'people',
    loadChildren: './people/people.module#PeopleModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
    preloadingStrategy: CustomRoutePreloader

  })],
  exports: [RouterModule],
  providers: [CustomRoutePreloader]
})
export class AppRoutingModule { }
