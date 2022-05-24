// In a perfect world, we only needed this:
export { NavbarComponent } from './navbar/navbar.component';
export { SidebarComponent } from './sidebar/sidebar.component';

// // Workaround for *this* world: Needed for the time beeing
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export default [
    NavbarComponent,
    SidebarComponent   
];



