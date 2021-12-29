import { Component, Injector } from '@angular/core';
import { KundenLayoutGenerated } from './kunden-layout-generated.component';

@Component({
  selector: 'page-kunden-layout',
  templateUrl: './kunden-layout.component.html'
})
export class KundenLayoutComponent extends KundenLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
