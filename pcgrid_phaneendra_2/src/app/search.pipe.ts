import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customerListFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.list_name.toLocaleLowerCase().includes(args)) || (val.count_entities.toLocaleLowerCase().includes(args)) || (val.date.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}