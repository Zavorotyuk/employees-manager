import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [EmployeeService]
})
export class CoreModule { }
