import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'


@Injectable()
export class EmployeeService {

   employeeList: AngularFireList<any>;

   constructor(private db :AngularFireDatabase ) { }

   getEmployees(){
     this.employeeList = this.db.list('employees');
     return this.employeeList.snapshotChanges().map(changes => {
       return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
     });
   }

   addEmployee(employee)
   {
     this.employeeList.push({
       firstName: employee.firstName,
       lastName: employee.lastName,
       age: employee.age,
       skill: employee.skill,
       level: employee.level
     });
   }

   updateEmployee(employee){
     this.employeeList.update(employee.$key,
       {
         firstName: employee.firstName,
         lastName: employee.lastName,
         age: employee.age,
         skill: employee.skill,
         level: employee.level
       });
   }

   deleteEmployee(key : string){
     this.employeeList.remove(key);
   }

}
