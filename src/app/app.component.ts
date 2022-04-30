import { HomeComponent } from './home/home.component';

// Options for importing esm modules
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs';
import { Component, Inject } from '@angular/core';

import { NavbarComponent, SidebarComponent } from './shell';
import material from './material';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterModule,
    CommonModule,

    ...material,
    
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
    @Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver) {
  }

}
