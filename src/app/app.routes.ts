import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { AnalyticsComponent } from './feature/pages/analytics/analytics.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home/analytics', pathMatch: 'full' },
  {
    path: 'home',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'analytics', pathMatch: 'full' },
      { path: 'analytics', component: AnalyticsComponent },
      {
        path: 'orders',
        loadComponent: () =>
          import('./feature/pages/orders/orders.component').then(
            (c) => c.OrdersComponent
          ),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./feature/pages/users/users.component').then(
            (c) => c.UsersComponent
          ),
      },
      {
        path: 'items',
        loadComponent: () =>
          import('./feature/pages/items/items.component').then(
            (c) => c.ItemsComponent
          ),
      },
      {
        path: 'tranactions',
        loadComponent: () =>
          import('./feature/pages/tranactions/tranactions.component').then(
            (c) => c.TranactionsComponent
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./feature/pages/reports/reports.component').then(
            (c) => c.ReportsComponent
          ),
      },
      {
        path: 'order/:id',
        loadComponent: () =>
          import('./feature/pages/order-details/order-details.component').then(
            (c) => c.OrderDetailsComponent
          ),
      },
    ],
  },
];
