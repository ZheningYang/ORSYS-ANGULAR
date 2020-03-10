import {Component} from '@angular/core';
import {BrokerService} from './core/broker.service';
import {ActionTypes} from './core/action-types.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  constructor(private broker: BrokerService) {
    console.log(broker);
    broker.pubsub.subscribe(ActionTypes.APPLICATION, (msg, data) => console.log(msg, data));
  }
}
