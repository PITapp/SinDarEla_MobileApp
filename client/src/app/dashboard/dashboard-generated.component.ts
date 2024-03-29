/*
  This file is automatically generated. Any changes will be overwritten.
  Modify dashboard.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { LabelComponent } from '@radzen/angular/dist/label';
import { IconComponent } from '@radzen/angular/dist/icon';
import { HeadingComponent } from '@radzen/angular/dist/heading';

import { ConfigService } from '../config.service';

import { SecurityService } from '../security.service';

export class DashboardGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('label27') label27: LabelComponent;
  @ViewChild('label28') label28: LabelComponent;
  @ViewChild('label29') label29: LabelComponent;
  @ViewChild('label3') label3: LabelComponent;
  @ViewChild('label2') label2: LabelComponent;
  @ViewChild('label6') label6: LabelComponent;
  @ViewChild('label0') label0: LabelComponent;
  @ViewChild('label1') label1: LabelComponent;
  @ViewChild('label42') label42: LabelComponent;
  @ViewChild('label43') label43: LabelComponent;
  @ViewChild('icon28') icon28: IconComponent;
  @ViewChild('icon29') icon29: IconComponent;
  @ViewChild('label7') label7: LabelComponent;
  @ViewChild('label8') label8: LabelComponent;
  @ViewChild('icon8') icon8: IconComponent;
  @ViewChild('icon9') icon9: IconComponent;
  @ViewChild('label4') label4: LabelComponent;
  @ViewChild('label5') label5: LabelComponent;
  @ViewChild('icon20') icon20: IconComponent;
  @ViewChild('icon21') icon21: IconComponent;
  @ViewChild('label19') label19: LabelComponent;
  @ViewChild('label20') label20: LabelComponent;
  @ViewChild('icon1') icon1: IconComponent;
  @ViewChild('icon4') icon4: IconComponent;
  @ViewChild('label21') label21: LabelComponent;
  @ViewChild('label22') label22: LabelComponent;
  @ViewChild('icon18') icon18: IconComponent;
  @ViewChild('icon19') icon19: IconComponent;
  @ViewChild('label25') label25: LabelComponent;
  @ViewChild('label26') label26: LabelComponent;
  @ViewChild('icon24') icon24: IconComponent;
  @ViewChild('icon25') icon25: IconComponent;
  @ViewChild('label17') label17: LabelComponent;
  @ViewChild('label18') label18: LabelComponent;
  @ViewChild('icon16') icon16: IconComponent;
  @ViewChild('icon17') icon17: IconComponent;
  @ViewChild('label15') label15: LabelComponent;
  @ViewChild('label16') label16: LabelComponent;
  @ViewChild('icon14') icon14: IconComponent;
  @ViewChild('icon15') icon15: IconComponent;
  @ViewChild('label13') label13: LabelComponent;
  @ViewChild('label14') label14: LabelComponent;
  @ViewChild('icon12') icon12: IconComponent;
  @ViewChild('icon13') icon13: IconComponent;
  @ViewChild('label23') label23: LabelComponent;
  @ViewChild('label24') label24: LabelComponent;
  @ViewChild('icon22') icon22: IconComponent;
  @ViewChild('icon23') icon23: IconComponent;
  @ViewChild('label11') label11: LabelComponent;
  @ViewChild('label12') label12: LabelComponent;
  @ViewChild('icon10') icon10: IconComponent;
  @ViewChild('icon11') icon11: IconComponent;
  @ViewChild('label9') label9: LabelComponent;
  @ViewChild('label10') label10: LabelComponent;
  @ViewChild('icon0') icon0: IconComponent;
  @ViewChild('icon2') icon2: IconComponent;
  @ViewChild('label30') label30: LabelComponent;
  @ViewChild('label31') label31: LabelComponent;
  @ViewChild('icon3') icon3: IconComponent;
  @ViewChild('icon5') icon5: IconComponent;
  @ViewChild('heading8') heading8: HeadingComponent;
  @ViewChild('heading2') heading2: HeadingComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  configService: ConfigService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  httpClient: HttpClient;

  locale: string;

  _location: Location;

  _subscription: Subscription;

  security: SecurityService;
  dateHeute: any;
  onClickStart: any;
  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.configService = this.injector.get(ConfigService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.locale = this.injector.get(LOCALE_ID);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.httpClient = this.injector.get(HttpClient);

    this.security = this.injector.get(SecurityService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }


  load() {
    window.scrollTo(0, 0); 

    this.dateHeute = new Date();

    this.onClickStart = (event) => {
  if (this.dialogRef) {
    this.dialogRef.close();
  }
  
  switch (event) {
    case "Kunden":
      this.router.navigate(['kunden']);
  	  break;

    case "Logout":
      this.router.navigate(['abmelden']);
  	  break;

    case "Infos":
      this.router.navigate(['infos']);
  	  break;

    default:
      this.notificationService.notify({ severity: "error", summary: ``, detail: `Das Modul '` + event + `' wurde noch nicht aktiviert!` });
	  break;
  }
};
  }
}
