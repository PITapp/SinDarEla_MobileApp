import { Component, Injector } from '@angular/core';
import { AaKundenKontakteGenerated } from './aa-kunden-kontakte-generated.component';

@Component({
  selector: 'page-aa-kunden-kontakte',
  templateUrl: './aa-kunden-kontakte.component.html'
})
export class AaKundenKontakteComponent extends AaKundenKontakteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
