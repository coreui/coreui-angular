import { booleanAttribute, computed, Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';
import { Breakpoints, Colors } from '../coreui.types';

@Directive({
  selector: 'table[cTable]',
  exportAs: 'cTable',
  host: {
    class: 'table',
    '[class]': 'hostClasses()'
  }
})
export class TableDirective {
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);

  /**
   * Set the vertical alignment.
   * @return string
   * @values 'bottom' | 'middle' | 'top'
   */
  readonly align = input<'bottom' | 'middle' | 'top'>();

  /**
   * Sets the border color of the component to one of CoreUI’s themed colors.
   * @return Colors
   */
  readonly borderColor = input<Colors>();

  /**
   * Add borders on all sides of the table and cells.
   * @return boolean
   */
  readonly bordered = input(false, { transform: booleanAttribute });

  /**
   * Remove borders on all sides of the table and cells.
   * @return boolean
   */
  readonly borderless = input(false, { transform: booleanAttribute });

  /**
   * Put the `<caption>` on the top of the table.
   * @return 'top'
   * @values 'top'
   */
  readonly caption = input<'top'>();

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @return Colors
   */
  readonly color = input<Colors>();

  /**
   * Enable a hover state on table rows within table body.
   * @return boolean
   */
  readonly hover = input(false, { transform: booleanAttribute });

  /**
   * Make table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to.
   * @values: {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
   */
  readonly responsive = input<boolean | Omit<Breakpoints, 'xs'>>();

  /**
   * Make table more compact by cutting all cell `padding` in half.
   * @return boolean
   */
  readonly small = input(false, { transform: booleanAttribute });

  /**
   * Add zebra-striping to any table row within the table body.
   * @return boolean
   */
  readonly striped = input(false, { transform: booleanAttribute });

  /**
   * Add zebra-striping to any table column.
   * @return boolean
   * @since 4.2.4
   */
  readonly stripedColumns = input(false, { transform: booleanAttribute });

  readonly hostClasses = computed(() => {
    const align = this.align();
    const caption = this.caption();
    const borderColor = this.borderColor();
    const bordered = this.bordered();
    const borderless = this.borderless();
    const color = this.color();
    const hover = this.hover();
    const small = this.small();
    const striped = this.striped();
    const stripedColumns = this.stripedColumns();

    return {
      table: true,
      [`align-${align}`]: !!align,
      [`caption-${caption}`]: !!caption,
      [`border-${borderColor}`]: !!borderColor,
      'table-bordered': bordered,
      'table-borderless': borderless,
      [`table-${color}`]: !!color,
      'table-hover': hover,
      'table-sm': small,
      'table-striped': striped,
      'table-striped-columns': stripedColumns
    } as Record<string, boolean>;
  });

  readonly #responsiveWrapperEffect = effect(() => {
    const responsive = this.responsive();
    if (!!responsive) {
      const nativeElement: HTMLElement = this.#hostElement.nativeElement;
      const wrapper = this.#renderer.createElement('div');
      const className = responsive === true ? 'table-responsive' : `table-responsive-${responsive}`;
      this.#renderer.addClass(wrapper, className);
      const parentNode = this.#renderer.parentNode(nativeElement);
      this.#renderer.appendChild(parentNode, wrapper);
      this.#renderer.insertBefore(parentNode, wrapper, nativeElement);
      this.#renderer.appendChild(wrapper, nativeElement);
    }
  });
}
