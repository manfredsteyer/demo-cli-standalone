import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

// Options for importing esm modules
import { TicketsModule } from './tickets/tickets.module';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs';
import { Component, Inject } from '@angular/core';

import { NavbarComponent, SidebarComponent } from './shell';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { TicketService } from './tickets/ticket.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterModule,
    CommonModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    NavbarComponent,
    SidebarComponent,

    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    ticketService: TicketService,
    @Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver) {
  
      const r = ticketService.getTicketCount();
      console.log('ticketCount', r);
  }

}
