import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform(source$: Observable<any>, selector: string): any {
    return source$.pipe(map(data => data[selector]));
  }

}
