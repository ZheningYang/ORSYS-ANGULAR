import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lkb-ui-card',
  templateUrl: './lkb-ui-card.component.html',
  styleUrls: ['./lkb-ui-card.component.css']
})
export class LkbUiCardComponent {

  @Input() cardTitle = '';
  @Input() opened = false;

  @Output() open = new EventEmitter<boolean>();

  toggle() {
    this.opened = !this.opened;
    this.open.emit(this.opened);
  }
}
