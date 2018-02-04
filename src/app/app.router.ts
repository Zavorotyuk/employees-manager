import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
  {
    path: '',
    redirectTo: 'people',
    pathMatch: 'full'
  },
  {
    path: 'people',
    loadChildren: 'app/people/people.module#PeopleModule'
  },
  {
    path: 'visuals',
    loadChildren: 'app/visuals/visuals.module#VisualsModule'
  }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
