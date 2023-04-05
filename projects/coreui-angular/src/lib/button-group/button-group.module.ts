import { NgModule } from '@angular/core';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ButtonToolbarComponent } from './button-toolbar/button-toolbar.component';

@NgModule({
  imports: [ButtonGroupComponent, ButtonToolbarComponent],
  exports: [ButtonGroupComponent, ButtonToolbarComponent]
})
export class ButtonGroupModule {}
