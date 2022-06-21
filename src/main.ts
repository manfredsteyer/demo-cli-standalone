import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { TicketsModule } from './app/tickets/tickets.module';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(APP_ROUTES)),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(TicketsModule),
  ]
});






// bootstrapApplication(AppComponent, {
//   providers: [
//     ...importProvidersFrom(RouterModule.forRoot(APP_ROUTES)),
//     ...importProvidersFrom(HttpClientModule),
//     ...importProvidersFrom(TicketsModule),
//     {
//       provide: INJECTOR_INITIALIZER,
//       multi: true,
//       useValue: () => inject(InitService).init()
//     }
//   ]
// });