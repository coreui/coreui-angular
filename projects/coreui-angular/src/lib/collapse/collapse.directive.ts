import {
  AfterViewInit,
  booleanAttribute,
  computed,
  Directive,
  DoCheck,
  ElementRef,
  Input,
  input,
  OnChanges,
  OnDestroy,
  output,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { AnimationBuilder, AnimationPlayer, useAnimation } from '@angular/animations';

import {
  collapseAnimation,
  collapseHorizontalAnimation,
  expandAnimation,
  expandHorizontalAnimation
} from './collapse.animations';

// todo
@Directive({
  selector: '[cCollapse]',
  exportAs: 'cCollapse',
  standalone: true,
  host: { '[class]': 'hostClasses()' }
})
export class CollapseDirective implements OnDestroy, AfterViewInit, DoCheck, OnChanges {
  /**
   * @ignore
   * todo: 'animate' input signal for navbar
   */
  @Input({ transform: booleanAttribute }) animate: boolean = true;

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
   * todo: 'visible' input signal
   */
  @Input({ transform: booleanAttribute })
  set visible(value) {
    this._visible = value;
  }

  get visible(): boolean {
    return this._visible;
  }

  private _visible: boolean = false;

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

  private player!: AnimationPlayer;
  private readonly host: HTMLElement;
  // private scrollHeight!: number;
  private scrollWidth!: number;
  private collapsing: boolean = false;

  constructor(
    private readonly hostElement: ElementRef,
    private readonly renderer: Renderer2,
    private readonly animationBuilder: AnimationBuilder
  ) {
    this.host = this.hostElement.nativeElement;
    this.renderer.setStyle(this.host, 'display', 'none');
  }

  readonly hostClasses = computed(() => {
    return {
      'navbar-collapse': this.navbar(),
      'collapse-horizontal': this.horizontal()
    } as Record<string, boolean>;
  });

  ngAfterViewInit(): void {
    if (this.visible) {
      this.toggle();
    }
  }

  ngOnDestroy(): void {
    this.destroyPlayer();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible']) {
      if (!changes['visible'].firstChange || !changes['visible'].currentValue) {
        this.toggle(changes['visible'].currentValue);
      }
    }
  }

  ngDoCheck(): void {
    if (this._visible !== this.visible) {
      this.toggle();
    }
  }

  toggle(visible = this.visible): void {
    this.createPlayer(visible);
    this.player?.play();
  }

  destroyPlayer(): void {
    this.player?.destroy();
  }

  createPlayer(visible: boolean = this.visible): void {
    if (this.player?.hasStarted()) {
      this.destroyPlayer();
    }

    if (visible) {
      this.renderer.removeStyle(this.host, 'display');
    }

    const duration = this.animate ? this.duration() : '0ms';

    const expand = this.horizontal() ? expandHorizontalAnimation : expandAnimation;
    const collapse = this.horizontal() ? collapseHorizontalAnimation : collapseAnimation;

    const dimension = this.horizontal() ? 'width' : 'height';
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;

    const animationFactory = this.animationBuilder?.build(
      useAnimation(visible ? expand : collapse, { params: { time: duration, easing: this.transition() } })
    );

    this.player = animationFactory.create(this.host);

    this.renderer.setStyle(this.host, dimension, visible ? 0 : `${this.host.getBoundingClientRect()[dimension]}px`);

    !visible && this.host.offsetHeight;

    this.player.onStart(() => {
      this.setMaxSize();
      this.renderer.removeClass(this.host, 'collapse');
      this.renderer.addClass(this.host, 'collapsing');
      this.renderer.removeClass(this.host, 'show');
      this.collapsing = true;
      if (visible) {
        this.renderer.setStyle(this.host, dimension, `${this.hostElement.nativeElement[scrollSize]}px`);
      } else {
        this.renderer.setStyle(this.host, dimension, '');
      }
      this.collapseChange.emit(visible ? 'opening' : 'collapsing');
    });
    this.player.onDone(() => {
      this.visible = visible;
      this.collapsing = false;
      this.renderer.removeClass(this.host, 'collapsing');
      this.renderer.addClass(this.host, 'collapse');
      if (visible) {
        this.renderer.addClass(this.host, 'show');
        this.renderer.setStyle(this.host, dimension, '');
      } else {
        this.renderer.removeClass(this.host, 'show');
      }
      this.collapseChange.emit(visible ? 'open' : 'collapsed');
    });
  }

  setMaxSize() {
    // setTimeout(() => {
    if (this.horizontal()) {
      this.scrollWidth = this.host.scrollWidth;
      this.scrollWidth > 0 && this.renderer.setStyle(this.host, 'maxWidth', `${this.scrollWidth}px`);
      // } else {
      // this.scrollHeight = this.host.scrollHeight;
      // this.scrollHeight > 0 && this.renderer.setStyle(this.host, 'maxHeight', `${this.scrollHeight}px`);
    }
    // });
  }
}
