import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // defalt:
  /*
  transform(value: any, ...args: any[]): any {
    return null;
  }
  */
  // #22 Creating a FIlter Piper
  transform(fruits: any[], term: any): any {
    // check if search term is undefined
    if (term === undefined) return fruits;
    // return updated fruits array
    return fruits.filter(function(fruit){
        return fruit.name.toLowerCase().includes(term.toLowerCase());
    });
  }
}
