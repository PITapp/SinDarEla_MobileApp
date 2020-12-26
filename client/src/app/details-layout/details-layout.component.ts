import { Component, Injector } from '@angular/core';
import { DetailsLayoutGenerated } from './details-layout-generated.component';

@Component({
  selector: 'page-details-layout',
  templateUrl: './details-layout.component.html'
})
export class DetailsLayoutComponent extends DetailsLayoutGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
