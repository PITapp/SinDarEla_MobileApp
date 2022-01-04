/*
  This file is automatically generated. Any changes will be overwritten.
  Modify infos.component.ts instead.
*/
import { LOCALE_ID, ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { TabsComponent } from '@radzen/angular/dist/tabs';
import { HtmlComponent } from '@radzen/angular/dist/html';
import { ImageComponent } from '@radzen/angular/dist/image';

import { ConfigService } from '../config.service';

import { DbSinDarElaService } from '../db-sin-dar-ela.service';
import { SecurityService } from '../security.service';

export class InfosGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('tabs0') tabs0: TabsComponent;
  @ViewChild('html1') html1: HtmlComponent;
  @ViewChild('html0') html0: HtmlComponent;
  @ViewChild('html2') html2: HtmlComponent;
  @ViewChild('image0') image0: ImageComponent;

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

  dbSinDarEla: DbSinDarElaService;

  security: SecurityService;
  htmlVersionen: any;
  htmlHandbuch: any;
  htmlKontakt: any;
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

    this.dbSinDarEla = this.injector.get(DbSinDarElaService);
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
    this.dbSinDarEla.getInfotexteHtmls(`Code eq 'VersionenMobile'`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.htmlVersionen = result.value[0].Inhalt;
    }, (result: any) => {

    });

    this.dbSinDarEla.getInfotexteHtmls(`Code eq 'MobileHandbuch'`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.htmlHandbuch = result.value[0].Inhalt;
    }, (result: any) => {

    });

    this.dbSinDarEla.getInfotexteHtmls(`Code eq 'KontaktWeb'`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.htmlKontakt = result.value[0].Inhalt;
    }, (result: any) => {

    });
  }
}