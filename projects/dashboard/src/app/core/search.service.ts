import {Injectable} from '@angular/core';
import {BrokerService} from './broker.service';
import {ConnectorService} from './connector.service';

@Injectable()
export class SearchService {

  constructor(
    private broker: BrokerService,
    private connector: ConnectorService
  ) {
  }
}
