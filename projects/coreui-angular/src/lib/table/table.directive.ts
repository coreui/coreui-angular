import { booleanAttribute, Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { Breakpoints, Colors } from '../coreui.types';
import { ITable } from './table.type';

@Directive({
  selector: 'table[cTable]',
  standalone: true,
  host: { class: 'table' }
})
export class TableDirective implements ITable, OnInit {
  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {}

  /**
   * Set the vertical alignment.
   * @type string
   * @values 'bottom' | 'middle' | 'top'
   */
  @Input() align?: 'bottom' | 'middle' | 'top';

  /**
   * Sets the border color of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() borderColor?: Colors;

  /**
   * Add borders on all sides of the table and cells.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) bordered: string | boolean = false;

  /**
   * Remove borders on all sides of the table and cells.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) borderless: string | boolean = false;

  /**
   * Put the `<caption>` on the top of the table.
   * @values 'top'
   */
  @Input() caption?: 'top';

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @type Colors
   */
  @Input() color?: Colors;

  /**
   * Enable a hover state on table rows within table body.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) hover: string | boolean = false;

  /**
   * Make table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to.
   * @type: {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
   */
  @Input() responsive?: boolean | Omit<Breakpoints, 'xs'>;

  /**
   * Make table more compact by cutting all cell `padding` in half.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) small: string | boolean = false;

  /**
   * Add zebra-striping to any table row within the table body.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) striped: string | boolean = false;

  /**
   * Add zebra-striping to any table column.
   * @type boolean
   * @since 4.2.4
   */
  @Input({ transform: booleanAttribute }) stripedColumns: string | boolean = false;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      table: true,
      [`align-${this.align}`]: !!this.align,
      [`caption-${this.caption}`]: !!this.caption,
      [`border-${this.borderColor}`]: !!this.borderColor,
      'table-bordered': this.bordered,
      'table-borderless': this.borderless,
      [`table-${this.color}`]: !!this.color,
      'table-hover': this.hover,
      'table-sm': this.small,
      'table-striped': this.striped,
      'table-striped-columns': this.stripedColumns
    };
  }

  ngOnInit(): void {
    this.setResponsiveWrapper();
  }

  // todo
  setResponsiveWrapper(): void {
    if (!!this.responsive) {
      const nativeElement: HTMLElement = this.hostElement.nativeElement;
      const wrapper = this.renderer.createElement('div');
      const className = this.responsive === true ? 'table-responsive' : `table-responsive-${this.responsive}`;
      this.renderer.addClass(wrapper, className);
      const parentNode = this.renderer.parentNode(nativeElement);
      this.renderer.appendChild(parentNode, wrapper);
      this.renderer.insertBefore(parentNode, wrapper, nativeElement);
      this.renderer.appendChild(wrapper, nativeElement);
    }
  }
}
