import { Component, Injector } from '@angular/core';
import { AddAaKundenGenerated } from './add-aa-kunden-generated.component';

@Component({
  selector: 'page-add-aa-kunden',
  templateUrl: './add-aa-kunden.component.html'
})
export class AddAaKundenComponent extends AddAaKundenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
