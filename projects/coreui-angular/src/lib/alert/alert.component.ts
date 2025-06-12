import {
  booleanAttribute,
  Component,
  computed,
  contentChildren,
  input,
  linkedSignal,
  output,
  signal,
  TemplateRef
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';

import { Colors } from '../coreui.types';
import { TemplateIdDirective } from '../shared';
import { ButtonCloseDirective } from '../button';

type AnimateType = 'hide' | 'show';

@Component({
  selector: 'c-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  exportAs: 'cAlert',
  imports: [NgTemplateOutlet, ButtonCloseDirective],
  animations: [
    trigger('fadeInOut', [
      state('show', style({ opacity: 1, height: '*', padding: '*', border: '*', margin: '*' })),
      state('hide', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
      state('void', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
      transition('show => hide', [animate('.3s ease-out')]),
      transition('hide => show', [animate('.3s ease-in')]),
      transition('show => void', [animate('.3s ease-out')]),
      transition('void => show', [animate('.3s ease-in')])
    ])
  ],
  host: {
    '[@.disabled]': '!fade()',
    '[@fadeInOut]': 'animateType',
    '[attr.role]': 'role()',
    '[class]': 'hostClasses()',
    '(@fadeInOut.start)': 'onAnimationStart($event)',
    '(@fadeInOut.done)': 'onAnimationDone($event)'
  }
})
export class AlertComponent {
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   * @return Colors
   * @default 'primary'
   */
  readonly color = input<Colors>('primary');

  /**
   * Default role for alert. [docs]
   * @return string
   * @default 'alert'
   */
  readonly role = input('alert');

  /**
   * Set the alert variant to a solid.
   * @return string
   */
  readonly variant = input<'solid'>();

  /**
   * Optionally adds a close button to alert and allow it to self dismiss.
   * @return boolean
   * @default false
   */
  readonly dismissibleInput = input(false, { transform: booleanAttribute, alias: 'dismissible' });

  readonly #dismissible = linkedSignal({
    source: this.dismissibleInput,
    computation: (value) => {
      return value;
    }
  });

  set dismissible(value: boolean) {
    this.#dismissible.set(value);
  }

  get dismissible() {
    return this.#dismissible();
  }

  /**
   * Adds animation for dismissible alert.
   * @return boolean
   */
  readonly fade = input(false, { transform: booleanAttribute });

  /**
   * Toggle the visibility of alert component.
   * @return boolean
   */
  readonly visibleInput = input(true, { transform: booleanAttribute, alias: 'visible' });

  readonly #visible = linkedSignal({
    source: this.visibleInput,
    computation: (value) => {
      return value;
    }
  });

  set visible(value: boolean) {
    if (this.#visible() !== value) {
      this.#visible.set(value);
      this.visibleChange?.emit(value);
    }
  }

  get visible() {
    return this.#visible();
  }

  readonly hide = signal<boolean>(false);

  /**
   * Event triggered on the alert dismiss.
   */
  readonly visibleChange = output<boolean>();

  readonly contentTemplates = contentChildren(TemplateIdDirective, { descendants: true });

  readonly templates = computed(() => {
    return this.contentTemplates().reduce(
      (acc, child) => {
        acc[child.id] = child.templateRef;
        return acc;
      },
      {} as Record<string, TemplateRef<any>>
    );
  });

  get animateType(): AnimateType {
    return this.visible ? 'show' : 'hide';
  }

  readonly hostClasses = computed(() => {
    const color = this.color();
    const variant = this.variant();
    return {
      alert: true,
      'alert-dismissible': this.dismissible,
      fade: this.fade(),
      show: !this.hide(),
      [`alert-${color}`]: !!color && variant !== 'solid',
      [`bg-${color}`]: !!color && variant === 'solid',
      'text-white': !!color && variant === 'solid'
    } as Record<string, boolean>;
  });

  onAnimationStart($event: AnimationEvent): void {
    this.onAnimationEvent($event);
  }

  onAnimationDone($event: AnimationEvent): void {
    this.onAnimationEvent($event);
  }

  onAnimationEvent(event: AnimationEvent): void {
    this.hide.set(event.phaseName === 'start' && event.toState === 'show');
    if (event.phaseName === 'done') {
      this.hide.set(event.toState === 'hide' || event.toState === 'void');
      if (event.toState === 'show') {
        this.hide.set(false);
      }
    }
  }
}
