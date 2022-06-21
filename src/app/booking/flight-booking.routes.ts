import { importProvidersFrom, inject, PLATFORM_INITIALIZER } from "@angular/core";
import { Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { FlightService } from "../data/flight.service";
import { InitService } from "../init.service";
import { BookingEffects } from "./+state/effects";
import { bookingFeature } from "./+state/reducers";
import { FlightBookingComponent } from "./flight-booking.component";
import { FlightEditComponent } from "./flight-edit/flight-edit.component";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { PassengerSearchComponent } from "./passenger-search/passenger-search.component";

export const FLIGHT_BOOKING_ROUTES: Routes = [{
    path: '',
    component: FlightBookingComponent,
    providers: [
        // FlightService
        importProvidersFrom(StoreModule.forFeature(bookingFeature)),
        importProvidersFrom(EffectsModule.forFeature([BookingEffects])),
        {
            provide: PLATFORM_INITIALIZER,
            multi: true,
            useValue: () => inject(InitService).init()
        }
    ],
    children: [
        {
            path: 'flight-search',
            component: FlightSearchComponent
        },
        {
            path: 'passenger-search',
            component: PassengerSearchComponent
        },
        {
            path: 'flight-edit/:id',
            component: FlightEditComponent
        }
    ]
}];

