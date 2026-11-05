import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full'
      },
      {
        path: 'buttons',
        loadComponent: () => import('./buttons.component').then(m => m.ButtonsComponent),
        data: {
          title: 'Buttons'
        }
      },
      {
        path: 'brand-buttons',
        loadComponent: () => import('./brand-buttons.component').then(m => m.BrandButtonsComponent),
        data: {
          title: 'Brand Buttons'
        }
      }
    ]
  }
];

