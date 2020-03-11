import {Inject, Injectable} from '@angular/core';
import {ActionTypes} from './action-types.enum';
import {BehaviorSubject} from 'rxjs';
import {BrokerService} from './broker.service';
import {AuthService} from './auth.service';
import {AUTH_SERVICE_TOKEN} from './app.guard';

// Les interfaces se disparaissent au moment de compilation Javascript
export interface Action {
  type: ActionTypes;
  data?: any;
}

@Injectable()
// Facade of services
export class StoreService {

  state$ = new BehaviorSubject({});
  // Subject : next emit
  // ReplaySubject : all emits since beginning
  // BehaviorSubject: last emit


  history = [];

  constructor(private broker: BrokerService,
              @Inject(AUTH_SERVICE_TOKEN) private auth: AuthService) {

    window['getHistory'] = () => {
      console.groupCollapsed('Application Actions History');
      console.table(this.history);
      console.groupEnd();
    };
  }

  dispatch(action: Action): BehaviorSubject<any> {
    this.history.push({time: Date.now(), ...action});
    // this.broker.pubsub.publish(action.type, action.data);

    switch (action.type) {
      case ActionTypes.AUTH:
        this.auth.connect(action.data).subscribe(res => this.state$.next({currentUser: res}));
        break;
      case ActionTypes.COMMENTS:
        break;
      default:
        break;
    }

    return this.state$;
  }
}
