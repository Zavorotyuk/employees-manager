import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { EmployeeService } from '../../core/employee.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { ConfirmationComponent } from '../modals/confirmation/confirmation.component';
import { UpdateEmployeeComponent } from '../modals/update-employee/update-employee.component';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  employeesList: MatTableDataSource<any>;
  addEmployeeForm: FormGroup;
  loading: boolean = true;
  displayedColumns = ['Name', 'Age', 'Skill', 'Level', 'Actions'];

  skills: object[] = [
    {viewValue: 'JavaScript'},
    {viewValue: 'TypeScript'},
    {viewValue: 'HTML'},
    {viewValue: 'CSS'}
  ]



  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private dialog: MatDialog
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
        this.employeesList = new MatTableDataSource(data);
        this.loading = false;
      }
    )
  }

  addEmployee(formValue) {
    this.employeeService.addEmployee(formValue);
    this.resetForm();
  }

  deleteEmployee(key) {
    let dialogRef = this.dialog.open(ConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.employeeService.deleteEmployee(key);
    });
  }

  updateEmployee(employee) {
    let dialogRef = this.dialog.open(
      UpdateEmployeeComponent, {data: employee, width: '400px'});

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.employeeService.updateEmployee(employee.key, result);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.employeesList.filter = filterValue;
 }

 resetForm() {
   this.addEmployeeForm.reset();
   this.addEmployeeForm.markAsTouched();
   Object.keys(this.addEmployeeForm.controls).forEach((name) => {
     let control = this.addEmployeeForm.controls[name];
     control.setErrors(null);
   });
 }


}
