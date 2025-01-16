import {
  booleanAttribute,
  Directive,
  effect,
  EffectRef,
  ElementRef,
  inject,
  input,
  numberAttribute,
  Renderer2
} from '@angular/core';
import { Colors } from '../coreui.types';
import { ProgressService } from './progress.service';

@Directive({
  selector: '[cProgressBar]',
  exportAs: 'cProgressBar'
})
export class ProgressBarDirective {
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);
  readonly #progressService = inject(ProgressService);

  readonly #valuesEffect: EffectRef = effect(() => {
    const host: HTMLElement = this.#hostElement.nativeElement;
    const value = this.#progressService.value();
    const percent = this.#progressService.percent();
    const stacked = this.#progressService.stacked();
    if (value === undefined) {
      for (const name of ['aria-valuenow', 'aria-valuemax', 'aria-valuemin', 'role']) {
        this.#renderer.removeAttribute(host, name);
      }
    } else {
      const { min, max } = this.#progressService;
      this.#renderer.setAttribute(host, 'aria-valuenow', String(value));
      this.#renderer.setAttribute(host, 'aria-valuemin', String(min()));
      this.#renderer.setAttribute(host, 'aria-valuemax', String(max()));
      this.#renderer.setAttribute(host, 'role', this.role());
    }
    const tagName = host.tagName;
    if (percent >= 0 && ((stacked && tagName === 'C-PROGRESS') || (!stacked && tagName !== 'C-PROGRESS'))) {
      this.#renderer.setStyle(host, 'width', `${percent}%`);
    } else {
      this.#renderer.removeStyle(host, 'width');
    }
  });

  /**
   * Use to animate the stripes right to left via CSS3 animations.
   * @return boolean
   */
  readonly animated = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
   */
  readonly color = input<Colors>();

  readonly precision = input(0, { transform: numberAttribute });

  /**
   * The percent value the ProgressBar.
   * @return number
   * @default 0
   */
  readonly value = input(undefined, { transform: numberAttribute });

  /**
   * Set the progress bar variant to optional striped.
   * @values 'striped'
   * @default undefined
   */
  readonly variant = input<'striped'>();

  /**
   * The max value of the ProgressBar.
   * @return number
   * @default 100
   */
  readonly max = input(100, { transform: numberAttribute });

  /**
   * Set default html role attribute.
   * @return string
   */
  readonly role = input<string>('progressbar');

  readonly #serviceEffect = effect(() => {
    this.#progressService.precision.set(this.precision());
    const max = this.max();
    this.#progressService.max.set(isNaN(max) || max <= 0 ? 100 : max);
    const value = this.value();
    this.#progressService.value.set(value && !isNaN(value) ? value : undefined);
  });
}
