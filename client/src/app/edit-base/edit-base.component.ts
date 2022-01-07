import { Component, Injector } from '@angular/core';
import { EditBaseGenerated } from './edit-base-generated.component';

@Component({
  selector: 'page-edit-base',
  templateUrl: './edit-base.component.html'
})
export class EditBaseComponent extends EditBaseGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
