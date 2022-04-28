import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, provideRoutes } from '@angular/router';
import { AppComponent } from './app/app.component';


import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideRoutes([

    ]),

  ]
})

if (environment.production) {
  enableProdMode();
}

