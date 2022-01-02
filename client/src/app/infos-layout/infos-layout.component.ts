import { Component, Injector } from '@angular/core';
import { InfosLayoutGenerated } from './infos-layout-generated.component';

@Component({
  selector: 'page-infos-layout',
  templateUrl: './infos-layout.component.html'
})
export class InfosLayoutComponent extends InfosLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
