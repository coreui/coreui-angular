import {
  AnimationCallbackEvent,
  booleanAttribute,
  Component,
  computed,
  contentChildren,
  effect,
  ElementRef,
  inject,
  input,
  linkedSignal,
  MAX_ANIMATION_TIMEOUT,
  output,
  signal,
  TemplateRef
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { Colors } from '../coreui.types';
import { TemplateIdDirective } from '../shared';
import { ButtonCloseDirective } from '../button';

@Component({
  selector: 'c-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  exportAs: 'cAlert',
  imports: [NgTemplateOutlet, ButtonCloseDirective],
  host: {
    '[attr.role]': 'role()',
    '[class]': 'hostClasses()',
    '(animate.leave)': 'handleLeaving($event)',
    '(transitionend)': 'onTransitionEnd($event)',
    '(transitionstart)': 'onTransitionStart($event)',
    '[hidden]': 'hide()',
    '[inert]': 'hide()'
  },
  providers: [{ provide: MAX_ANIMATION_TIMEOUT, useValue: 300 }]
})
export class AlertComponent {
  readonly #hostElement = inject(ElementRef);
  readonly #maxAnimationTimeout = inject(MAX_ANIMATION_TIMEOUT);

  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @returns Colors
   * @default 'primary'
   */
  readonly color = input<Colors>('primary');

  /**
   * Default role for alert
   * @returns string
   * @default 'alert'
   */
  readonly role = input('alert');

  /**
   * Set the alert variant to a solid.
   * @returns 'solid'
   * @default undefined
   */
  readonly variant = input<'solid'>();

  /**
   * Optionally adds a close button to the alert and allow it to self-dismiss.
   * @returns boolean
   * @default false
   */
  readonly dismissible = input(false, { transform: booleanAttribute });

  /**
   * Adds animation for dismissible alert.
   * @returns boolean
   * @default false
   */
  readonly fade = input(false, { transform: booleanAttribute });

  /**
   * Toggle the visibility of the alert component.
   * @returns boolean
   * @default true
   */
  readonly visibleInput = input(true, { transform: booleanAttribute, alias: 'visible' });

  readonly visible = linkedSignal(this.visibleInput);

  /**
   * Event triggered on the alert visibility change.
   * @returns boolean
   */
  readonly visibleChange = output<boolean>();

  protected readonly hide = signal<boolean>(false);

  readonly #visibleEffect = effect(() => {
    const visible = this.visible();
    if (visible) {
      this.hide.set(false);
    }
  });

  readonly #hideEffect = effect(() => {
    const hide = this.hide();
    this.visibleChange.emit(!hide);
  });

  protected readonly contentTemplates = contentChildren(TemplateIdDirective, { descendants: true });

  protected readonly templates = computed(() => {
    return this.contentTemplates().reduce(
      (acc, child) => {
        acc[child.id] = child.templateRef;
        return acc;
      },
      {} as Record<string, TemplateRef<any>>
    );
  });

  protected readonly hostClasses = computed(() => {
    const color = this.color();
    const variant = this.variant();
    const visible = this.visible();

    return {
      alert: true,
      'alert-dismissible': this.dismissible(),
      fade: this.fade(),
      show: visible,
      [`alert-${color}`]: !!color && variant !== 'solid',
      [`bg-${color}`]: !!color && variant === 'solid',
      'text-white': !!color && variant === 'solid'
    } as Record<string, boolean>;
  });

  protected onTransitionStart($event: TransitionEvent): void {
    if ($event.propertyName === 'opacity') {
      if (this.visible()) {
        this.hide.set(false);
      }
    }
  }

  protected onTransitionEnd($event: TransitionEvent): void {
    if ($event.propertyName === 'opacity') {
      this.hide.set(!this.visible());
    }
  }

  #leavingInProgress = false;

  protected handleLeaving($event: AnimationCallbackEvent) {
    if (this.#leavingInProgress) return;
    this.#leavingInProgress = true;

    this.#hostElement.nativeElement.classList.remove('show');
    setTimeout(() => {
      $event.animationComplete();
    }, this.#maxAnimationTimeout);
  }
}
