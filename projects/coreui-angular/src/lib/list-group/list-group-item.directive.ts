import { booleanAttribute, Directive, ElementRef, HostBinding, Input } from '@angular/core';
import { Colors } from '../coreui.types';

@Directive({
  selector: '[cListGroupItem], c-list-group-item',
  exportAs: 'cListGroupItem',
  standalone: true
})
export class ListGroupItemDirective {

  constructor(
    private hostElement: ElementRef
  ) { }

  /**
   * Toggle the active state for the component.
   * @type boolean
   */
  @Input() active?: boolean;

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() color?: Colors;

  /**
   * Set disabled attr for the host element. [docs]
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) disabled: string | boolean = false;

  @HostBinding('attr.aria-disabled')
  get isDisabled(): boolean | null {
    return <boolean>this.disabled || null;
  }

  @HostBinding('attr.disabled')
  get attrDisabled() {
    return this.disabled ? '' : null;
  };

  @HostBinding('attr.tabindex')
  get getTabindex(): string | null {
    return this.disabled ? '-1' : null;
  }

  @HostBinding('attr.aria-current') get ariaCurrent(): boolean {
    return !!this.active;
  }

  @HostBinding('class')
  get hostClasses(): any {
    const host: HTMLElement = this.hostElement.nativeElement;
    return {
      'list-group-item': true,
      'list-group-item-action': host.nodeName === 'A' || host.nodeName === 'BUTTON',
      active: !!this.active,
      disabled: this.isDisabled,
      [`list-group-item-${this.color}`]: !!this.color
    };
  }

}
