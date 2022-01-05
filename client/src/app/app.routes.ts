import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { DetailsLayoutComponent } from './details-layout/details-layout.component';
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
        path: 'kunden-daten',
        canActivate: [AuthGuard],
        data: {
          roles: ['Authenticated'],
        },
        component: KundenDatenComponent
      },
    ]
  },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
