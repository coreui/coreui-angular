import { AfterContentInit, Component, ContentChild, HostBinding, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

import { FormCheckLabelDirective } from './form-check-label.directive';

@Component({
  selector: 'c-form-check',
  template: '<ng-content></ng-content>',
  exportAs: 'cFormCheck',
  standalone: true
})
export class FormCheckComponent implements AfterContentInit {

  static ngAcceptInputType_inline: BooleanInput;
  static ngAcceptInputType_reverse: BooleanInput;
  static ngAcceptInputType_switch: BooleanInput;

  /**
   * Group checkboxes or radios on the same horizontal row.
   * @type boolean
   * @default false
   */
  @Input()
  set inline(value: boolean) {
    this._inline = coerceBooleanProperty(value);
  }

  get inline(): boolean {
    return this._inline;
  }

  private _inline = false;

  /**
   * Put checkboxes or radios on the opposite side.
   * @type boolean
   * @default false
   * @since 4.4.7
   */
  @Input()
  set reverse(value: boolean) {
    this._reverse = coerceBooleanProperty(value);
  }

  get reverse(): boolean {
    return this._reverse;
  }

  private _reverse: boolean = false;

  /**
   * Size the component large or extra large. Works only with `[switch]="true"` [docs]
   * @type {'lg' | 'xl' | ''}
   */
  @Input() sizing?: 'lg' | 'xl' | '' = '';

  /**
   * Render a toggle switch on for checkbox.
   * @type boolean
   * @default false
   */
  @Input()
  set switch(value: boolean) {
    this._switch = coerceBooleanProperty(value);
  }

  get switch(): boolean {
    return this._switch;
  }

  private _switch = false;

  @HostBinding('class')
  get hostClasses(): any {

    return {
      'form-check': this.formCheckClass,
      'form-switch': this.switch,
      [`form-switch-${this.sizing}`]: this.switch && !!this.sizing,
      'form-check-inline': this.inline,
      'form-check-reverse': this.reverse
    };
  }

  @ContentChild(FormCheckLabelDirective) formCheckLabel!: FormCheckLabelDirective;

  private _formCheckClass = true;
  get formCheckClass() {
    return this._formCheckClass;
  }

  ngAfterContentInit(): void {
    this._formCheckClass = !!this.formCheckLabel;
  }
}
