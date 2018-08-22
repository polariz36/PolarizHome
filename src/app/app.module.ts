import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PhNavComponent } from "./ph-nav/ph-nav.component";
import { PhDashboardComponent } from "./ph-dashboard/ph-dashboard.component";

import { routes } from "./app.routes";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PhFormComponent } from "./ph-form/ph-form.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";

@NgModule({
  declarations: [
    AppComponent,
    PhNavComponent,
    PhDashboardComponent,
    PageNotFoundComponent,
    PhFormComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
