import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { DropdownService } from '../dropdown.service';

@Directive({
  selector: '[cDropdownMenu]',
  exportAs: 'cDropdownMenu',
  standalone: true
})
export class DropdownMenuDirective implements OnInit, OnDestroy {
  static ngAcceptInputType_dark: BooleanInput;

  constructor(
    public elementRef: ElementRef,
    private dropdownService: DropdownService
  ) {}

  /**
   * Set alignment of dropdown menu.
   * @type {'start' | 'end' }
   */
  @Input() alignment?: 'start' | 'end' | string;

  /**
   * Toggle the visibility of dropdown menu component.
   */
  @Input() visible = false;

  /**
   * Sets a darker color scheme to match a dark navbar.
   */
  @Input()
  get dark(): boolean {
    return this._dark;
  }
  set dark(value: boolean) {
    this._dark = coerceBooleanProperty(value);
  }
  private _dark = false;

  private dropdownStateSubscription!: Subscription;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'dropdown-menu': true,
      'dropdown-menu-dark': this.dark,
      [`dropdown-menu-${this.alignment}`]: !!this.alignment,
      show: this.visible,
    };
  }

  @HostBinding('style')
  get hostStyles() {
    // workaround for popper position calculate (see also: dropdown.component)
    return {
      visibility: this.visible ? null : '',
      display: this.visible ? null : '',
    };
  }

  ngOnInit(): void {
    this.dropdownStateSubscribe();
  }

  ngOnDestroy(): void {
    this.dropdownStateSubscribe(false);
  }

  private dropdownStateSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.dropdownStateSubscription =
        this.dropdownService.dropdownState$.subscribe((state) => {
          if ('visible' in state) {
            this.visible =
              state.visible === 'toggle' ? !this.visible : state.visible;
          }
        });
    } else {
      this.dropdownStateSubscription?.unsubscribe();
    }
  }
}
