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

import { collapseAnimation, expandAnimation } from './collapse.animations';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

// todo
// tslint:disable-next-line:no-conflicting-lifecycle
@Directive({
  selector: '[cCollapse]',
  exportAs: 'cCollapse'
})
export class CollapseDirective implements OnChanges, OnDestroy, DoCheck, AfterViewInit {

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
  @Input() duration = '400ms';
  /**
   * @ignore
   */
  @Input() transition = 'ease-in-out';
  /**
   * Event emitted on visibility change. [docs]
   * @type string
   */
  @Output() collapseChange = new EventEmitter<string>();

  private player!: AnimationPlayer;
  private readonly host: HTMLElement;

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
      show: this.visible,
    };
  }

  ngAfterViewInit(): void {
    this.renderer.removeStyle(this.host, 'display');
  }

  ngOnDestroy(): void {
    this.destroyPlayer();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible']) {
      // tslint:disable-next-line:no-unused-expression
      (!changes['visible'].firstChange || !changes['visible'].currentValue) && this.toggle(changes['visible'].currentValue);
    }
  }

  ngDoCheck(): void {
    if (this._visible !== this.visible) {
      this.toggle();
    }
  }

  toggle(visible = this.visible): void {
    this.visible = visible;
    this.createPlayer(visible);
    this.player.play();
  }

  destroyPlayer(): void {
    if (this.player) {
      this.player.destroy();
    }
  }

  createPlayer(visible: boolean = this.visible): void {
    if (this.player) {
      this.destroyPlayer();
    }

    let animationFactory;

    const duration = this.animate ? this.duration : '0ms';

    animationFactory = this.animationBuilder.build(
      useAnimation(visible ? expandAnimation : collapseAnimation, { params: { time: duration, easing: this.transition } })
    );

    this.player = animationFactory.create(this.host);
    this.player.onStart(() => {this.collapseChange.emit(visible ? 'opening' : 'collapsing'); });
    this.player.onDone(() => {this.collapseChange.emit(visible ? 'open' : 'collapsed'); });
  }
}
