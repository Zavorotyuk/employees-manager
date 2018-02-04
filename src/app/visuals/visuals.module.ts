import { NgModule } from '@angular/core';
import { VisualsComponent } from './visuals/visuals.component';
import { visualsRouter } from './visuals.router';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    visualsRouter,
    SharedModule
  ],
  declarations: [VisualsComponent, PieChartComponent],
})
export class VisualsModule { }
