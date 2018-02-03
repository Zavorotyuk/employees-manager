import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatIconModule } from '@angular/material';
import { FilterPipe } from './pipes/filter.pipe';


const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  imports: [
    ...materialModules,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rectangleBounce,
      fullScreenBackdrop: true,
      backdropBackgroundColour: '#ff000000',
      backdropBorderRadius: '10px',
      primaryColour: '#000000c7'

    })
  ],
  declarations: [FilterPipe],
  exports: [
    ...materialModules,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingModule,
    FilterPipe
  ]
})
export class SharedModule { }
