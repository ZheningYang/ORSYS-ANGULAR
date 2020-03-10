import {Injectable} from '@angular/core';
import {ActionTypes} from './action-types.enum';
import {BehaviorSubject} from 'rxjs';

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

  constructor() {
    window['getHistory'] = () => {
      console.groupCollapsed('Application Actions History');
      console.table(this.history);
      console.groupEnd();
    };
  }

  dispatcher(action: Action): BehaviorSubject<any> {
    this.history.push({time: Date.now(), ...action});

    const delay = 5000 * Math.random();
    setTimeout(() => {
      console.log('done');
      this.state$.next({currentUser: action.data});
    }, delay);

    return this.state$;
  }
}
