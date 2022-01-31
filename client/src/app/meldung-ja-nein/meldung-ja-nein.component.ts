import { Component, Injector } from '@angular/core';
import { MeldungJaNeinGenerated } from './meldung-ja-nein-generated.component';

@Component({
  selector: 'page-meldung-ja-nein',
  templateUrl: './meldung-ja-nein.component.html'
})
export class MeldungJaNeinComponent extends MeldungJaNeinGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
