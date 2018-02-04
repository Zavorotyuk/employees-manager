import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent {

  updateEmployeeForm: FormGroup;
  skills: object[] = [
    {viewValue: 'JavaScript'},
    {viewValue: 'TypeScript'},
    {viewValue: 'HTML'},
    {viewValue: 'CSS'}
  ]


  constructor(public dialogRef: MatDialogRef<UpdateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
      this.updateEmployeeForm = fb.group({
        'firstName': [data.firstName, Validators.required],
        'lastName' : [data.lastName, Validators.required],
        'age' : [data.age, Validators.compose([Validators.required, Validators.min(5), Validators.max(90)])],
        'level': [data.level, Validators.compose([Validators.required, Validators.min(1), Validators.max(3)])],
        'skill': [data.skill, Validators.required]
      })
     }

  ngOnInit() {}

  updateEmployee(updatedValue) {
    this.dialogRef.close(updatedValue);
  }

}
