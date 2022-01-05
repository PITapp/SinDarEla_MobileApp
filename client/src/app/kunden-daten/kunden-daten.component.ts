import { Component, Injector } from '@angular/core';
import { KundenDatenGenerated } from './kunden-daten-generated.component';

@Component({
  selector: 'page-kunden-daten',
  templateUrl: './kunden-daten.component.html'
})
export class KundenDatenComponent extends KundenDatenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
