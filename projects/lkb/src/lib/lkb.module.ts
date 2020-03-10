import {NgModule} from '@angular/core';
import {LkbComponent} from './lkb.component';
import {LkbUiModule} from './lkb-ui/lkb-ui.module';
import {LkbViewsModule} from './lkb-views/lkb-views.module';


@NgModule({
  declarations: [LkbComponent],
  imports: [
    LkbUiModule,
    LkbViewsModule
  ],
  exports: [
    LkbComponent,
    LkbUiModule,
    LkbViewsModule
  ]
})
export class LkbModule {
}
