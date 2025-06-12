import { AnimationBuilder, AnimationPlayer, useAnimation } from '@angular/animations';

import {
  afterNextRender,
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
  signal
} from '@angular/core';

import {
  collapseAnimation,
  collapseHorizontalAnimation,
  expandAnimation,
  expandHorizontalAnimation
} from './collapse.animations';

@Directive({
  selector: '[cCollapse]',
  exportAs: 'cCollapse',
  host: { '[class]': 'hostClasses()', '[style]': '{ display: "none" }' }
})
export class CollapseDirective implements OnDestroy {
  readonly #animationBuilder = inject(AnimationBuilder);
  readonly #hostElement = inject(ElementRef);
  readonly #renderer = inject(Renderer2);
  #player: AnimationPlayer | undefined = undefined;

  constructor() {
    afterNextRender({
      read: () => {
        this.#initialized.set(true);
      }
    });
  }

  /**
   * @ignore
   */
  readonly animateInput = input(true, { transform: booleanAttribute, alias: 'animate' });

  readonly animate = linkedSignal({
    source: this.animateInput,
    computation: (value: boolean) => value
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

  readonly visible = linkedSignal({ source: this.visibleInput, computation: (value: boolean) => value });

  readonly #initialized = signal(false);

  readonly #visibleEffect = effect(() => {
    const visible = this.visible();
    if (this.#initialized()) {
      this.createPlayer(visible);
    }
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
      if (this.#player) {
        this.collapseChange?.emit(visible ? 'opening' : 'collapsing');
      }
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
      if (this.#player) {
        this.collapseChange?.emit(visible ? 'open' : 'collapsed');
        this.visibleChange?.emit(visible);
      }
      this.destroyPlayer();
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
