import { Component, Injector } from '@angular/core';
import { MeldungLoeschenGenerated } from './meldung-loeschen-generated.component';

@Component({
  selector: 'page-meldung-loeschen',
  templateUrl: './meldung-loeschen.component.html'
})
export class MeldungLoeschenComponent extends MeldungLoeschenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
