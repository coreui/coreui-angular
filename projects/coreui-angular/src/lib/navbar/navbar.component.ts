import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterContentInit,
  afterEveryRender,
  Component,
  computed,
  contentChild,
  DOCUMENT,
  ElementRef,
  inject,
  input,
  OnDestroy,
  signal
} from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Subscription } from 'rxjs';

import { CollapseDirective } from '../collapse';
import { Colors } from '../coreui.types';
import { ThemeDirective } from '../shared';

// todo: fix container prop issue not rendering children
// todo: workaround -  use <c-container> component directly in template

@Component({
  selector: 'c-navbar',
  templateUrl: './navbar.component.html',
  imports: [NgClass, NgTemplateOutlet],
  hostDirectives: [{ directive: ThemeDirective, inputs: ['colorScheme'] }],
  host: { '[class]': 'hostClasses()', '[attr.role]': 'role()' }
})
export class NavbarComponent implements AfterContentInit, OnDestroy {
  readonly #breakpointObserver = inject(BreakpointObserver);
  readonly #document = inject(DOCUMENT);
  readonly #hostElement = inject(ElementRef);

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  readonly color = input<Colors>();

  /**
   * Defines optional container wrapping children elements.
   */
  readonly container = input<boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid'>();

  /**
   * Defines the responsive breakpoint to determine when content collapses.
   */
  readonly expand = input<boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>();

  /**
   * Place component in non-static positions.
   */
  readonly placement = input<'fixed-top' | 'fixed-bottom' | 'sticky-top'>();

  readonly role = input('navigation');

  readonly collapse = contentChild(CollapseDirective);

  readonly hostClasses = computed(() => {
    const color = this.color();
    const expand = this.expand();
    const expandClassSuffix: string = expand === true ? '' : `-${expand}`;
    const placement = this.placement();
    return {
      navbar: true,
      [`navbar-expand${expandClassSuffix}`]: !!expand,
      [`bg-${color}`]: !!color,
      [`${placement}`]: !!placement
    } as Record<string, boolean>;
  });

  readonly containerClass = computed(() => {
    const container = this.container();
    return `container${container !== true ? '-' + container : ''}`;
  });

  readonly computedStyle = signal<string>('');

  readonly #afterEveryRenderFn = afterEveryRender({
    read: () => {
      const expand = this.expand();
      if (typeof expand === 'string') {
        const computedStyle =
          this.#document.defaultView
            ?.getComputedStyle(this.#hostElement.nativeElement)
            ?.getPropertyValue(`--cui-breakpoint-${expand}`) ?? false;
        computedStyle && this.computedStyle.set(computedStyle);
      }
    }
  });

  readonly breakpoint = computed(() => {
    const expand = this.expand();
    if (typeof expand === 'string') {
      return this.computedStyle();
    }
    return false;
  });

  #observer!: Subscription;

  ngAfterContentInit(): void {
    const breakpoint = this.breakpoint();
    if (breakpoint) {
      const onBreakpoint = `(min-width: ${breakpoint})`;
      this.#observer = this.#breakpointObserver
        .observe([onBreakpoint])
        .pipe()
        .subscribe((result) => {
          const collapse = this.collapse();
          if (collapse) {
            const animate = collapse.animate();
            collapse.animate.set(false);
            collapse.toggle(false);
            setTimeout(() => {
              collapse.toggle(result.matches);
              setTimeout(() => {
                collapse.animate.set(animate);
              });
            });
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.#observer?.unsubscribe();
  }
}
