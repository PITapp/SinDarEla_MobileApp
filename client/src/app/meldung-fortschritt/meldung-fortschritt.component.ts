import { Component, Injector } from '@angular/core';
import { MeldungFortschrittGenerated } from './meldung-fortschritt-generated.component';

@Component({
  selector: 'page-meldung-fortschritt',
  templateUrl: './meldung-fortschritt.component.html'
})
export class MeldungFortschrittComponent extends MeldungFortschrittGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
