import {
  booleanAttribute,
  Component,
  ElementRef,
  HostBinding,
  Input,
  numberAttribute,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { Colors } from '../coreui.types';

@Component({
  selector: 'c-progress-bar',
  template: '<ng-content></ng-content>',
  standalone: true
})
export class ProgressBarComponent implements OnInit, OnChanges {

  /**
   * Use to animate the stripes right to left via CSS3 animations.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) animated: string | boolean = false;

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
   */
  @Input() color?: Colors;
  // TODO: check if this is necessary.
  @Input({ transform: numberAttribute }) precision: string | number = 0;
  /**
   * The percent to progress the ProgressBar.
   * @type number
   */
  @Input({ transform: numberAttribute }) value: string | number = 0;

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
    this.state.percent = +((<number>this.value / (this.max - this.min)) * 100).toFixed(<number>this.precision);
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
