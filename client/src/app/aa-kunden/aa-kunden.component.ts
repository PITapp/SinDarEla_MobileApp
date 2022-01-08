import { Component, Injector } from '@angular/core';
import { AaKundenGenerated } from './aa-kunden-generated.component';

@Component({
  selector: 'page-aa-kunden',
  templateUrl: './aa-kunden.component.html'
})
export class AaKundenComponent extends AaKundenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
