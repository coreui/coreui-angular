import { NgModule } from '@angular/core';

import { WidgetStatAComponent } from './widget-stat-a/widget-stat-a.component';
import { WidgetStatBComponent } from './widget-stat-b/widget-stat-b.component';
import { WidgetStatCComponent } from './widget-stat-c/widget-stat-c.component';
import { WidgetStatDComponent } from './widget-stat-d/widget-stat-d.component';
import { WidgetStatEComponent } from './widget-stat-e/widget-stat-e.component';
import { WidgetStatFComponent } from './widget-stat-f/widget-stat-f.component';

@NgModule({
  imports: [
    WidgetStatAComponent,
    WidgetStatBComponent,
    WidgetStatCComponent,
    WidgetStatDComponent,
    WidgetStatEComponent,
    WidgetStatFComponent
  ],
  exports: [
    WidgetStatAComponent,
    WidgetStatBComponent,
    WidgetStatCComponent,
    WidgetStatDComponent,
    WidgetStatEComponent,
    WidgetStatFComponent
  ]
})
export class WidgetModule {}
