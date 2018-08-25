import { FlightCardComponent } from './flight-card/flight-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { ExternalDashboardTileComponent } from './external-dashboard-tile/external-dashboard-tile.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
   imports: [
      BrowserModule
   ],
   declarations: [
    ExternalDashboardTileComponent,
    FlightCardComponent
   ],
   bootstrap: [],
   entryComponents: [
    ExternalDashboardTileComponent,
    FlightCardComponent
   ]
})
export class AppModule { 

    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const externalTileCE = createCustomElement(ExternalDashboardTileComponent, { injector: this.injector });
        customElements.define('external-dashboard-tile', externalTileCE);

        const flightCardCE = createCustomElement(FlightCardComponent, { injector: this.injector });
        customElements.define('flight-card', flightCardCE);
    }

}
