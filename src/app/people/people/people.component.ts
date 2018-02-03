import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { EmployeeService } from '../../core/employee.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  employeesList: object[];
  addEmployeeForm: FormGroup;
  loading: boolean = true;

  skills: object[] = [
    {viewValue: 'JavaScript'},
    {viewValue: 'TypeScript'},
    {viewValue: 'HTML'},
    {viewValue: 'CSS'}
  ]


  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
  ) {
      this.addEmployeeForm = fb.group({
        'firstName': [null, Validators.required],
        'lastName' : [null, Validators.required],
        'age' : [null, Validators.compose([Validators.required, Validators.min(5), Validators.max(90)])],
        'level': [null, Validators.compose([Validators.required, Validators.min(1), Validators.max(3)])],
        'skill': [null, Validators.required]
      })
    }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      data => {
        this.employeesList = data;
        this.loading = false;
      }
    )
  }

  addEmployee(formValue) {
    this.employeeService.addEmployee(formValue);
    this.addEmployeeForm.reset();
  }

  deleteEmployee(key) {
    this.employeeService.deleteEmployee(key);
  }


}
