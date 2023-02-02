import {Directive, HostBinding, Input} from '@angular/core';
import { Sizes } from '../coreui.types';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[cListGroup]',
  standalone: true
})
export class ListGroupDirective {
  static ngAcceptInputType_flush: BooleanInput;

  /**
   * Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`).
   * @type boolean
   */
  @Input()
  set flush(value: boolean) {
    this._flush = coerceBooleanProperty(value);
  };
  get flush() {
    return this._flush;
  }
  private _flush = false;
  /**
   * Specify horizontal layout type.
   */
  @Input() horizontal?: boolean | Sizes;

  @HostBinding('class')
  get hostClasses(): any {
    const classes = {
      'list-group': true,
      'list-group-horizontal': this.horizontal === true || this.horizontal === '',
      [`list-group-horizontal-${this.horizontal}`]: !!this.horizontal && typeof this.horizontal !== 'boolean',
      'list-group-flush': this.flush,
    };
    return classes;
  }

  constructor( ) {  }

}

