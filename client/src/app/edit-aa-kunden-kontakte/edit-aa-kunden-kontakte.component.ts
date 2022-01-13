import { Component, Injector } from '@angular/core';
import { EditAaKundenKontakteGenerated } from './edit-aa-kunden-kontakte-generated.component';

@Component({
  selector: 'page-edit-aa-kunden-kontakte',
  templateUrl: './edit-aa-kunden-kontakte.component.html'
})
export class EditAaKundenKontakteComponent extends EditAaKundenKontakteGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
