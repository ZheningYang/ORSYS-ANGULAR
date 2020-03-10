import {Component, Input} from '@angular/core';

@Component({
  selector: 'lkb-ui-layout',
  templateUrl: './lkb-ui-layout.component.html',
  styleUrls: ['./lkb-ui-layout.component.css']
})
export class LkbUiLayoutComponent {

  @Input() layout = 'row'; // row, column, wrap

  get styles() {
    return {
      display: 'flex',
      'flex-direction': `${this.layout}`,
      'flex-wrap': this.layout === 'wrap' ? 'wrap' : 'nowrap'
    };
  }

}
