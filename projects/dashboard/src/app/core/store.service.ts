import {Injectable} from '@angular/core';
import {ActionTypes} from './action-types.enum';
import {BehaviorSubject} from 'rxjs';
import {BrokerService} from './broker.service';

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

  constructor(private broker: BrokerService) {
    window['getHistory'] = () => {
      console.groupCollapsed('Application Actions History');
      console.table(this.history);
      console.groupEnd();
    };
  }

  dispatcher(action: Action): BehaviorSubject<any> {
    this.history.push({time: Date.now(), ...action});

    this.broker.pubsub.publish(action.type, action.data);

    const delay = 5000 * Math.random();
    setTimeout(() => {
      console.log('done');
      this.state$.next({currentUser: action.data});
    }, delay);

    return this.state$;
  }
}
