import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {StoreService} from '../../../core/store.service';
import {ActionTypes} from '../../../core/action-types.enum';
import {combineLatest, Subject} from 'rxjs';
import {switchMap, throttle} from 'rxjs/operators';
import {SubSink} from 'subsink';
import {PubSub} from '../../../core/pubsub.decorator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  click$ = new Subject();
  connecting$ = new Subject();
  merged$ = combineLatest(this.store.state$, this.connecting$);


  @ViewChild('card', {static: true}) card;
  @ViewChild('code', {static: true}) code;

  credentials = {username: '', password: ''};
  private subs = new SubSink();

  constructor(public store: StoreService) {
  }

  @PubSub(ActionTypes.AUTH)
  connect() {
    this.store.dispatch({type: ActionTypes.AUTH, data: this.credentials});
  }


  ngAfterViewInit() {
    console.log(this.card, this.code);
  }

  ngOnInit(): void {
    this.subs.sink = this.connecting$.subscribe(console.log);

    this.subs.sink = this.click$
      .pipe(
        // debounceTime(300),

        throttle(() => {
          this.connecting$.next(true);
          this.connect();
          return this.store.state$;
        }),
        switchMap(() => this.store.state$),
      )
      .subscribe(data => {
        this.connecting$.next(false);
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
