import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule } from '@angular/material';


const materialModules = [
  MatToolbarModule,
  MatButtonModule
];

@NgModule({
  imports: [...materialModules],
  declarations: [],
  exports: [
    ...materialModules,
    CommonModule
  ]
})
export class SharedModule { }
