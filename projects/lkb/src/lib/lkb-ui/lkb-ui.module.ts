import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LkbUiButtonComponent} from './lkb-ui-button/lkb-ui-button.component';
import {LkbUiHeaderComponent} from './lkb-ui-header/lkb-ui-header.component';
import {LkbUiLayoutComponent} from './lkb-ui-layout/lkb-ui-layout.component';
import {LkbUiCardComponent} from './lkb-ui-card/lkb-ui-card.component';
import {LkbUiFormatDirective} from './lkb-ui-format.directive';
import {LkbUiFilterPipe} from './lkb-ui-filter.pipe';
import {LkbUiEffectDirective} from './lkb-ui-effect.directive';
import {FormsModule} from '@angular/forms';
import { LkbUiContextComponent } from './lkb-ui-context/lkb-ui-context.component';


@NgModule({
  declarations: [
    LkbUiButtonComponent,
    LkbUiHeaderComponent,
    LkbUiLayoutComponent,
    LkbUiCardComponent,
    LkbUiFormatDirective,
    LkbUiFilterPipe,
    LkbUiEffectDirective,
    LkbUiContextComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LkbUiButtonComponent,
    LkbUiHeaderComponent,
    LkbUiLayoutComponent,
    LkbUiCardComponent,
    LkbUiFormatDirective,
    LkbUiFilterPipe,
    LkbUiEffectDirective,
    LkbUiContextComponent
  ]
})
export class LkbUiModule {
}
