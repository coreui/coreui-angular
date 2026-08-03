import {
  booleanAttribute,
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  linkedSignal,
  OnDestroy,
  output,
  Renderer2,
  untracked
} from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';

@Directive({
  selector: '[cCollapse]',
  exportAs: 'cCollapse',
  host: { '[class]': 'hostClasses()' }
})
export class CollapseDirective implements OnDestroy {
  static ngAcceptInputType_animate: BooleanInput;
  static ngAcceptInputType_horizontal: BooleanInput;
  static ngAcceptInputType_navbar: BooleanInput;
  static ngAcceptInputType_visible: BooleanInput;

  readonly #hostElement = inject(ElementRef);
  readonly #renderer = inject(Renderer2);
  #unlistenTransitionEnd?: () => void;
  #isFirstChange = true;

  /**
   * @ignore internal
   */
  readonly animateInput = input(true, { transform: booleanAttribute, alias: 'animate' });

  readonly animate = linkedSignal(this.animateInput);

  /**
   * Set horizontal collapsing to transition the width instead of height.
   * @return boolean
   * @default false
   */
  readonly horizontal = input(false, { transform: booleanAttribute });

  /**
   * Toggle the visibility of a collapsible element.
   * @return boolean
   * @default false
   */
  readonly visibleInput = input(false, { transform: booleanAttribute, alias: 'visible' });

  /**
   * Event emitted on visibility change. [docs]
   * @return boolean
   */
  readonly visibleChange = output<boolean>();

  readonly visible = linkedSignal(this.visibleInput);

  readonly #visibleEffect = effect(() => {
    const visible = this.visible();
    if (this.#isFirstChange || !untracked(() => this.animate())) {
      // no transition
      this.#isFirstChange = false;
      this.setInitialState(visible);
      return;
    }
    untracked(() => {
      this.runTransition(visible);
    });
  });

  /**
   * Add a `navbar` prop for grouping and hiding navbar contents by a parent breakpoint.
   * @return boolean
   * @default false
   */
  readonly navbar = input(false, { transform: booleanAttribute });

  /**
   * Event emitted on visibility change. [docs]
   * @return string
   */
  readonly collapseChange = output<string>();

  protected readonly hostClasses = computed(() => {
    return {
      'navbar-collapse': this.navbar(),
      'collapse-horizontal': this.horizontal()
    } as Record<string, boolean>;
  });

  ngOnDestroy(): void {
    this.clearPendingCallbacks();
  }

  toggle(visible = !this.visible()): void {
    this.visible.set(visible);
  }

  protected clearPendingCallbacks(): void {
    this.#unlistenTransitionEnd?.();
    this.#unlistenTransitionEnd = undefined;
  }

  protected setInitialState(visible: boolean): void {
    const host: HTMLElement = this.#hostElement.nativeElement;

    this.#renderer.addClass(host, 'collapse');
    this.#renderer.removeClass(host, 'collapsing');

    if (visible) {
      this.#renderer.addClass(host, 'show');
    } else {
      this.#renderer.removeClass(host, 'show');
    }
  }

  protected runTransition(visible: boolean): void {
    this.clearPendingCallbacks();

    const host: HTMLElement = this.#hostElement.nativeElement;
    const dimension = this.horizontal() ? 'width' : 'height';
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}` as 'scrollHeight' | 'scrollWidth';

    const animate = this.animate();

    if (visible) {
      this.setMaxSize();

      // Switch off `collapse`/`show` before we measure its scroll size below.
      this.#renderer.removeClass(host, 'collapse');
      this.#renderer.removeClass(host, 'show');
      this.#renderer.addClass(host, 'collapsing');

      this.collapseChange?.emit('opening');

      // Reading scrollHeight/scrollWidth forces a synchronous reflow, committing the 0-size
      // starting point before we set the target size below, so the browser animates the change.
      const targetSize = host[scrollSize];
      this.#renderer.setStyle(host, dimension, `${targetSize}px`);
    } else {
      // Lock in the current pixel size first so the browser has a committed starting point,
      // then switch to the collapsing state and clear it so the size can animate down to 0.
      const startSize = host.getBoundingClientRect()[dimension];
      this.#renderer.setStyle(host, dimension, `${startSize}px`);
      // Force a reflow so the browser registers the starting size before the next style change.
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      host.offsetHeight;

      this.#renderer.removeClass(host, 'collapse');
      this.#renderer.removeClass(host, 'show');
      this.#renderer.addClass(host, 'collapsing');

      this.collapseChange?.emit('collapsing');

      // Now that the starting size is committed, set the target size (0) so the browser
      // animates the transition down.
      this.#renderer.setStyle(host, dimension, '0px');
    }

    const finish = () => this.finishTransition(visible, host, dimension);

    if (animate) {
      this.#unlistenTransitionEnd = this.#renderer.listen(host, 'transitionend', (event: TransitionEvent) => {
        // Ignore bubbled transitionend events from descendant elements.
        if (event.target === host && event.propertyName === dimension) {
          finish();
        }
      });
    } else {
      finish();
    }
  }

  protected finishTransition(visible: boolean, host: HTMLElement, dimension: string): void {
    this.clearPendingCallbacks();

    this.#renderer.removeClass(host, 'collapsing');
    this.#renderer.addClass(host, 'collapse');
    if (visible) {
      this.#renderer.addClass(host, 'show');
    } else {
      this.#renderer.removeClass(host, 'show');
    }
    this.#renderer.removeStyle(host, 'transition');
    this.#renderer.removeStyle(host, dimension);

    this.collapseChange?.emit(visible ? 'open' : 'collapsed');
    this.visibleChange?.emit(visible);
  }

  protected setMaxSize() {
    const host = this.#hostElement.nativeElement;
    if (this.horizontal()) {
      host.scrollWidth > 0 && this.#renderer.setStyle(host, 'maxWidth', `${host.scrollWidth}px`);
      // } else {
      //   host.scrollHeight > 0 && this.#renderer.setStyle(host, 'maxHeight', `${host.scrollHeight}px`);
    }
  }
}
