import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavDropdown]',
  standalone: true
})
export class NavDropdownDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  toggle() {
    this.elementRef.nativeElement.classList.contains('open') ?
      this.renderer.removeClass(this.elementRef.nativeElement, 'open') :
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
  }
}

/**
 * Allows the dropdown to be toggled via click.
 */
@Directive({
  selector: '[appNavDropdownToggle]',
  standalone: true,
})
export class NavDropdownToggleDirective {
  constructor(private dropdown: NavDropdownDirective) { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.dropdown.toggle();
  }
}
