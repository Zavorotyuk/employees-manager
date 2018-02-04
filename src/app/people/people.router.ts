import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';


export const PEOPLE_ROUTER: Routes = [
  {
    path: '',
    component: PeopleComponent,
  }
]


export const peopleRouter = RouterModule.forChild(PEOPLE_ROUTER);
