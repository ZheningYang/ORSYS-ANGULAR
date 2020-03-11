import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {HomeModule} from './features/home/home.module';
import {CommonModule} from '@angular/common';
import {CommentsModule} from './features/comments/comments.module';
import {AUTH_SERVICE_TOKEN} from './core/app.guard';
import {environment} from '../environments/environment';
import {APPLICATION_ID} from './core/tokens';
import {AuthService} from './core/auth.service';
import {ConnectorService} from './core/connector.service';
import {BrokerService} from './core/broker.service';

const AuthServiceFactory = (broker: BrokerService, connector: ConnectorService) => {
  return new AuthService(broker, connector);
}; // à déplacer dans une classe à part

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    CommentsModule,
    CommonModule
  ],
  providers: [
    {provide: APPLICATION_ID, useValue: environment.applicationId},
    {provide: AUTH_SERVICE_TOKEN, useFactory: AuthServiceFactory, deps: [BrokerService, ConnectorService]},
    // {provide: AUTH_SERVICE_TOKEN, useClass: AuthService},
    {provide: APP_INITIALIZER, useValue: () => console.log('APP START'), multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // console.log(this);
  }
}
