import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export default [
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
];

// Wish List: Allow just exporting building blocks w/o additional array

// export { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// export { LayoutModule } from '@angular/cdk/layout';
// export { MatToolbarModule } from '@angular/material/toolbar';
// export { MatButtonModule } from '@angular/material/button';
// export { MatSidenavModule } from '@angular/material/sidenav';
// export { MatIconModule } from '@angular/material/icon';
// export { MatListModule } from '@angular/material/list';