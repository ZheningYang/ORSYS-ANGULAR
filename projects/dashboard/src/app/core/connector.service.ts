import {Injectable} from '@angular/core';
import {BrokerService} from './broker.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ConnectorService {

  constructor(private broker: BrokerService, private http: HttpClient) {
  }

  get(url): Observable<any> {
    return this.http.get(url);
  }

}
