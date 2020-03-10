import {Injectable} from '@angular/core';
import PubSub from 'pubsub-js';

@Injectable()
export class BrokerService {
  pubsub = PubSub;
}
