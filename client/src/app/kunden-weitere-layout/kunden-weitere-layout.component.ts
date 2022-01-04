import { Component, Injector } from '@angular/core';
import { KundenWeitereLayoutGenerated } from './kunden-weitere-layout-generated.component';

@Component({
  selector: 'page-kunden-weitere-layout',
  templateUrl: './kunden-weitere-layout.component.html'
})
export class KundenWeitereLayoutComponent extends KundenWeitereLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
