import { NgModule } from '@angular/core';
import { PeopleComponent } from './people/people.component';
import { peopleRouter } from './people.router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [peopleRouter, SharedModule],
  declarations: [PeopleComponent]
})
export class PeopleModule { }
