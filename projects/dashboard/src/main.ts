import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {BASE_HREF} from './app/core/tokens';

if (environment.production) {
  enableProdMode();
}

const providers = [
  {provide: BASE_HREF, useValue: window.location.href}
];

platformBrowserDynamic(providers)
  .bootstrapModule(AppModule)
  .then(m => console.log(m))
  .catch(err => console.error(err));
