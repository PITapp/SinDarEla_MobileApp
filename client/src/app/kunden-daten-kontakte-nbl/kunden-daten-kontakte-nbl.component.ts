import { Component, Injector } from '@angular/core';
import { KundenDatenKontakteNblGenerated } from './kunden-daten-kontakte-nbl-generated.component';

@Component({
  selector: 'page-kunden-daten-kontakte-nbl',
  templateUrl: './kunden-daten-kontakte-nbl.component.html'
})
export class KundenDatenKontakteNblComponent extends KundenDatenKontakteNblGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
