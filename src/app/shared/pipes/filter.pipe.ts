import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], term): any {
    return term
      ? items.filter(item => item.firstName.indexOf(term) !== -1 || item.lastName.indexOf(term) !== -1)
        : items;
  }
}
