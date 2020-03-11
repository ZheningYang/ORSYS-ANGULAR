import { Injectable } from '@angular/core';
import {BrokerService} from './broker.service';
import {ConnectorService} from './connector.service';

@Injectable()
export class CommentsService {

  constructor(
    private broker: BrokerService,
    private connector: ConnectorService
  ) {
  }
}
