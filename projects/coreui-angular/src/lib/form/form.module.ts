import { NgModule } from '@angular/core';
import { FormDirective } from './form/form.directive';
import { FormFeedbackComponent } from './form-feedback/form-feedback.component';
import { InputGroupComponent } from './input-group/input-group.component';
import { FormSelectDirective } from './form-select/form-select.directive';
import { FormLabelDirective } from './form-label/form-label.directive';
import { FormCheckComponent } from './form-check/form-check.component';
import { FormControlDirective } from './form-control/form-control.directive';
import { FormTextDirective } from './form-text/form-text.directive';
import { FormFloatingDirective } from './form-floating/form-floating.directive';
import { InputGroupTextDirective } from './input-group-text/input-group-text.directive';
import { FormCheckLabelDirective } from './form-check/form-check-label.directive';
import { FormCheckInputDirective } from './form-check/form-check-input.directive';

@NgModule({
  imports: [
    FormDirective,
    FormCheckComponent,
    FormCheckLabelDirective,
    FormCheckInputDirective,
    FormControlDirective,
    FormFeedbackComponent,
    FormFloatingDirective,
    FormLabelDirective,
    FormSelectDirective,
    FormTextDirective,
    InputGroupComponent,
    InputGroupTextDirective
  ],
  exports: [
    FormDirective,
    FormCheckComponent,
    FormCheckLabelDirective,
    FormCheckInputDirective,
    FormControlDirective,
    FormFeedbackComponent,
    FormFloatingDirective,
    FormLabelDirective,
    FormSelectDirective,
    FormTextDirective,
    InputGroupComponent,
    InputGroupTextDirective
  ]
})
export class FormModule {}
