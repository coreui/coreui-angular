import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () => import('./containers').then(m => m.DefaultLayoutComponent),
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./views/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/routes').then(m => m.routes)
      }
    ]
  },
  { path: '**', loadComponent: () => import('./containers').then(m => m.DefaultLayoutComponent) }
];
