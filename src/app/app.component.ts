import {Component} from '@angular/core';
import {LkbUiButtonLevels} from '../../projects/lkb/src/lib/lkb-ui/lkb-ui-button/lkb-ui-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  levels = LkbUiButtonLevels;

  log(event) {
    console.time('Click');
    console.groupCollapsed('Log Method');
    console.warn(event);
    console.table(this.levels);
    console.groupEnd();
    console.timeEnd('Click');
  }
}
