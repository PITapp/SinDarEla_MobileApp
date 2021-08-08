import { Component, Injector } from '@angular/core';
import { VersionenGenerated } from './versionen-generated.component';

@Component({
  selector: 'page-versionen',
  templateUrl: './versionen.component.html'
})
export class VersionenComponent extends VersionenGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
