import { Component, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Colors } from '../coreui.types';
import { BooleanInput, coerceBooleanProperty, coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';

@Component({
  selector: 'c-progress-bar',
  template: '<ng-content></ng-content>'
})
export class ProgressBarComponent implements OnInit, OnChanges {

  static ngAcceptInputType_animated: BooleanInput;
  static ngAcceptInputType_value: NumberInput;

  /**
   * Use to animate the stripes right to left via CSS3 animations.
   * @type boolean
   */
  @Input()
  set animated(value: boolean) {
    this._animated = coerceBooleanProperty(value);

  }
  get animated() {
    return this._animated;
  }
  private _animated = false;

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
   */
  @Input() color?: Colors;
  // TODO: check if this is necessary.
  @Input() precision = 0;
  /**
   * The percent to progress the ProgressBar.
   */
  @Input()
  set value(value: number) {
    this._value = coerceNumberProperty(value);
  };
  get value() {
    return this._value;
  }
  private _value = 0;
  /**
   * Set the progress bar variant to optional striped.
   * @values 'striped'
   */
  @Input() variant?: 'striped';

  /**
   * Set default html role attribute.
   * @type string
   */
  @Input()
  @HostBinding('attr.role') role = 'progressbar';
  private state = {
    percent: 0,
    min: 0,
    max: 100
  };

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) { }

  get min(): number {
    return this.state.min;
  }

  @Input()
  set min(value: number) {
    this.state.min = isNaN(value) ? 0 : value;
  }

  get max(): number {
    return this.state.max;
  }

  @Input()
  set max(value: number) {
    this.state.max = isNaN(value) || value <= 0 || value === this.min ? 100 : value;
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'progress-bar': true,
      'progress-bar-animated': this.animated,
      [`progress-bar-${this.variant}`]: !!this.variant,
      [`bg-${this.color}`]: !!this.color
    };
  }

  ngOnInit(): void {
    this.setValues();
  }

  setPercent(): void {
    this.state.percent = +((this.value / (this.max - this.min)) * 100).toFixed(this.precision);
  }

  setValues(): void {
    this.setPercent();
    const host: HTMLElement = this.hostElement.nativeElement;
    this.renderer.setStyle(host, 'width', `${this.state.percent}%`);
    this.renderer.setAttribute(host, 'aria-valuenow', String(this.value));
    this.renderer.setAttribute(host, 'aria-valuemin', String(this.min));
    this.renderer.setAttribute(host, 'aria-valuemax', String(this.max));
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.setValues();
  }
}
