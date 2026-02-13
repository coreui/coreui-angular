import {
  AnimationCallbackEvent,
  booleanAttribute,
  ChangeDetectorRef,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  linkedSignal,
  numberAttribute,
  OnDestroy,
  OnInit,
  output,
  Renderer2,
  signal,
  ViewEncapsulation
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { skipWhile } from 'rxjs';

import { Colors } from '../../coreui.types';
import { ToasterService } from '../toaster/toaster.service';
import { TToasterPlacement } from '../toaster/toaster.component';
import { ToastContentComponent } from './toast-content.component';

@Component({
  selector: 'c-toast',
  template: `
    <c-toast-content>
      <ng-content />
    </c-toast-content>
  `,
  styleUrls: ['./toast.component.scss'],
  exportAs: 'cToast',
  host: {
    class: 'toast',
    '[class]': 'hostClasses()',
    '(animate.enter)': 'handleEnter($event)',
    '(animate.leave)': 'handleLeave($event)',
    '(mouseover)': 'clearTimer()',
    '(mouseout)': 'setTimer()'
  },
  encapsulation: ViewEncapsulation.None,
  imports: [ToastContentComponent],
})
export class ToastComponent implements OnInit, OnDestroy {
  readonly destroyRef = inject(DestroyRef);
  readonly changeDetectorRef = inject(ChangeDetectorRef);
  readonly hostElement = inject(ElementRef);
  readonly renderer = inject(Renderer2);
  readonly toasterService = inject(ToasterService);

  readonly dynamic = input<boolean>();
  readonly placementInput = input<TToasterPlacement>(undefined, { alias: 'placement' });

  get placement() {
    return this.placementInput();
  }

  /**
   * Auto hide the toast.
   * @return boolean
   */
  readonly autohide = input(true);

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @return Colors
   */
  readonly color = input<Colors>('');

  /**
   * Delay hiding the toast (ms).
   * @return number
   */
  readonly delay = input(5000, { transform: numberAttribute });

  /**
   * Apply fade transition to the toast.
   * @return boolean
   */
  readonly fade = input(true);

  /**
   * Toggle the visibility of component.
   * @return boolean
   */
  readonly visibleInput = input(false, { transform: booleanAttribute, alias: 'visible' });

  readonly #visible = linkedSignal(this.visibleInput);

  readonly #visibleEffect = effect(() => {
    const newValue = this.#visible();
    newValue ? this.setTimer() : this.clearTimer();
    this.visibleChange?.emit(newValue);
    this.changeDetectorRef.markForCheck();
  });

  set visible(value: boolean) {
    this.#visible.set(value);
  }

  get visible(): boolean {
    return this.#visible();
  }

  /**
   * @ignore
   */
  readonly index = input(0, { transform: numberAttribute });

  /**
   * Event emitted on visibility change. [docs]
   * @return <boolean>
   */
  readonly visibleChange = output<boolean>();

  /**
   * Event emitted on timer tick. [docs]
   * @return number
   */
  readonly timer = output<number>();

  private timerId: ReturnType<typeof setTimeout> | undefined;
  private clockId: ReturnType<typeof setInterval> | undefined;
  private clockTimerId: ReturnType<typeof setTimeout> | undefined;

  private _clock!: number;

  get clock(): number {
    return this._clock;
  }

  set clock(value) {
    this._clock = value;
    this.timer?.emit(this._clock);
    this.changeDetectorRef.markForCheck();
  }

  readonly hostClasses = computed(() => {
    const color = this.color();
    return {
      toast: true,
      show: this.#visible() && this.#rendered(),
      [`text-bg-${color}`]: !!color,
      // [`bg-${color}`]: !!color,
      'border-0': !!color,
      fade: this.fade()
    } as Record<string, boolean>;
  });

  ngOnInit(): void {
    if (this.visible) {
      this.toasterService.setState({
        toast: this,
        show: this.visible,
        placement: this.placement
      });
      this.clearTimer();
      this.setTimer();
    }
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  setTimer(): void {
    this.clearTimer();
    if (this.autohide() && this.visible) {
      this.timerId = this.delay() > 0 ? setTimeout(() => this.onClose(), this.delay()) : undefined;
      this.setClock();
    }
  }

  clearTimer(): void {
    this.clearClock();
    clearTimeout(this.timerId);
    this.timerId = undefined;
  }

  onClose(): void {
    this.clearTimer();
    this.toasterService.setState({
      toast: this,
      show: false,
      placement: this.placement
    });
  }

  setClock(): void {
    this.clearClock();
    this.clock = 0;
    this.clockId = setInterval(() => {
      this.clock += 1;
      this.changeDetectorRef.markForCheck();
    }, 1000);
    this.clockTimerId = setTimeout(() => {
      this.clearClock();
    }, this.delay());
  }

  clearClock(): void {
    clearTimeout(this.clockTimerId);
    clearInterval(this.clockId);
    this.clockId = undefined;
  }

  readonly #rendered = signal(false);

  protected handleEnter($event: AnimationCallbackEvent) {
    // Check if the component is inserted dynamically / conditionally - the class '.ng-star-inserted' is added to the host element.
    // If the class is present, we can set the visible state to true to trigger the animation.
    const inserted = this.hostElement.nativeElement.classList.contains('ng-star-inserted');
    if (inserted) {
      this.#visible.set(true);
    }
    setTimeout(() => {
      this.#rendered.set(true);
    });
  }
  protected handleLeave($event: AnimationCallbackEvent) {
    this.#visible.set(false);
    // component is destroyed already, remove the class manually
    this.renderer.removeClass(this.hostElement.nativeElement, 'show');
    // console.log('Leaving event:', { ...$event });
  }
}
