import {
  AfterContentInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  Optional,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Directive({
  selector: '[cDropdownItem]',
  exportAs: 'cDropdownItem'
})
export class DropdownItemDirective implements AfterContentInit, OnChanges {
  /**
   * Set active state to a dropdown-item.
   */
  @Input() active?: boolean;
  /**
   * Disables a dropdown-item.
   */
  @Input() disabled?: boolean;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private dropdownService: DropdownService,
    @Optional() public dropdown?: DropdownComponent
  ) {
  }

  @HostBinding('attr.aria-current')
  get ariaCurrent(): string | null {
    return this.active ? 'true' : null;
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'dropdown-item': true,
      active: this.active,
      disabled: this.disabled,
    };
  }

  @HostListener('click', ['$event'])
  public onClick($event: MouseEvent): void {
    this.dropdownService.toggle({visible: 'toggle', dropdown: this.dropdown});
  }

  ngAfterContentInit(): void {
    this.setAttributes(this.hostElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disabled) {
      this.setAttributes(this.hostElement);
    }
  }

  setAttributes(element: any): void {
    if (this.disabled) {
      this.renderer.setAttribute(element.nativeElement, 'aria-disabled', 'true');
      this.renderer.setAttribute(element.nativeElement, 'tabindex', '-1');
    } else {
      this.renderer.removeAttribute(element.nativeElement, 'aria-disabled');
      this.renderer.removeAttribute(element.nativeElement, 'tabindex');
    }
  }
}
