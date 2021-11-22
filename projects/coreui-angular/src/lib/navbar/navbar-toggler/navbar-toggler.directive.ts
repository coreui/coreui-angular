import { AfterContentInit, Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { CollapseDirective } from '../../collapse';

@Directive({
  selector: '[cNavbarToggler]'
})
export class NavbarTogglerDirective implements AfterContentInit {
  /**
   * Reference to navbar collapse element (via # template variable) . [docs]
   * @type string
   * @default 'button'
   */
  @Input('cNavbarToggler') collapseRef?: CollapseDirective;
  @HostBinding('class.navbar-toggler') navbarToggler = true;
  /**
   * Default type for navbar-toggler. [docs]
   * @type string
   * @default 'button'
   */
  @HostBinding('attr.type')
  @Input() type = 'button';
  /**
   * Default aria-label attr for navbar-toggler. [docs]
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

  @HostListener('click', ['$event'])
  handleClick() {
    this.collapseRef?.toggle(!this.collapseRef?.visible);
  }

  addDefaultIcon(): void {
    const span = this.renderer.createElement('span');
    this.renderer.addClass(span, 'navbar-toggler-icon');
    this.renderer.appendChild(this.hostElement.nativeElement, span);
  }

  ngAfterContentInit(): void {
    this.hasContent = this.hostElement.nativeElement.childNodes.length as boolean;
    if (!this.hasContent) {
      this.addDefaultIcon();
    }
  }
}
