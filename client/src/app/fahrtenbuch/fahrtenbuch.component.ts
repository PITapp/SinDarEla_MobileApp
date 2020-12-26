import { Component, Injector } from '@angular/core';
import { FahrtenbuchGenerated } from './fahrtenbuch-generated.component';

@Component({
  selector: 'page-fahrtenbuch',
  templateUrl: './fahrtenbuch.component.html'
})
export class FahrtenbuchComponent extends FahrtenbuchGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
