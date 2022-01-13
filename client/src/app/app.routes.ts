import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { KundenDatenLayoutComponent } from './kunden-daten-layout/kunden-daten-layout.component';
import { InfosLayoutComponent } from './infos-layout/infos-layout.component';
import { KundenLayoutComponent } from './kunden-layout/kunden-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AbmeldenComponent } from './abmelden/abmelden.component';
import { LoginComponent } from './login/login.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ZzDashboard1Component } from './zz-dashboard-1/zz-dashboard-1.component';
import { ZzDashboard2Component } from './zz-dashboard-2/zz-dashboard-2.component';
import { ZzDashboard3Component } from './zz-dashboard-3/zz-dashboard-3.component';
import { InfosComponent } from './infos/infos.component';
import { KundenComponent } from './kunden/kunden.component';
import { KundenDatenComponent } from './kunden-daten/kunden-daten.component';
import { BaseComponent } from './base/base.component';
import { AddBaseComponent } from './add-base/add-base.component';
import { EditBaseComponent } from './edit-base/edit-base.component';
import { AaKundenComponent } from './aa-kunden/aa-kunden.component';
import { AddAaKundenComponent } from './add-aa-kunden/add-aa-kunden.component';
import { EditAaKundenComponent } from './edit-aa-kunden/edit-aa-kunden.component';
import { AaKundenKontakteComponent } from './aa-kunden-kontakte/aa-kunden-kontakte.component';
import { AddAaKundenKontakteComponent } from './add-aa-kunden-kontakte/add-aa-kunden-kontakte.component';
import { EditAaKundenKontakteComponent } from './edit-aa-kunden-kontakte/edit-aa-kunden-kontakte.component';
import { ZzKundenDatenComponent } from './zz-kunden-daten/zz-kunden-daten.component';

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
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
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
      {
        path: 'base',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: BaseComponent
      },
      {
        path: 'add-base',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddBaseComponent
      },
      {
        path: 'edit-base/:BaseID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditBaseComponent
      },
      {
        path: 'aa-kunden',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AaKundenComponent
      },
      {
        path: 'add-aa-kunden',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddAaKundenComponent
      },
      {
        path: 'edit-aa-kunden/:KundenID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditAaKundenComponent
      },
      {
        path: 'aa-kunden-kontakte',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AaKundenKontakteComponent
      },
      {
        path: 'add-aa-kunden-kontakte',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: AddAaKundenKontakteComponent
      },
      {
        path: 'edit-aa-kunden-kontakte/:KundenKontaktID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: EditAaKundenKontakteComponent
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
    component: KundenDatenLayoutComponent,
    children: [
      {
        path: 'kunden-daten/:KundenID/:BetreuerBaseID',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: KundenDatenComponent
      },
      {
        path: 'zz-kunden-daten',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: ZzKundenDatenComponent
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
