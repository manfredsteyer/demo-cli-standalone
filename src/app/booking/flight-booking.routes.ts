import { ENVIRONMENT_INITIALIZER, importProvidersFrom, inject } from "@angular/core";
import { Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
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
        // provideFeature('flightBooking', reducer)
        importProvidersFrom(EffectsModule.forFeature([BookingEffects])),
        {
            provide: ENVIRONMENT_INITIALIZER,
            multi: true,
            useValue: () => inject(InitService).init()
        }
    ],
    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'flight-search'
        },
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







