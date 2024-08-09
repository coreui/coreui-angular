import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[cFormFloating]',
  standalone: true
})
export class FormFloatingDirective {
  /**
   * Enable floating labels
   * @type boolean
   */
  @Input({ alias: 'cFormFloating', transform: booleanAttribute }) floating: string | boolean = true;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'form-floating': this.floating
    };
  }
}
