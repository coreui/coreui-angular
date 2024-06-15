import { NgModule } from '@angular/core';
import { TabsService } from './tabs.service';
import { TabsComponent } from './tabs.component';
import { TabDirective } from './tab/tab.directive';
import { TabsListComponent } from './tabs-list/tabs-list.component';
import { TabsContentComponent } from './tabs-content/tabs-content.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';

@NgModule({
  imports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent],
  exports: [TabsComponent, TabsListComponent, TabDirective, TabsContentComponent, TabPanelComponent],
  providers: [TabsService]
})
export class Tabs2Module {}
