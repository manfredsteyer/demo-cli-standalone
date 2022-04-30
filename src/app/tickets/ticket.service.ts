import { Injectable } from '@angular/core';

@Injectable()
export class TicketService {
    constructor() { 
        console.debug('creating ticket service');
    }
    
    private ticketCount = 10;

    getTicketCount(): number {
        return ++this.ticketCount;
    }
}
