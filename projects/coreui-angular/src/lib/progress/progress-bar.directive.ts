import {
  booleanAttribute,
  computed,
  Directive,
  effect,
  EffectRef,
  ElementRef,
  inject,
  Input,
  numberAttribute,
  Renderer2,
  signal,
  WritableSignal
} from '@angular/core';
import { Colors } from '../coreui.types';
import { IProgressBar } from './progress.type';

@Directive({
  selector: '[cProgressBar]',
  standalone: true
})
export class ProgressBarDirective implements IProgressBar {
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);

  readonly #max = signal(100);
  readonly #min = 0;
  readonly #value: WritableSignal<number | undefined> = signal(undefined);
  readonly #width: WritableSignal<number | undefined> = signal(undefined);

  readonly percent = computed(() => {
    return +((((this.#value() ?? this.#width() ?? 0) - this.#min) / (this.#max() - this.#min)) * 100).toFixed(
      this.precision
    );
  });

  readonly #valuesEffect: EffectRef = effect(() => {
    const host: HTMLElement = this.#hostElement.nativeElement;
    if (this.#value() === undefined || this.#width()) {
      for (const name of ['aria-valuenow', 'aria-valuemax', 'aria-valuemin', 'role']) {
        this.#renderer.removeAttribute(host, name);
      }
    } else {
      this.#renderer.setAttribute(host, 'aria-valuenow', String(this.#value()));
      this.#renderer.setAttribute(host, 'aria-valuemin', String(this.#min));
      this.#renderer.setAttribute(host, 'aria-valuemax', String(this.#max()));
      this.#renderer.setAttribute(host, 'role', this.role);
    }
    const tagName = host.tagName;
    if (
      this.percent() >= 0 &&
      ((this.stacked && tagName === 'C-PROGRESS') || (!this.stacked && tagName !== 'C-PROGRESS'))
    ) {
      this.#renderer.setStyle(host, 'width', `${this.percent()}%`);
    } else {
      this.#renderer.removeStyle(host, 'width');
    }
  });

  /**
   * Use to animate the stripes right to left via CSS3 animations.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) animated?: boolean;

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
   */
  @Input() color?: Colors;

  // TODO: check if this is necessary.
  @Input({ transform: numberAttribute }) precision: number = 0;

  /**
   * The percent value the ProgressBar.
   * @type number
   * @default 0
   */
  @Input({ transform: numberAttribute })
  set value(value: number | undefined) {
    this.#value.set(value);
  }

  get value() {
    return this.#value();
  }

  @Input({ transform: numberAttribute })
  set width(value: number | undefined) {
    this.#width.set(value);
  }

  /**
   * Set the progress bar variant to optional striped.
   * @values 'striped'
   * @default undefined
   */
  @Input() variant?: 'striped';

  /**
   * The max value of the ProgressBar.
   * @type number
   * @default 100
   */
  @Input({ transform: numberAttribute })
  set max(max: number) {
    this.#max.set(isNaN(max) || max <= 0 ? 100 : max);
  }

  /**
   * Stacked ProgressBars.
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute }) stacked?: boolean = false;

  /**
   * Set default html role attribute.
   * @type string
   */
  @Input() role: string = 'progressbar';
}
