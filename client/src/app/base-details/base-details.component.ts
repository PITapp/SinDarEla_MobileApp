import { Component, Injector } from '@angular/core';
import { BaseDetailsGenerated } from './base-details-generated.component';

@Component({
  selector: 'page-base-details',
  templateUrl: './base-details.component.html'
})
export class BaseDetailsComponent extends BaseDetailsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
