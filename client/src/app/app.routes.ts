import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { DetailsLayoutComponent } from './details-layout/details-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { KundenLayoutComponent } from './kunden-layout/kunden-layout.component';
import { InfosLayoutComponent } from './infos-layout/infos-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseComponent } from './base/base.component';
import { BaseDetailsComponent } from './base-details/base-details.component';
import { AbmeldenComponent } from './abmelden/abmelden.component';
import { LoginComponent } from './login/login.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { DienstplanComponent } from './dienstplan/dienstplan.component';
import { KundenComponent } from './kunden/kunden.component';
import { FahrtenbuchComponent } from './fahrtenbuch/fahrtenbuch.component';
import { EinstellungenComponent } from './einstellungen/einstellungen.component';
import { VersionenComponent } from './versionen/versionen.component';
import { ZzDashboard1Component } from './zz-dashboard-1/zz-dashboard-1.component';
import { ZzDashboard2Component } from './zz-dashboard-2/zz-dashboard-2.component';
import { ZzDashboard3Component } from './zz-dashboard-3/zz-dashboard-3.component';
import { InfosComponent } from './infos/infos.component';

import { SecurityService } from './security.service';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: DashboardComponent
      },
      {
        path: 'abmelden',
        data: {
          roles: ['Everybody'],
        },
        component: AbmeldenComponent
      },
      {
        path: 'unauthorized',
        data: {
          roles: ['Everybody'],
        },
        component: UnauthorizedComponent
      },
      {
        path: 'dienstplan',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: DienstplanComponent
      },
      {
        path: 'fahrtenbuch',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: FahrtenbuchComponent
      },
      {
        path: 'einstellungen',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EinstellungenComponent
      },
      {
        path: 'versionen',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: VersionenComponent
      },
      {
        path: 'zz-dashboard-1',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: ZzDashboard1Component
      },
      {
        path: 'zz-dashboard-2',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: ZzDashboard2Component
      },
      {
        path: 'zz-dashboard-3',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: ZzDashboard3Component
      },
    ]
  },
  {
    path: '',
    component: DetailsLayoutComponent,
    children: [
      {
        path: 'base',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: BaseComponent
      },
      {
        path: 'base-details/:baseID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: BaseDetailsComponent
      },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        data: {
          roles: ['Everybody'],
        },
        component: LoginComponent
      },
    ]
  },
  {
    path: '',
    component: KundenLayoutComponent,
    children: [
      {
        path: 'kunden',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: KundenComponent
      },
    ]
  },
  {
    path: '',
    component: InfosLayoutComponent,
    children: [
      {
        path: 'infos',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: InfosComponent
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
