import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lkb-ui-context',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./lkb-ui-context.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LkbUiContextComponent {

}
