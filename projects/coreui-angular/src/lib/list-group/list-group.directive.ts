import { booleanAttribute, Directive, HostBinding, Input } from '@angular/core';
import { Sizes } from '../coreui.types';

@Directive({
  selector: '[cListGroup]',
  standalone: true
})
export class ListGroupDirective {

  /**
   * Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`).
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) flush: string | boolean = false;

  /**
   * Specify horizontal layout type.
   */
  @Input() horizontal?: boolean | Sizes;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'list-group': true,
      'list-group-horizontal': this.horizontal === true || this.horizontal === '',
      [`list-group-horizontal-${this.horizontal}`]: !!this.horizontal && typeof this.horizontal !== 'boolean',
      'list-group-flush': this.flush
    };
  }

}

