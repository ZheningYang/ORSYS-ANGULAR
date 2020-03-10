import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lkbUiFilter'
})
export class LkbUiFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
