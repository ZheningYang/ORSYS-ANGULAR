import {Inject, NgModule, Optional} from '@angular/core';
import {AuthService} from './auth.service';
import {CommentsService} from './comments.service';
import {SearchService} from './search.service';
import {StoreService} from './store.service';
import {BASE_HREF} from './tokens';
import {BrokerService} from './broker.service';
import {ConnectorService} from './connector.service';


@NgModule({
  declarations: [],
  imports: [],
  providers: [
    BrokerService,
    AuthService,
    CommentsService,
    SearchService,
    StoreService,
    ConnectorService
  ]
})
export class CoreModule {

  constructor(@Optional() @Inject(BASE_HREF) baseHref) {
    console.log(this, baseHref);
  }
}
