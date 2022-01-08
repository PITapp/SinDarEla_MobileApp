import { Component, Injector } from '@angular/core';
import { EditAaKundenGenerated } from './edit-aa-kunden-generated.component';

@Component({
  selector: 'page-edit-aa-kunden',
  templateUrl: './edit-aa-kunden.component.html'
})
export class EditAaKundenComponent extends EditAaKundenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
