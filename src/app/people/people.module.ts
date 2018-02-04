import { NgModule } from '@angular/core';
import { PeopleComponent } from './people/people.component';
import { peopleRouter } from './people.router';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationComponent } from './modals/confirmation/confirmation.component';


@NgModule({
  imports: [peopleRouter, SharedModule],
  declarations: [PeopleComponent, ConfirmationComponent],
  entryComponents: [ConfirmationComponent]
})
export class PeopleModule { }
