import {
  afterNextRender,
  afterRenderEffect,
  ApplicationRef,
  booleanAttribute,
  computed,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  Renderer2
} from '@angular/core';
import { Breakpoints, Colors } from '../coreui.types';

@Directive({
  selector: 'table[cTable]',
  exportAs: 'cTable',
  host: {
    class: 'table',
    '[class]': 'hostClasses()'
  }
})
export class TableDirective implements OnDestroy {
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);
  readonly #appRef = inject(ApplicationRef);

  #wrapper: HTMLDivElement | undefined;

  /**
   * Set the vertical alignment.
   * @returns 'bottom' | 'middle' | 'top'
   */
  readonly align = input<'bottom' | 'middle' | 'top'>();

  /**
   * Sets the border color of the component to one of CoreUI’s themed colors.
   * @returns Colors
   */
  readonly borderColor = input<Colors>();

  /**
   * Add borders on all sides of the table and cells.
   * @returns boolean
   */
  readonly bordered = input(false, { transform: booleanAttribute });

  /**
   * Remove borders on all sides of the table and cells.
   * @returns boolean
   */
  readonly borderless = input(false, { transform: booleanAttribute });

  /**
   * Put the `<caption>` on the top of the table.
   * @returns 'top'
   * @values 'top'
   */
  readonly caption = input<'top'>();

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @returns Colors
   */
  readonly color = input<Colors>();

  /**
   * Enable a hover state on table rows within table body.
   * @returns boolean
   */
  readonly hover = input(false, { transform: booleanAttribute });

  /**
   * Make table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to.
   * @returns boolean | Omit<Breakpoints, 'xs'>
   * @values true | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
   */
  readonly responsive = input(undefined, {
    transform: (value: boolean | Omit<Breakpoints, 'xs'> | undefined) =>
      value === '' || value === 'true' || value === 'false' ? booleanAttribute(value) : value
  });

  /**
   * Make table more compact by cutting all cell `padding` in half.
   * @returns boolean
   */
  readonly small = input(false, { transform: booleanAttribute });

  /**
   * Add zebra-striping to any table row within the table body.
   * @returns boolean
   */
  readonly striped = input(false, { transform: booleanAttribute });

  /**
   * Add zebra-striping to any table column.
   * @returns boolean
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

  readonly #responsiveWrapperEffect = afterRenderEffect({
    // this fixes RuntimeError: NG0500: During hydration Angular expected <abc> but found <xyz>.
    // Find more at https://angular.dev/errors/NG0500
    write: () => {
      const responsive = this.responsive();
      const nativeElement: HTMLElement = this.#hostElement.nativeElement;
      if (!!responsive) {
        const wrapper: HTMLDivElement = (this.#wrapper ??= this.#renderer.createElement('div'));
        const className = responsive === true ? 'table-responsive' : `table-responsive-${responsive}`;
        this.#renderer.setAttribute(wrapper, 'class', className);
        if (nativeElement.parentNode !== wrapper) {
          const parentNode = this.#renderer.parentNode(nativeElement);
          this.#renderer.insertBefore(parentNode, wrapper, nativeElement);
          this.#renderer.appendChild(wrapper, nativeElement);
        }
      } else if (this.#wrapper && nativeElement.parentNode === this.#wrapper) {
        const parentNode = this.#renderer.parentNode(this.#wrapper);
        this.#renderer.insertBefore(parentNode, nativeElement, this.#wrapper);
        this.#renderer.removeChild(parentNode, this.#wrapper, false, true);
      }
    }
  });

  ngOnDestroy(): void {
    const wrapper = this.#wrapper;
    if (!wrapper || this.#appRef.injector.destroyed) {
      return;
    }
    const host: HTMLElement = this.#hostElement.nativeElement;
    afterNextRender(
      {
        write: () => {
          if (host.parentNode !== wrapper) {
            this.#renderer.removeChild(this.#renderer.parentNode(wrapper), wrapper, false, true);
          }
        }
      },
      { injector: this.#appRef.injector }
    );
  }
}
