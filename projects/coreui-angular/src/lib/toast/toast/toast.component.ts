import {
  booleanAttribute,
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  numberAttribute,
  OnDestroy,
  OnInit,
  output,
  Renderer2
} from '@angular/core';

import { animate, state, style, transition, trigger } from '@angular/animations';

import { Colors } from '../../coreui.types';
import { ToasterService } from '../toaster/toaster.service';
import { TToasterPlacement } from '../toaster/toaster.component';

type AnimateType = 'hide' | 'show';

@Component({
  selector: 'c-toast',
  template: '<ng-content />',
  styleUrls: ['./toast.component.scss'],
  exportAs: 'cToast',
  animations: [
    trigger('fadeInOut', [
      state('show', style({ opacity: 1, height: '*', padding: '*', border: '*', margin: '*' })),
      state('hide', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
      state('void', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
      transition('show => hide', [animate('{{ time }} {{ easing }}')], {
        params: { time: '300ms', easing: 'ease-out' }
      }),
      transition('hide => show', [animate('{{ time }} {{ easing }}')], {
        params: { time: '300ms', easing: 'ease-in' }
      }),
      transition('show => void', [animate('{{ time }} {{ easing }}')], {
        params: { time: '300ms', easing: 'ease-out' }
      }),
      transition('void => show', [animate('{{ time }} {{ easing }}')], {
        params: { time: '300ms', easing: 'ease-in' }
      })
    ])
  ],
  host: {
    class: 'toast show',
    '[class]': 'hostClasses()',
    '(mouseover)': 'clearTimer()',
    '(mouseout)': 'setTimer()',
    '[@fadeInOut]': 'animateType',
    '[@.disabled]': 'animationDisabled()'
  }
})
export class ToastComponent implements OnInit, OnDestroy {
  readonly changeDetectorRef = inject(ChangeDetectorRef);
  readonly hostElement = inject(ElementRef);
  readonly renderer = inject(Renderer2);
  readonly toasterService = inject(ToasterService);

  readonly dynamic = input<boolean>();
  readonly placement = input<TToasterPlacement>();

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

  readonly #visibleInputEffect = effect(() => {
    this.visible = this.visibleInput();
  });

  set visible(value: boolean) {
    const newValue = value;
    if (this.#visible !== newValue) {
      this.#visible = newValue;
      newValue ? this.setTimer() : this.clearTimer();
      this.visibleChange.emit(newValue);
      this.changeDetectorRef.markForCheck();
    }
  }

  get visible() {
    return this.#visible;
  }

  #visible = false;

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
    this.timer.emit(this._clock);
    this.changeDetectorRef.markForCheck();
  }

  readonly animationDisabled = computed(() => {
    return !this.fade();
  });

  get animateType(): AnimateType {
    return this.visible ? 'show' : 'hide';
  }

  readonly hostClasses = computed(() => {
    const color = this.color();
    return {
      toast: true,
      show: true,
      [`bg-${color}`]: !!color,
      'border-0': !!color
    } as Record<string, boolean>;
  });

  ngOnInit(): void {
    if (this.visible) {
      this.toasterService.setState({
        toast: this,
        show: this.visible,
        placement: this.placement()
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
      placement: this.placement()
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
}
