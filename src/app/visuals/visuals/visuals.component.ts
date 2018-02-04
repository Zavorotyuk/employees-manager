import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../core/employee.service';


@Component({
  selector: 'app-visuals',
  templateUrl: './visuals.component.html',
  styleUrls: ['./visuals.component.scss']
})
export class VisualsComponent implements OnInit {

  employeesList: object[];
  loading: boolean = true;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      data => {
        this.employeesList = data;
        this.loading = false;
      }
    )
  }

}
