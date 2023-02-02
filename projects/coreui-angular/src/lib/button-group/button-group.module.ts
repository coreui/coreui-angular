import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ButtonToolbarComponent } from './button-toolbar/button-toolbar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonGroupComponent, ButtonToolbarComponent],
  exports: [ButtonGroupComponent, ButtonToolbarComponent]
})
export class ButtonGroupModule {}
