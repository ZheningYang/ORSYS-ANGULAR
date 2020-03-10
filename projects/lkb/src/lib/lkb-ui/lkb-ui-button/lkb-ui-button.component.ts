import {Component, DoCheck, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'lkb-ui-button',
  templateUrl: './lkb-ui-button.component.html',
  styleUrls: ['./lkb-ui-button.component.css']
})
export class LkbUiButtonComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() level: LkbUiButtonLevels = LkbUiButtonLevels.PRIMARY;

  constructor() {
    console.log('constructor', 'LkbUiButtonComponent');
  }

  @HostListener('window:keydown.SPACE', ['$event']) // host
  globalListener(event) {
    console.log('globalListener', event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', 'LkbUiButtonComponent');
  }

  ngOnInit() {
    console.log('ngOnInit', 'LkbUiButtonComponent');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck', 'LkbUiButtonComponent');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy', 'LkbUiButtonComponent');
  }

}

export enum LkbUiButtonLevels {
  PRIMARY = 'PRIMARY',
  OPTIONAL = 'OPTIONAL',
  CRITICAL = 'CRITICAL',
}
