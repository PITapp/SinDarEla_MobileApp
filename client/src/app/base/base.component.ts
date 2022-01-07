import { Component, Injector } from '@angular/core';
import { BaseGenerated } from './base-generated.component';

@Component({
  selector: 'page-base',
  templateUrl: './base.component.html'
})
export class BaseComponent extends BaseGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
