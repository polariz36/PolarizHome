import { Route } from '@angular/router';
import { PhDashboardComponent } from './ph-dashboard/ph-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Route[] = [
  {
    path: '',
    component: PhDashboardComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
