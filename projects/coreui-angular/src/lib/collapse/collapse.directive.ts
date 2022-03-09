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

  private _animate = true;
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

  private _visible = false;
  /**
   * Toggle the visibility of collapsible element.
   */
  @Input()
  set visible(value) {
    this._visible = value;
  }
  get visible(): boolean {
    return this._visible;
  }

  private _navbar = false;
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
  private scrollHeight!: number;
  private scrollWidth!: number;
  private collapsing: boolean = false;

  constructor(
    private hostElement: ElementRef,
    private renderer: Renderer2,
    private animationBuilder: AnimationBuilder
  ) {
    this.host = this.hostElement.nativeElement;
    this.setDisplay(false);
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'navbar-collapse': this.navbar,
      show: this.visible,
      'collapse-horizontal': this.horizontal,
      collapsing: this.collapsing
      // collapse: !this.collapsing
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
    this.setDisplay(true);
    this.createPlayer(visible);
    this.visible = visible;
    this.player?.play();
  }

  destroyPlayer(): void {
    this.player?.destroy();
  }

  createPlayer(visible: boolean = this.visible): void {
    if (this.player?.hasStarted()) {
      this.destroyPlayer();
    }

    let animationFactory;

    const duration = this.animate ? this.duration : '0ms';

    const expand = this.horizontal ? expandHorizontalAnimation : expandAnimation;
    const collapse = this.horizontal ? collapseHorizontalAnimation : collapseAnimation;

    animationFactory = this.animationBuilder.build(
      useAnimation(visible ? expand : collapse, { params: { time: duration, easing: this.transition } })
    );

    this.player = animationFactory.create(this.host);
    this.player.onStart(() => {
      this.setMaxSize();
      this.collapsing = true;
      this.collapseChange.emit(visible ? 'opening' : 'collapsing');
    });
    this.player.onDone(() => {
      this.collapsing = false;
      this.collapseChange.emit(visible ? 'open' : 'collapsed');
    });
  }

  setMaxSize() {
    setTimeout(() => {
      if (this.horizontal) {
        this.scrollWidth = this.host.scrollWidth;
        this.scrollWidth > 0 && this.renderer.setStyle(this.host, 'maxWidth', `${this.scrollWidth}px`);
        // } else {
        // this.scrollHeight = this.host.scrollHeight;
        // this.scrollHeight > 0 && this.renderer.setStyle(this.host, 'maxHeight', `${this.scrollHeight}px`);
      }
    });
  }

  setDisplay(display: boolean) {
    display ? this.renderer.removeStyle(this.host, 'display') : this.renderer.setStyle(this.host, 'display', 'none');
  }
}
