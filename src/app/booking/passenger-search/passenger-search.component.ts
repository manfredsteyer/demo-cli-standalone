import { Component } from "@angular/core";
import { TicketsModule } from "src/app/tickets/tickets.module";
import { TicketService } from "../../tickets/ticket.service";

@Component({
  standalone: true,
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  imports: [
    TicketsModule
  ]
})
export class PassengerSearchComponent {
}
