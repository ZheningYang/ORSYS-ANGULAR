import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {HomeModule} from './features/home/home.module';
import {SearchModule} from './features/search/search.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    SearchModule,
    CommonModule
  ],
  providers: [
    {provide: APP_INITIALIZER, useValue: () => console.log('APP START'), multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log(this);
  }
}
