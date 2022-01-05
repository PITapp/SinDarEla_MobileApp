import { Component, Injector } from '@angular/core';
import { KundenDatenLayoutGenerated } from './kunden-daten-layout-generated.component';

@Component({
  selector: 'page-kunden-daten-layout',
  templateUrl: './kunden-daten-layout.component.html'
})
export class KundenDatenLayoutComponent extends KundenDatenLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
