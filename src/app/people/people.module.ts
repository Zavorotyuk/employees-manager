import { NgModule } from '@angular/core';
import { PeopleComponent } from './people/people.component';
import { peopleRouter } from './people.router';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationComponent } from './modals/confirmation/confirmation.component';
import { UpdateEmployeeComponent } from './modals/update-employee/update-employee.component';


@NgModule({
  imports: [peopleRouter, SharedModule],
  declarations: [PeopleComponent, ConfirmationComponent, UpdateEmployeeComponent],
  entryComponents: [ConfirmationComponent, UpdateEmployeeComponent]
})
export class PeopleModule { }
