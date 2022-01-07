import { Component, Injector } from '@angular/core';
import { AddBaseGenerated } from './add-base-generated.component';

@Component({
  selector: 'page-add-base',
  templateUrl: './add-base.component.html'
})
export class AddBaseComponent extends AddBaseGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
