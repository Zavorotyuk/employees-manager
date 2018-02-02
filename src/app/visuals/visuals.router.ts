import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualsComponent } from './visuals/visuals.component';


export const VISUALS_ROUTER: Routes = [
  {
    path: '',
    component: VisualsComponent,
  }
]


export const visualsRouter = RouterModule.forChild(VISUALS_ROUTER);
