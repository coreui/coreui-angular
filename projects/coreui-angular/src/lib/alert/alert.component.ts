import {
  AfterContentInit,
  booleanAttribute,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  QueryList
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';

import { Colors } from '../coreui.types';
import { TemplateIdDirective } from '../shared';
import { ButtonCloseDirective } from '../button';

type AnimateType = ('hide' | 'show');

@Component({
  selector: 'c-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  exportAs: 'cAlert',
  standalone: true,
  imports: [NgTemplateOutlet, ButtonCloseDirective],
  animations: [
    trigger('fadeInOut', [
      state('show', style({ opacity: 1, height: '*', padding: '*', border: '*', margin: '*' })),
      state('hide', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
      state('void', style({ opacity: 0, height: 0, padding: 0, border: 0, margin: 0 })),
      transition('show => hide', [
        animate('.3s ease-out')
      ]),
      transition('hide => show', [
        animate('.3s ease-in')
      ]),
      transition('show => void', [
        animate('.3s ease-out')
      ]),
      transition('void => show', [
        animate('.3s ease-in')
      ])
    ])
  ]
})
export class AlertComponent implements AfterContentInit {

  hide!: boolean;
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   *
   * @type Colors
   * @default 'primary'
   */
  @Input() color: Colors = 'primary';
  /**
   * Default role for alert. [docs]
   * @type string
   * @default 'alert'
   */
  @HostBinding('attr.role')
  @Input() role = 'alert';
  /**
   * Set the alert variant to a solid.
   * @type string
   */
  @Input() variant?: 'solid' | string;
  /**
   * Event triggered on the alert dismiss.
   */
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();
  templates: any = {};
  @ContentChildren(TemplateIdDirective, { descendants: true }) contentTemplates!: QueryList<TemplateIdDirective>;

  /**
   * Optionally adds a close button to alert and allow it to self dismiss.
   * @type boolean
   * @default false
   */
  @Input({ transform: booleanAttribute }) dismissible: boolean = false;

  /**
   * Adds animation for dismissible alert.
   * @type boolean
   */
  @Input({ transform: booleanAttribute }) fade: boolean = false;

  /**
   * Toggle the visibility of alert component.
   * @type boolean
   */
  @Input({ transform: booleanAttribute })
  set visible(value: boolean) {
    if (this.#visible !== value) {
      this.#visible = value;
      this.visibleChange.emit(value);
    }
  };

  get visible() {
    return this.#visible;
  }

  #visible: boolean = true;

  @HostBinding('@.disabled')
  get animationDisabled(): boolean {
    return !this.fade;
  }

  @HostBinding('@fadeInOut')
  get animateType(): AnimateType {
    return this.visible ? 'show' : 'hide';
  }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      alert: true,
      'alert-dismissible': this.dismissible,
      fade: this.fade,
      show: !this.hide,
      [`alert-${this.color}`]: !!this.color && this.variant !== 'solid',
      [`bg-${this.color}`]: !!this.color && this.variant === 'solid',
      'text-white': !!this.color && this.variant === 'solid'
    };
  }

  @HostListener('@fadeInOut.start', ['$event'])
  onAnimationStart($event: AnimationEvent): void {
    this.onAnimationEvent($event);
  }

  @HostListener('@fadeInOut.done', ['$event'])
  onAnimationDone($event: AnimationEvent): void {
    this.onAnimationEvent($event);
  }

  ngAfterContentInit(): void {
    this.contentTemplates.forEach((child: TemplateIdDirective) => {
      this.templates[child.id] = child.templateRef;
    });
  }

  onAnimationEvent(event: AnimationEvent): void {
    this.hide = event.phaseName === 'start' && event.toState === 'show';
    if (event.phaseName === 'done') {
      this.hide = (event.toState === 'hide' || event.toState === 'void');
      if (event.toState === 'show') {
        this.hide = false;
      }
    }
  }
}
