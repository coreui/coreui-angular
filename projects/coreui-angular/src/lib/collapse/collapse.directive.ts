import {
  AfterViewInit,
  Directive,
  DoCheck,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { AnimationBuilder, AnimationPlayer, useAnimation } from '@angular/animations';

import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

import {
  collapseAnimation,
  collapseHorizontalAnimation,
  expandAnimation,
  expandHorizontalAnimation
} from './collapse.animations';

// todo
// tslint:disable-next-line:no-conflicting-lifecycle
@Directive({
  selector: '[cCollapse]',
  exportAs: 'cCollapse'
})
export class CollapseDirective implements OnChanges, OnDestroy, DoCheck, AfterViewInit {

  static ngAcceptInputType_horizontal: BooleanInput;
  static ngAcceptInputType_navbar: BooleanInput;
  static ngAcceptInputType_visible: BooleanInput;

  /**
   * @ignore
   */
  @Input()
  set animate(value: boolean) {
    this._animate = value;
  }

  get animate(): boolean {
    return this._animate;
  }

  private _animate = true;

  /**
   * Set horizontal collapsing to transition the width instead of height.
   */
  @Input()
  set horizontal(value: boolean) {
    this._horizontal = coerceBooleanProperty(value);
  }

  get horizontal(): boolean {
    return this._horizontal;
  }

  private _horizontal: boolean = false;

  /**
   * Toggle the visibility of collapsible element.
   */
  @Input()
  set visible(value) {
    this._visible = coerceBooleanProperty(value);
  }

  get visible(): boolean {
    return this._visible;
  }

  private _visible = false;

  /**
   * Add `navbar` prop for grouping and hiding navbar contents by a parent breakpoint.
   */
  @Input()
  set navbar(value: boolean) {
    this._navbar = coerceBooleanProperty(value);
  };

  get navbar() {
    return this._navbar;
  }

  private _navbar = false;

  /**
   * @ignore
   */
  @Input() duration = '350ms';
  /**
   * @ignore
   */
  @Input() transition = 'ease';
  /**
   * Event emitted on visibility change. [docs]
   * @type string
   */
  @Output() collapseChange = new EventEmitter<string>();

  private player!: AnimationPlayer;
  private readonly host: HTMLElement;
  // private scrollHeight!: number;
  private scrollWidth!: number;
  private collapsing: boolean = false;

  constructor(
    private hostElement: ElementRef,
    private renderer: Renderer2,
    private animationBuilder: AnimationBuilder
  ) {
    this.host = this.hostElement.nativeElement;
    this.renderer.setStyle(this.host, 'display', 'none');
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'navbar-collapse': this.navbar,
      'collapse-horizontal': this.horizontal
    };
  }

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

    const duration = this.animate ? this.duration : '0ms';

    const expand = this.horizontal ? expandHorizontalAnimation : expandAnimation;
    const collapse = this.horizontal ? collapseHorizontalAnimation : collapseAnimation;

    const dimension = this.horizontal ? 'width' : 'height';
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;

    const animationFactory = this.animationBuilder.build(
      useAnimation(visible ? expand : collapse, { params: { time: duration, easing: this.transition } })
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
        // @ts-ignore
        this.renderer.setStyle(this.host, dimension, `${this.host[scrollSize]}px`);
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
    if (this.horizontal) {
      this.scrollWidth = this.host.scrollWidth;
      this.scrollWidth > 0 && this.renderer.setStyle(this.host, 'maxWidth', `${this.scrollWidth}px`);
      // } else {
      // this.scrollHeight = this.host.scrollHeight;
      // this.scrollHeight > 0 && this.renderer.setStyle(this.host, 'maxHeight', `${this.scrollHeight}px`);
    }
    // });
  }
}
