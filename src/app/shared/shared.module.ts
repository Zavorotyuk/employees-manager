import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { StarRatingModule } from 'angular-star-rating';

import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatDialogModule,
  MatTableModule,
  MatIconModule } from '@angular/material';


const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatTableModule
];

@NgModule({
  imports: [
    ...materialModules,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StarRatingModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rectangleBounce,
      fullScreenBackdrop: true,
      backdropBackgroundColour: '#ff000000',
      backdropBorderRadius: '10px',
      primaryColour: '#000000c7'

    })
  ],
  declarations: [],
  exports: [
    ...materialModules,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingModule,
    StarRatingModule
  ]
})
export class SharedModule { }
