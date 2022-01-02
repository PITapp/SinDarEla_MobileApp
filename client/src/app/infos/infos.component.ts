import { Component, Injector } from '@angular/core';
import { InfosGenerated } from './infos-generated.component';

@Component({
  selector: 'page-infos',
  templateUrl: './infos.component.html'
})
export class InfosComponent extends InfosGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
