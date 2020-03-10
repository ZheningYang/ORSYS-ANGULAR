import {Component, OnDestroy, OnInit} from '@angular/core';
import {LkbUiButtonLevels} from '../../projects/lkb/src/lib/lkb-ui/lkb-ui-button/lkb-ui-button.component';
import {from, fromEvent, of, Subscription} from 'rxjs';
import {fromArray} from 'rxjs/internal/observable/fromArray';
import {switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  levels = LkbUiButtonLevels;
  source$ = of(true);
  data$ = from(fetch('https://www.reddit.com/r/angular/.json').then(res => res.json()));
  sourceArray$ = fromArray([1, 2, 3]);
  sourceEvent$ = fromEvent(window, 'click')
    .pipe(
      tap(console.log),
      switchMap(() => this.data$)
    );

  val1: any;
  val2: any;
  sub1$: Subscription;
  sub2$: Subscription;

  constructor() {
    this.sub1$ = this.source$.subscribe(data => this.val1 = data);
  }

  log(event) {
    console.time('Click');
    console.groupCollapsed('Log Method');
    console.warn(event);
    console.table(this.levels);
    console.groupEnd();
    console.timeEnd('Click');
  }

  ngOnInit(): void {
    this.sub2$ = this.sourceEvent$.subscribe(data => this.val2 = data);
  }

  ngOnDestroy(): void {
    this.sub1$.unsubscribe();
    this.sub2$.unsubscribe();
  }
}
