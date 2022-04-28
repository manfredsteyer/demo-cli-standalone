import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

// Options for importing esm modules
import { TicketsModule } from './tickets/tickets.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs';
import { Component, Inject } from '@angular/core';

import shell from '@demo/shell';
import material from './material';
import { RouterModule } from '@angular/router';
import { FlightSearchComponent } from './booking/flight-search/flight-search.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    ...shell,
    ...material,
    TicketsModule,
    HomeComponent,
    HttpClientModule,
    RouterModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(@Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver) {
  }

}
