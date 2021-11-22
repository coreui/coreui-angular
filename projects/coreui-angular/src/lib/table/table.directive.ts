import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { Breakpoints, Colors } from '../coreui.types';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[cTable]'
})
export class TableDirective implements OnInit {
  static ngAcceptInputType_bordered: BooleanInput;
  static ngAcceptInputType_borderless: BooleanInput;
  static ngAcceptInputType_hover: BooleanInput;
  static ngAcceptInputType_small: BooleanInput;
  static ngAcceptInputType_striped: BooleanInput;

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
  @Input()
  set bordered(value: boolean) {
    this._bordered = coerceBooleanProperty(value);
  };
  get bordered() {
    return this._bordered;
  }
  private _bordered = false;
  /**
   * Remove borders on all sides of the table and cells.
   * @type boolean
   */
  @Input()
  set borderless(value: boolean) {
    this._borderless = coerceBooleanProperty(value);
  };
  get borderless() {
    return this._borderless;
  }
  private _borderless = false;
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
  @Input()
  set hover(value: boolean) {
    this._hover = coerceBooleanProperty(value);
  };
  get hover() {
    return this._hover;
  }
  private _hover = false;
  /**
   * Make table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to.
   * @type: {boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}
   */
  @Input() responsive?: boolean | Omit<Breakpoints, 'xs'>;
  /**
   * Make table more compact by cutting all cell `padding` in half.
   * @type boolean
   */
  @Input()
  set small(value: boolean) {
    this._small = coerceBooleanProperty(value);
  };
  get small() {
    return this._small;
  }
  private _small = false;
  /**
   * Add zebra-striping to any table row within the table body`.
   * @type boolean
   */
  @Input()
  set striped(value: boolean) {
    this._striped = coerceBooleanProperty(value);
  };
  get striped() {
    return this._striped;
  }
  private _striped = false;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) { }

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
      'table-striped': this.striped
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
