import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[lkbUiEffect]'
})
export class LkbUiEffectDirective {

  @Input() lkbUiEffect = 1;

  @HostBinding('style.transition') transition = 'transform .3 ease';
  @HostBinding('style.transform') transform = 'scale(1)';


  constructor() {
  }

  @HostListener('mouseenter')
  zoomIn() {
    this.transform = 'scale(' + this.lkbUiEffect + ')';
  }

  @HostListener('mouseleave')
  zoomOut() {
    this.transform = 'scale(1)';
  }

}
