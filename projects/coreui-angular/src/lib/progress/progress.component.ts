import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  contentChildren,
  ElementRef,
  inject,
  input,
  numberAttribute
} from '@angular/core';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarDirective } from './progress-bar.directive';
import { ProgressStackedComponent } from './progress-stacked.component';
import { ProgressService } from './progress.service';

@Component({
  selector: 'c-progress',
  exportAs: 'cProgress',
  templateUrl: './progress.component.html',
  imports: [ProgressBarComponent, NgTemplateOutlet],
  styleUrl: './progress.component.scss',
  hostDirectives: [
    {
      directive: ProgressBarDirective,
      inputs: ['animated', 'color', 'max', 'role', 'value', 'variant']
    }
  ],
  host: {
    class: 'progress',
    '[class]': 'hostClasses()',
    '[style.height]': 'hostStyle()'
  },
  providers: [ProgressService]
})
export class ProgressComponent {
  readonly #hostElement = inject(ElementRef);
  protected readonly progressBarDirective: ProgressBarDirective | null = inject(ProgressBarDirective, {
    optional: true
  });
  readonly #stacked: boolean = inject(ProgressStackedComponent, { optional: true })?.stacked() ?? false;
  readonly #progressService = inject(ProgressService);

  constructor() {
    this.#progressService.stacked.set(this.#stacked);
  }

  readonly stacked = this.#progressService.stacked;
  readonly percent = this.#progressService.percent;
  readonly barValue = this.#progressService.value;

  readonly contentProgressBars = contentChildren(ProgressBarComponent);

  /**
   * Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly.
   * @return number
   */
  readonly height = input(0, { transform: numberAttribute });

  /**
   * Displays thin progress.
   * @return boolean
   */
  readonly thin = input(false, { transform: booleanAttribute });

  /**
   * Change the default color to white.
   * @return boolean
   */
  readonly white = input(false, { transform: booleanAttribute });

  readonly hostClasses = computed(() => {
    return {
      progress: true,
      'progress-thin': this.thin(),
      'progress-white': this.white()
    } as Record<string, boolean>;
  });

  readonly hostStyle = computed(() => {
    const height = this.height();
    return !!height ? `${height}px` : (this.#hostElement?.nativeElement?.style?.height ?? undefined);
  });
}
