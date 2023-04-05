import { NgModule } from '@angular/core';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabPaneComponent } from './tab-pane/tab-pane.component';
import { TabService } from './tab.service';
import { TabContentRefDirective } from './tab-content-ref.directive';

@NgModule({
  imports: [
    TabContentComponent,
    TabContentRefDirective,
    TabPaneComponent
  ],
  exports: [
    TabContentComponent,
    TabPaneComponent,
    TabContentRefDirective
  ],
  providers: [
    TabService
  ]
})
export class TabsModule {}
