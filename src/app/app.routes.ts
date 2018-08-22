import { Route } from "@angular/router";
import { PhDashboardComponent } from "./ph-dashboard/ph-dashboard.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EventsListComponent } from "./events/events-list.component";

export const routes: Route[] = [
  {
    path: "",
    component: PhDashboardComponent
  },
  {
    path: "events",
    component: EventsListComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];
