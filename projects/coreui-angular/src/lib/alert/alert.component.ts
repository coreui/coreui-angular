import {
  afterRenderEffect,
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
  output,
  PLATFORM_ID,
  TemplateRef
} from '@angular/core';
import { isPlatformServer, NgTemplateOutlet } from '@angular/common';

import { Colors } from '../coreui.types';
import { TemplateIdDirective } from '../shared';
import { ButtonCloseDirective } from '../button';
import { afterTransitions } from '../shared/transition.utils';

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
    '[hidden]': 'hide()',
    '[inert]': 'hide()'
  }
})
export class AlertComponent {
  readonly #hostElement = inject(ElementRef);
  readonly #isServer = isPlatformServer(inject(PLATFORM_ID));
  readonly #renderedShown: boolean = this.#hostElement.nativeElement.classList.contains('show');

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
   * Fades the alert in when shown and out when dismissed.
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

  protected readonly hide = linkedSignal<{ fade: boolean; visible: boolean }, boolean>({
    source: () => ({ fade: this.fade(), visible: this.visible() }),
    computation: ({ fade, visible }, previous) => !visible && (!fade || this.#isServer || (previous?.value ?? true))
  });

  protected readonly show = linkedSignal<{ fade: boolean; hide: boolean; visible: boolean }, boolean>({
    source: () => ({ fade: this.fade(), hide: this.hide(), visible: this.visible() }),
    computation: ({ fade, visible }, previous) =>
      visible && !(fade && !this.#isServer && (previous ? previous.source.hide : !this.#renderedShown))
  });

  readonly #showEffect = afterRenderEffect({
    earlyRead: () => {
      if (this.show() || !this.visible()) {
        return false;
      }
      void this.#hostElement.nativeElement.offsetHeight;
      return true;
    },
    write: (entering) => {
      if (entering()) {
        this.show.set(true);
      }
    }
  });

  readonly #visibleEffect = afterRenderEffect({
    read: (onCleanup) => {
      if (this.visible() || this.hide()) {
        return;
      }
      let cancelled = false;
      onCleanup(() => (cancelled = true));
      afterTransitions(this.#hostElement.nativeElement).then(() => {
        if (!cancelled) {
          this.#finishTransition();
        }
      });
    }
  });

  #emittedHide?: boolean;

  readonly #hideEffect = effect(() => {
    const hide = this.hide();
    if (this.#emittedHide !== undefined && hide !== this.#emittedHide) {
      this.visibleChange.emit(!hide);
    }
    this.#emittedHide = hide;
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

    return {
      alert: true,
      'alert-dismissible': this.dismissible(),
      fade: this.fade(),
      show: this.show(),
      [`alert-${color}`]: !!color && variant !== 'solid',
      [`bg-${color}`]: !!color && variant === 'solid',
      'text-white': !!color && variant === 'solid'
    } as Record<string, boolean>;
  });

  #finishTransition(): void {
    this.hide.set(!this.visible());
  }

  #leavingInProgress = false;

  protected handleLeaving($event: AnimationCallbackEvent) {
    if (this.#leavingInProgress) return;
    this.#leavingInProgress = true;

    const host = this.#hostElement.nativeElement;
    host.classList.remove('show');
    afterTransitions(host).then(() => $event.animationComplete());
  }
}
