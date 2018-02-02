import { NgModule } from '@angular/core';
import { PeopleComponent } from './people/people.component';
import { peopleRouter } from './people.router';

@NgModule({
  imports: [peopleRouter],
  declarations: [PeopleComponent]
})
export class PeopleModule { }
