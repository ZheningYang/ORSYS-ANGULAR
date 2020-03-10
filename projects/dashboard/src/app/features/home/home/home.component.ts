import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from '../../../core/store.service';
import {ActionTypes} from '../../../core/action-types.enum';
import {Subject} from 'rxjs';
import {log} from 'util';
import {throttle} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  click$ = new Subject();
  connecting$ = new Subject();

  credentials = {username: '', password: ''};

  constructor(public store: StoreService) {
  }

  connect() {
    console.log(this.credentials);
    this.store.dispatcher({type: ActionTypes.AUTH, data: this.credentials});
  }

  ngOnInit(): void {
    this.click$
      .pipe(
        // throttleTime(2000),
        // tap(() => this.connect()),
        // debounceTime(2000)
        throttle(() => {
          this.connecting$.next(true);
          this.connect();
          return this.store.state$;
        })
      )
      .subscribe(data => {
        this.connecting$.next(true);
        log('hello' + data);
      });
  }

  ngOnDestroy(): void {
    this.click$.unsubscribe();
  }
}
