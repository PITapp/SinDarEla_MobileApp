/*
  This file is automatically generated. Any changes will be overwritten.
  Modify app.module.ts instead.
*/
import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BodyModule } from '@radzen/angular/dist/body';
import { ContentContainerModule } from '@radzen/angular/dist/content-container';
import { HeaderModule } from '@radzen/angular/dist/header';
import { ButtonModule } from '@radzen/angular/dist/button';
import { LabelModule } from '@radzen/angular/dist/label';
import { LinkModule } from '@radzen/angular/dist/link';
import { CardModule } from '@radzen/angular/dist/card';
import { ImageModule } from '@radzen/angular/dist/image';
import { IconModule } from '@radzen/angular/dist/icon';
import { ContentModule } from '@radzen/angular/dist/content';
import { HeadingModule } from '@radzen/angular/dist/heading';
import { TextBoxModule } from '@radzen/angular/dist/textbox';
import { DataListModule } from '@radzen/angular/dist/datalist';
import { TextAreaModule } from '@radzen/angular/dist/textarea';
import { HtmlModule } from '@radzen/angular/dist/html';
import { LoginModule } from '@radzen/angular/dist/login';
import { TabsModule } from '@radzen/angular/dist/tabs';
import { SwitchModule } from '@radzen/angular/dist/switch';
import { PanelModule } from '@radzen/angular/dist/panel';
import { DropDownModule } from '@radzen/angular/dist/dropdown';
import { ProgressBarModule } from '@radzen/angular/dist/progressbar';
import { GaugeModule } from '@radzen/angular/dist/gauge';
import { SparklineModule } from '@radzen/angular/dist/sparkline';
import { SharedModule } from '@radzen/angular/dist/shared';
import { NotificationModule } from '@radzen/angular/dist/notification';
import { DialogModule } from '@radzen/angular/dist/dialog';

import { ConfigService, configServiceFactory } from './config.service';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { CacheInterceptor } from './cache.interceptor';
export { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseComponent } from './base/base.component';
import { BaseDetailsComponent } from './base-details/base-details.component';
import { AbmeldenComponent } from './abmelden/abmelden.component';
import { LoginComponent } from './login/login.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { DienstplanComponent } from './dienstplan/dienstplan.component';
import { KundenComponent } from './kunden/kunden.component';
import { KontakteComponent } from './kontakte/kontakte.component';
import { NachrichtenComponent } from './nachrichten/nachrichten.component';
import { FahrtenbuchComponent } from './fahrtenbuch/fahrtenbuch.component';
import { EinstellungenComponent } from './einstellungen/einstellungen.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { VersionenComponent } from './versionen/versionen.component';
import { ZzDashboard1Component } from './zz-dashboard-1/zz-dashboard-1.component';
import { ZzDashboard2Component } from './zz-dashboard-2/zz-dashboard-2.component';
import { DetailsLayoutComponent } from './details-layout/details-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { KundenLayoutComponent } from './kunden-layout/kunden-layout.component';

import { DbSinDarElaService } from './db-sin-dar-ela.service';
import { SecurityService, UserService } from './security.service';
import { SecurityInterceptor } from './security.interceptor';
import { AuthGuard } from './auth.guard';

export const PageDeclarations = [
  DashboardComponent,
  BaseComponent,
  BaseDetailsComponent,
  AbmeldenComponent,
  LoginComponent,
  UnauthorizedComponent,
  DienstplanComponent,
  KundenComponent,
  KontakteComponent,
  NachrichtenComponent,
  FahrtenbuchComponent,
  EinstellungenComponent,
  ImpressumComponent,
  DatenschutzComponent,
  VersionenComponent,
  ZzDashboard1Component,
  ZzDashboard2Component,
];

export const LayoutDeclarations = [
  DetailsLayoutComponent,
  LoginLayoutComponent,
  MainLayoutComponent,
  KundenLayoutComponent,
];

export const AppDeclarations = [
  ...PageDeclarations,
  ...LayoutDeclarations,
  AppComponent
];

export const AppProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true
  },
  DbSinDarElaService,
  UserService,
  SecurityService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
  },
  AuthGuard,
  ConfigService,
  {
    provide: APP_INITIALIZER,
    useFactory: configServiceFactory,
    deps: [ConfigService],
    multi: true
  }
];

export const AppImports = [
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  BodyModule,
  ContentContainerModule,
  HeaderModule,
  ButtonModule,
  LabelModule,
  LinkModule,
  CardModule,
  ImageModule,
  IconModule,
  ContentModule,
  HeadingModule,
  TextBoxModule,
  DataListModule,
  TextAreaModule,
  HtmlModule,
  LoginModule,
  TabsModule,
  SwitchModule,
  PanelModule,
  DropDownModule,
  ProgressBarModule,
  GaugeModule,
  SparklineModule,
  SharedModule,
  NotificationModule,
  DialogModule,
  AppRoutes
];
