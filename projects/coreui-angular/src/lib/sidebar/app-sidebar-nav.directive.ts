import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appNavDropdown]',
  standalone: true
})
export class NavDropdownDirective {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);


  toggle() {
    if (this.elementRef.nativeElement.classList.contains('open')) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    }
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
  private dropdown = inject(NavDropdownDirective);


  @HostListener('click', ['$event'])
  toggleOpen($event: Event) {
    $event.preventDefault();
    this.dropdown.toggle();
  }
}
