import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LkbModule} from '../../../../lkb/src/lib/lkb.module';
import { SelectPipe } from './select.pipe';



@NgModule({
  exports: [
    CommonModule,
    LkbModule,
    FormsModule,
    HttpClientModule,
    SelectPipe,
  ],
  declarations: [SelectPipe]
})
/**
 * Share module do only export, no need import/declarations
 */
export class SharedModule {

  constructor() {
    console.log(this);

  }
}
