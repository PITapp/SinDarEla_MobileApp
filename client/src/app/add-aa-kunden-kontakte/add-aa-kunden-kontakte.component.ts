import { Component, Injector } from '@angular/core';
import { AddAaKundenKontakteGenerated } from './add-aa-kunden-kontakte-generated.component';

@Component({
  selector: 'page-add-aa-kunden-kontakte',
  templateUrl: './add-aa-kunden-kontakte.component.html'
})
export class AddAaKundenKontakteComponent extends AddAaKundenKontakteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
