import { AfterContentInit, Component, ContentChild, ElementRef, HostBinding, Input } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';

import { CollapseDirective } from '../collapse';
import { Colors } from '../coreui.types';

// todo: fix container prop issue not rendering children
// todo: workaroud -  use <c-container> component directly in template

@Component({
  selector: 'c-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterContentInit {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() color?: Colors;
  /**
   * Sets if the color of text should be colored for a light or dark dark background.
   */
  @Input() colorScheme?: 'dark' | 'light' = 'light';
  /**
   * Defines optional container wrapping children elements.
   */
  @Input() container?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';
  /**
   * Defines the responsive breakpoint to determine when content collapses.
   */
  @Input() expand?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /**
   * Place component in non-static positions.
   */
  @Input() placement?: 'fixed-top' | 'fixed-bottom' | 'sticky-top';

  @ContentChild(CollapseDirective) collapse!: CollapseDirective;

  @HostBinding('attr.role')
  @Input() role = 'navigation';

  constructor(
    private hostElement: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {}

  @HostBinding('class')
  get hostClasses(): any {
    const expandClassSuffix: string = this.expand === true ? '' : `-${this.expand}`;
    return {
      navbar: true,
      'navbar-light': this.colorScheme === 'light',
      'navbar-dark': this.colorScheme === 'dark',
      [`navbar-expand${expandClassSuffix}`]: !!this.expand,
      [`bg-${this.color}`]: !!this.color,
      [`${this.placement}`]: !!this.placement
    };
  }

  get containerClass(): string {
    return `container${this.container !== true ? '-' + this.container : ''}`;
  }

  get breakpoint(): string | boolean {
    if (typeof this.expand === 'string') {
      return getComputedStyle(this.hostElement.nativeElement).getPropertyValue(`--cui-breakpoint-${this.expand}`);
    }
    return false;
  }

  ngAfterContentInit(): void {
    if (this.breakpoint) {
      const onBreakpoint = `(min-width: ${this.breakpoint})`;
      this.breakpointObserver.observe([onBreakpoint]).subscribe(result => {
        if (this.collapse) {
          const animate = this.collapse.animate;
          this.collapse.toggle(false);
          this.collapse.animate = false;
          setTimeout(() => {
            this.collapse.toggle(result.matches);
            setTimeout(() => {
              this.collapse.animate = animate;
            });
          });
        }
      });
    }
  }
}
