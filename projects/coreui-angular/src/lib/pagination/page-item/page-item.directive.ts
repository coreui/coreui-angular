import {
  AfterContentInit,
  ContentChild,
  Directive,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges
} from '@angular/core';

import { PageLinkDirective } from '../page-link/page-link.directive';

@Directive({
  selector: '[cPageItem]',
  host: { class: 'page-item' }
})
export class PageItemDirective implements AfterContentInit, OnChanges {
  readonly #renderer = inject(Renderer2);

  /**
   * Toggle the active state for the component.
   * @type boolean
   */
  @Input() active?: boolean;
  /**
   * Toggle the disabled state for the component.
   * @type boolean
   */
  @Input() disabled?: boolean;

  @HostBinding('attr.aria-current')
  get ariaCurrent(): string | null {
    return this.active ? 'page' : null;
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'page-item': true,
      disabled: this.disabled,
      active: this.active
    };
  }

  @ContentChild(PageLinkDirective, { read: ElementRef }) pageLinkElementRef!: ElementRef;

  ngAfterContentInit(): void {
    this.setAttributes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['disabled']) {
      this.setAttributes();
    }
  }

  setAttributes(): void {
    if (!this.pageLinkElementRef) {
      return;
    }
    const pageLinkElement = this.pageLinkElementRef.nativeElement;

    if (this.disabled) {
      this.#renderer.setAttribute(pageLinkElement, 'aria-disabled', 'true');
      this.#renderer.setAttribute(pageLinkElement, 'tabindex', '-1');
    } else {
      this.#renderer.removeAttribute(pageLinkElement, 'aria-disabled');
      this.#renderer.removeAttribute(pageLinkElement, 'tabindex');
    }
  }
}
