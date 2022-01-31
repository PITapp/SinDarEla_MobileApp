import { Component, Injector } from '@angular/core';
import { MeldungOkGenerated } from './meldung-ok-generated.component';

@Component({
  selector: 'page-meldung-ok',
  templateUrl: './meldung-ok.component.html'
})
export class MeldungOkComponent extends MeldungOkGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
