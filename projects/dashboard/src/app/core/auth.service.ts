import {Injectable} from '@angular/core';
import {ConnectorService} from './connector.service';
import {BrokerService} from './broker.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ActionTypes} from './action-types.enum';
import {GenericAuthService} from './app.guard';

@Injectable()
export class AuthService implements GenericAuthService {

  connectedUser: any;

  constructor(
    private broker: BrokerService,
    private connector: ConnectorService
  ) {
  }

  connect(credentials: any): Observable<any> {
    this.broker.pubsub.publish(ActionTypes.AUTH, credentials);
    return this.connector.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users: any[]) => users.filter(u => u.username === credentials.username)[0]),
        tap(res => {
          res
            ? this.broker.pubsub.publish(ActionTypes.AUTH_SUCCESS, credentials)
            : this.broker.pubsub.publish(ActionTypes.AUTH_FAIL, credentials);
          this.connectedUser = res;
        })
      );
  }


}
