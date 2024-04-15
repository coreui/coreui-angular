import { AfterContentInit, booleanAttribute, Component, ContentChild, HostBinding, Input } from '@angular/core';

import { FormCheckLabelDirective } from './form-check-label.directive';

@Component({
  selector: 'c-form-check',
  template: '<ng-content />',
  exportAs: 'cFormCheck',
  standalone: true
})
export class FormCheckComponent implements AfterContentInit {

  /**
   * Group checkboxes or radios on the same horizontal row.
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute }) inline: string | boolean = false;

  /**
   * Put checkboxes or radios on the opposite side.
   * @type boolean
   * @default false
   * @since 4.4.7
   */
  @Input({ transform: booleanAttribute }) reverse: string | boolean = false;

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
  @Input({ transform: booleanAttribute }) switch: string | boolean = false;

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

  #formCheckClass = true;
  get formCheckClass() {
    return this.#formCheckClass;
  }

  ngAfterContentInit(): void {
    this.#formCheckClass = !!this.formCheckLabel;
  }
}
