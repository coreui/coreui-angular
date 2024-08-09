import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  inject,
  Input,
  numberAttribute,
  QueryList
} from '@angular/core';
import { IProgress } from './progress.type';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarDirective } from './progress-bar.directive';
import { ProgressStackedComponent } from './progress-stacked.component';

@Component({
  selector: 'c-progress',
  templateUrl: './progress.component.html',
  imports: [ProgressBarComponent, NgTemplateOutlet],
  standalone: true,
  styleUrl: './progress.component.scss',
  hostDirectives: [
    {
      directive: ProgressBarDirective,
      inputs: ['animated', 'color', 'max', 'role', 'value', 'variant']
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'progress' }
})
export class ProgressComponent implements IProgress {
  protected readonly pbd: ProgressBarDirective | null = inject(ProgressBarDirective, { optional: true });
  readonly #stacked?: boolean = inject(ProgressStackedComponent, { optional: true })?.stacked;
  readonly #elementRef = inject(ElementRef);

  constructor() {
    if (this.pbd) {
      this.pbd.stacked = this.#stacked;
    }
  }

  @ContentChildren(ProgressBarComponent) contentProgressBars!: QueryList<ProgressBarComponent>;
  /**
   * Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly.
   * @type number
   */
  @Input({ transform: numberAttribute }) height: number = 0;

  /**
   * Displays thin progress.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) thin: boolean = false;

  /**
   * Change the default color to white.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) white: boolean = false;

  @HostBinding('class')
  get hostClasses(): Record<string, boolean> {
    return {
      progress: true,
      'progress-thin': this.thin,
      'progress-white': this.white
    };
  }

  @HostBinding('style.height') get hostStyle(): any {
    return !!this.height ? `${this.height}px` : (this.#elementRef?.nativeElement?.style?.height ?? undefined);
  }
}
