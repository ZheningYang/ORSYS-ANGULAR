import {Inject, NgModule, Optional} from '@angular/core';
import {AuthService} from './auth.service';
import {CommentsService} from './comments.service';
import {SearchService} from './search.service';
import {StoreService} from './store.service';
import {BASE_HREF} from './tokens';


@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AuthService,
    CommentsService,
    SearchService,
    StoreService
  ]
})
export class CoreModule {

  constructor(@Optional() @Inject(BASE_HREF) baseHref) {
    console.log(this, baseHref);
  }
}
