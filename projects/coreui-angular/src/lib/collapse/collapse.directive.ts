import {
  booleanAttribute,
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  OnDestroy,
  output,
  Renderer2,
  signal
} from '@angular/core';
import { AnimationBuilder, AnimationPlayer, useAnimation } from '@angular/animations';

import {
  collapseAnimation,
  collapseHorizontalAnimation,
  expandAnimation,
  expandHorizontalAnimation
} from './collapse.animations';

@Directive({
  selector: '[cCollapse]',
  exportAs: 'cCollapse',
  host: { '[class]': 'hostClasses()', '[style]': '{display: "none"}' }
})
export class CollapseDirective implements OnDestroy {
  readonly #hostElement = inject(ElementRef);
  readonly #renderer = inject(Renderer2);
  readonly #animationBuilder = inject(AnimationBuilder);
  #player: AnimationPlayer | undefined = undefined;

  /**
   * @ignore
   */
  readonly animateInput = input(true, { transform: booleanAttribute, alias: 'animate' });

  readonly animate = signal(true);

  readonly animateInputEffect = effect(() => {
    this.animate.set(this.animateInput());
  });

  /**
   * Set horizontal collapsing to transition the width instead of height.
   * @type boolean
   * @default false
   */
  readonly horizontal = input(false, { transform: booleanAttribute });

  /**
   * Toggle the visibility of collapsible element.
   * @type boolean
   * @default false
   */
  readonly visibleInput = input(false, { transform: booleanAttribute, alias: 'visible' });

  readonly visibleChange = output<boolean>();

  readonly visibleInputEffect = effect(() => {
    this.visible.set(this.visibleInput());
  });

  readonly visible = signal<boolean>(false);

  #init = false;

  readonly visibleEffect = effect(() => {
    const visible = this.visible();

    (this.#init || visible) && this.createPlayer(visible);
    this.#init = true;
  });

  /**
   * Add `navbar` prop for grouping and hiding navbar contents by a parent breakpoint.
   * @type boolean
   * @default false
   */
  readonly navbar = input(false, { transform: booleanAttribute });

  /**
   * @ignore
   */
  readonly duration = input('350ms');

  /**
   * @ignore
   */
  readonly transition = input('ease');

  /**
   * Event emitted on visibility change. [docs]
   * @type string
   */
  readonly collapseChange = output<string>();

  readonly hostClasses = computed(() => {
    return {
      'navbar-collapse': this.navbar(),
      'collapse-horizontal': this.horizontal()
    } as Record<string, boolean>;
  });

  ngOnDestroy(): void {
    this.destroyPlayer();
  }

  toggle(visible = !this.visible()): void {
    this.visible.set(visible);
  }

  destroyPlayer(): void {
    this.#player?.destroy();
    this.#player = undefined;
  }

  createPlayer(visible: boolean = this.visible()): void {
    if (this.#player?.hasStarted()) {
      this.destroyPlayer();
    }

    const host: HTMLElement = this.#hostElement.nativeElement;

    if (visible) {
      this.#renderer.removeStyle(host, 'display');
    }

    const duration = this.animate() ? this.duration() : '0ms';

    const expand = this.horizontal() ? expandHorizontalAnimation : expandAnimation;
    const collapse = this.horizontal() ? collapseHorizontalAnimation : collapseAnimation;

    const dimension = this.horizontal() ? 'width' : 'height';
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;

    const animationFactory = this.#animationBuilder?.build(
      useAnimation(visible ? expand : collapse, { params: { time: duration, easing: this.transition() } })
    );

    this.#player = animationFactory.create(host);

    !visible && host.offsetHeight && host.style[dimension] && host.scrollHeight;

    this.#renderer.setStyle(host, dimension, visible ? 0 : `${host.getBoundingClientRect()[dimension]}px`);

    this.#player.onStart(() => {
      this.setMaxSize();
      this.#renderer.removeClass(host, 'collapse');
      this.#renderer.addClass(host, 'collapsing');
      this.#renderer.removeClass(host, 'show');
      this.#renderer.setStyle(host, dimension, visible ? `${(host as any)[scrollSize]}px` : '');
      this.collapseChange?.emit(visible ? 'opening' : 'collapsing');
    });

    this.#player.onDone(() => {
      this.#renderer.removeClass(host, 'collapsing');
      this.#renderer.addClass(host, 'collapse');
      if (visible) {
        this.#renderer.addClass(host, 'show');
        this.#renderer.setStyle(host, dimension, '');
      } else {
        this.#renderer.removeClass(host, 'show');
      }
      this.collapseChange?.emit(visible ? 'open' : 'collapsed');
      this.destroyPlayer();
      this.visibleChange.emit(visible);
    });

    this.#player?.play();
  }

  setMaxSize() {
    const host = this.#hostElement.nativeElement;
    if (this.horizontal()) {
      host.scrollWidth > 0 && this.#renderer.setStyle(host, 'maxWidth', `${host.scrollWidth}px`);
      // } else {
      //   host.scrollHeight > 0 && this.#renderer.setStyle(host, 'maxHeight', `${host.scrollHeight}px`);
    }
  }
}
