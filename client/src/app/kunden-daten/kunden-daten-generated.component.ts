/*
  This file is automatically generated. Any changes will be overwritten.
  Modify kunden-daten.component.ts instead.
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
import { PanelComponent } from '@radzen/angular/dist/panel';
import { LabelComponent } from '@radzen/angular/dist/label';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { DataListComponent } from '@radzen/angular/dist/datalist';
import { GaugeComponent } from '@radzen/angular/dist/gauge';

import { ConfigService } from '../config.service';

import { DbSinDarElaService } from '../db-sin-dar-ela.service';
import { SecurityService } from '../security.service';

export class KundenDatenGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('tabs0') tabs0: TabsComponent;
  @ViewChild('panel0') panel0: PanelComponent;
  @ViewChild('label8') label8: LabelComponent;
  @ViewChild('label10') label10: LabelComponent;
  @ViewChild('label11') label11: LabelComponent;
  @ViewChild('label3') label3: LabelComponent;
  @ViewChild('label12') label12: LabelComponent;
  @ViewChild('label16') label16: LabelComponent;
  @ViewChild('label13') label13: LabelComponent;
  @ViewChild('label17') label17: LabelComponent;
  @ViewChild('label19') label19: LabelComponent;
  @ViewChild('label20') label20: LabelComponent;
  @ViewChild('label21') label21: LabelComponent;
  @ViewChild('label14') label14: LabelComponent;
  @ViewChild('button2') button2: ButtonComponent;
  @ViewChild('panel3') panel3: PanelComponent;
  @ViewChild('datalistKundenKontakte') datalistKundenKontakte: DataListComponent;
  @ViewChild('button1') button1: ButtonComponent;
  @ViewChild('panel4') panel4: PanelComponent;
  @ViewChild('label22') label22: LabelComponent;
  @ViewChild('label23') label23: LabelComponent;
  @ViewChild('label33') label33: LabelComponent;
  @ViewChild('button3') button3: ButtonComponent;
  @ViewChild('panel2') panel2: PanelComponent;
  @ViewChild('datalistKundenBetreuer') datalistKundenBetreuer: DataListComponent;
  @ViewChild('panel1') panel1: PanelComponent;
  @ViewChild('datalistKundenNotizen') datalistKundenNotizen: DataListComponent;
  @ViewChild('button0') button0: ButtonComponent;
  @ViewChild('label24') label24: LabelComponent;
  @ViewChild('panel5') panel5: PanelComponent;
  @ViewChild('datalistKundenLeistungenArten') datalistKundenLeistungenArten: DataListComponent;
  @ViewChild('panel11') panel11: PanelComponent;
  @ViewChild('label9') label9: LabelComponent;
  @ViewChild('label35') label35: LabelComponent;
  @ViewChild('label36') label36: LabelComponent;
  @ViewChild('label38') label38: LabelComponent;
  @ViewChild('label40') label40: LabelComponent;
  @ViewChild('label41') label41: LabelComponent;
  @ViewChild('label43') label43: LabelComponent;
  @ViewChild('label42') label42: LabelComponent;
  @ViewChild('panel6') panel6: PanelComponent;
  @ViewChild('panel7') panel7: PanelComponent;
  @ViewChild('panel8') panel8: PanelComponent;
  @ViewChild('label25') label25: LabelComponent;
  @ViewChild('panel9') panel9: PanelComponent;
  @ViewChild('panel10') panel10: PanelComponent;
  @ViewChild('label26') label26: LabelComponent;

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
  dsoKundenBetreuerBase: any;
  intAlterKunde: any;
  onClickBearbeitenNotiz: any;
  onClickAnimation: any;
  parameters: any;
  rstKundenKontakte: any;
  rstKundenKontakteCount: any;
  rstKundenBetreuer: any;
  rstKundenBetreuerCount: any;
  rstKundenNotizen: any;
  rstKundenNotizenCount: any;
  rstKundenLeistungenArten: any;
  rstKundenLeistungenArtenCount: any;

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
    window.scrollTo(0, 0);

    this.datalistKundenBetreuer.load();
this.datalistKundenKontakte.load();
this.datalistKundenNotizen.load();
this.datalistKundenLeistungenArten.load();

    this.dbSinDarEla.getVwKundenUndBetreuerAuswahls(`KundenID eq ${this.parameters.KundenID} AND BetreuerBaseID eq ${this.parameters.BetreuerBaseID}`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.dsoKundenBetreuerBase = result.value[0];

      this.intAlterKunde = 0;

      var birthDate = new Date(this.dsoKundenBetreuerBase.Geburtsdatum);
var ageDifMs = Date.now() - birthDate.getTime();
var ageDate = new Date(ageDifMs); // miliseconds from Epoch
this.intAlterKunde = Math.abs(ageDate.getUTCFullYear() - 1970);
    }, (result: any) => {

    });

    this.onClickBearbeitenNotiz = (data) => {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    this.notificationService.notify({ severity: "error", summary: ``, detail: `Noch nicht aktiviert!` });
};

    this.onClickAnimation = (ElementId) => {
  document.getElementById(ElementId).style.animation = "touchClick 2s linear 1";
  
  setTimeout(() => { 
    document.getElementById(ElementId).style.animation = ""; 
  }, 2000)  
  
  
};
  }

  datalistKundenKontakteLoadData(event: any) {
    this.dbSinDarEla.getKundenKontaktes(`KundenID eq ${this.parameters.KundenID}`, null, null, `KundenKontakteArten/Sortierung, Name`, null, `KundenKontakteArten`, null, null)
    .subscribe((result: any) => {
      this.rstKundenKontakte = result.value;

      this.rstKundenKontakteCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  datalistKundenBetreuerLoadData(event: any) {
    this.dbSinDarEla.getVwKundenBetreuers(`KundenID eq ${this.parameters.KundenID}`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.rstKundenBetreuer = result.value;

      this.rstKundenBetreuerCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  datalistKundenNotizenLoadData(event: any) {
    this.dbSinDarEla.getNotizens(`LinkID eq ${this.parameters.KundenID} AND Modul eq 'Kunden'`, null, null, `Am, Titel`, null, null, null, null)
    .subscribe((result: any) => {
      this.rstKundenNotizen = result.value;

      this.rstKundenNotizenCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  datalistKundenLeistungenArtenLoadData(event: any) {
    this.dbSinDarEla.getKundenLeistungens(`KundenID eq ${this.parameters.KundenID}`, null, null, `KundenLeistungArten/LeistungArt`, null, `KundenLeistungArten`, null, null)
    .subscribe((result: any) => {
      this.rstKundenLeistungenArten = result.value;

      this.rstKundenLeistungenArtenCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }
}
