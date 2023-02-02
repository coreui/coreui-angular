import { AfterContentInit, Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cHeaderToggler]',
  standalone: true
})
export class HeaderTogglerDirective implements AfterContentInit {

  @HostBinding('class.header-toggler') headerToggler = true;
  /**
   * Default role for header-toggler. [docs]
   * @type string
   * @default 'button'
   */
  @HostBinding('attr.type')
  @Input() type = 'button';
  /**
   * Default aria-label attr for header-toggler. [docs]
   * @type string
   * @default 'Toggle navigation'
   */
  @HostBinding('attr.aria-label')
  @Input() ariaLabel = 'Toggle navigation';

  private hasContent!: boolean;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) { }

  addDefaultIcon(): void {
    const span = this.renderer.createElement('span');
    this.renderer.addClass(span, 'header-toggler-icon');
    this.renderer.appendChild(this.hostElement.nativeElement, span);
  }

  ngAfterContentInit(): void {
    this.hasContent = this.hostElement.nativeElement.childNodes.length > 0;
    if (!this.hasContent) {
      this.addDefaultIcon();
    }
  }
}
