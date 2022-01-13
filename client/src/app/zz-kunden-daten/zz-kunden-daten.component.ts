import { Component, Injector } from '@angular/core';
import { ZzKundenDatenGenerated } from './zz-kunden-daten-generated.component';

@Component({
  selector: 'page-zz-kunden-daten',
  templateUrl: './zz-kunden-daten.component.html'
})
export class ZzKundenDatenComponent extends ZzKundenDatenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
