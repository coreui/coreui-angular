import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabPaneComponent } from './tab-pane/tab-pane.component';
import { TabService } from './tab.service';
import { TabContentRefDirective } from './tab-content-ref.directive';

@NgModule({
  declarations: [
    TabContentComponent,
    TabPaneComponent,
    TabContentRefDirective
  ],
  imports: [
    CommonModule
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
export class TabsModule { }
