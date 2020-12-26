import { Component, Injector } from '@angular/core';
import { AbmeldenGenerated } from './abmelden-generated.component';

@Component({
  selector: 'page-abmelden',
  templateUrl: './abmelden.component.html'
})
export class AbmeldenComponent extends AbmeldenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
