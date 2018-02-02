import { NgModule } from '@angular/core';
import { VisualsComponent } from './visuals/visuals.component';
import { visualsRouter } from './visuals.router';

@NgModule({
  imports: [
    visualsRouter
  ],
  declarations: [VisualsComponent]
})
export class VisualsModule { }
