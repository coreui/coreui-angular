import {
  afterRenderEffect,
  AfterViewChecked,
  ComponentRef,
  computed,
  Directive,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  InputSignal,
  InputSignalWithTransform,
  linkedSignal,
  ModelSignal,
  numberAttribute,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  Type,
  untracked,
  ViewContainerRef
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { addAriaReferencedId, getAriaReferenceIds, removeAriaReferencedId } from '@angular/cdk/a11y';
import { debounceTime, filter } from 'rxjs/operators';
import { createPopper, Instance, Options } from '@popperjs/core';

import { Triggers } from '../coreui.types';
import { IListenersConfig, IntersectionService, ListenersService } from '../services';
import { ElementRefDirective } from '../shared';
import { TooltipComponentBase } from './tooltip/tooltip-component-base';

export type TooltipDelay = number | { show?: number; hide?: number };

export const delayAttribute = (value: TooltipDelay | string | null | undefined): TooltipDelay =>
  typeof value === 'object' ? (value ?? {}) : numberAttribute(value);

@Directive()
export abstract class TooltipDirectiveBase implements OnDestroy, OnInit, AfterViewChecked {
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);
  readonly #viewContainerRef = inject(ViewContainerRef);
  readonly #listenersService = inject(ListenersService);
  readonly #intersectionService = inject(IntersectionService);
  readonly #document = inject(DOCUMENT);
  readonly #isServer = isPlatformServer(inject(PLATFORM_ID));
  #timerId1: ReturnType<typeof setTimeout> | undefined;
  #timerId2: ReturnType<typeof setTimeout> | undefined;
  #endingId: ReturnType<typeof setTimeout> | undefined;

  protected abstract readonly component: Type<TooltipComponentBase>;
  protected abstract readonly offset: number;
  protected abstract readonly tooltipId: string;

  abstract readonly animation: InputSignalWithTransform<boolean, unknown>;
  abstract readonly content: InputSignal<string | TemplateRef<unknown> | undefined>;
  abstract readonly delay: InputSignalWithTransform<TooltipDelay, TooltipDelay | string | null | undefined>;
  abstract readonly placement: InputSignal<'top' | 'bottom' | 'left' | 'right'>;
  abstract readonly popperOptions: InputSignal<Partial<Options>>;
  abstract readonly reference: InputSignal<ElementRefDirective | undefined>;
  abstract readonly trigger: InputSignal<Triggers | Triggers[]>;
  abstract readonly visible: ModelSignal<boolean>;

  readonly popperOptionsComputed = computed<Partial<Options> & Pick<Options, 'placement'>>(() => ({
    modifiers: [{ name: 'offset', options: { offset: [0, this.offset] } }],
    placement: this.placement(),
    ...this.popperOptions()
  }));

  readonly #popperPlacement = computed(() => this.popperOptionsComputed().placement);

  readonly #popperPlacementEffect = afterRenderEffect({
    write: () => {
      const placement = this.#popperPlacement();
      this.popperInstance?.setOptions({ placement });
    }
  });

  readonly referenceRef = computed(() => this.reference()?.elementRef ?? this.#hostElement);

  readonly #intersectionEffect = effect((onCleanup) => {
    const subscription = this.#intersectionService
      .observe(this.referenceRef())
      .pipe(
        debounceTime(100),
        filter((isIntersecting) => !isIntersecting)
      )
      .subscribe(() => this.visible.set(false));
    onCleanup(() => subscription.unsubscribe());
  });

  readonly #delay = computed(() => {
    const delay = this.delay();
    const { show, hide } = typeof delay === 'number' ? { show: delay, hide: delay } : delay;
    return { show: numberAttribute(show, 150), hide: numberAttribute(hide, 0) };
  });

  readonly #ending = linkedSignal({ source: () => this.visible(), computation: () => false });

  readonly #shown = computed(() => !this.#isServer && this.visible() && !!this.content());

  readonly #visibleEffect = afterRenderEffect({
    // this fixes RuntimeError: NG0500: During hydration Angular expected <abc> but found <xyz>.
    // Find more at https://angular.dev/errors/NG0500
    write: () => {
      this.#shown() ? this.addTooltipElement() : this.removeTooltipElement();
    }
  });

  readonly #handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') {
      return;
    }
    if (this.#revealed()) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.visible.set(false);
  };

  readonly #escapeEffect = effect((onCleanup) => {
    if (!this.visible()) {
      return;
    }

    const useCapture = true;

    this.#document.addEventListener('keydown', this.#handleEscapeKey, useCapture);
    onCleanup(() => this.#document.removeEventListener('keydown', this.#handleEscapeKey, useCapture));
  });

  readonly #ariaDescribedByEffect = afterRenderEffect(() => this.#syncAriaDescribedBy(this.#shown()));

  get ariaDescribedBy(): string | null {
    return this.#shown() ? this.tooltipId : null;
  }

  private tooltip!: HTMLDivElement;
  private tooltipRef!: ComponentRef<TooltipComponentBase>;
  private popperInstance?: Instance;

  ngAfterViewChecked(): void {
    this.#syncAriaDescribedBy(this.#shown());
  }

  ngOnDestroy(): void {
    this.clearListeners();
    clearTimeout(this.#endingId);
    this.destroyTooltipElement();
    this.#syncAriaDescribedBy(false);
  }

  ngOnInit(): void {
    this.setListeners();
  }

  #syncAriaDescribedBy(shown: boolean): void {
    const host = this.#hostElement.nativeElement;
    if (shown) {
      addAriaReferencedId(host, 'aria-describedby', this.tooltipId);
    } else if (getAriaReferenceIds(host, 'aria-describedby').includes(this.tooltipId)) {
      removeAriaReferencedId(host, 'aria-describedby', this.tooltipId);
    }
  }

  private setListeners(): void {
    const config: IListenersConfig = {
      hostElement: this.#hostElement,
      trigger: this.trigger(),
      callbackToggle: () => {
        untracked(() => (this.visible() ? this.#end() : this.#start()));
      },
      callbackOff: () => {
        untracked(() => this.#end());
      },
      callbackOn: () => {
        this.#start();
      }
    };
    this.#listenersService.setListeners(config);
  }

  #start(): void {
    this.#ending.set(false);
    this.visible.set(true);
  }

  #end(): void {
    const { hide } = this.#delay();
    clearTimeout(this.#endingId);
    if (hide > 0 && this.#revealed()) {
      this.#ending.set(true);
      this.#endingId = setTimeout(() => {
        if (this.#ending()) {
          this.visible.set(false);
        }
      }, hide);
      return;
    }
    this.visible.set(false);
  }

  #revealed(): boolean {
    return this.visible() && !!this.tooltipRef?.instance.visible();
  }

  private clearListeners(): void {
    this.#listenersService.clearListeners();
  }

  private createTooltipElement(): void {
    this.tooltipRef = this.#viewContainerRef.createComponent(this.component);
    this.tooltipRef.setInput('id', this.tooltipId);
  }

  private destroyTooltipElement(): void {
    clearTimeout(this.#timerId1);
    clearTimeout(this.#timerId2);
    this.tooltip?.remove();
    this.tooltipRef?.destroy();
    // @ts-ignore
    this.tooltipRef = undefined;
    this.popperInstance?.destroy();
    this.popperInstance = undefined;
  }

  private addTooltipElement(): void {
    if (!this.tooltipRef) {
      this.createTooltipElement();
    }

    this.tooltipRef?.setInput('animation', this.animation());
    this.tooltipRef?.setInput('content', this.content() ?? '');

    if (this.popperInstance) {
      if (this.popperInstance.state.elements.reference !== this.referenceRef().nativeElement) {
        this.popperInstance.destroy();
        this.#createPopper();
      }
      if (this.#timerId2 !== undefined) {
        clearTimeout(this.#timerId2);
        this.#timerId2 = undefined;
        if (this.#timerId1 === undefined) {
          this.#reveal();
        } else {
          this.#scheduleReveal();
        }
      }
      this.popperInstance.update();
      return;
    }

    this.tooltip = this.tooltipRef?.location.nativeElement;
    this.#renderer.addClass(this.tooltip, 'd-none');

    this.#viewContainerRef.insert(this.tooltipRef.hostView);
    this.#renderer.appendChild(this.#document.body, this.tooltip);

    this.#createPopper();
    this.#scheduleReveal();
  }

  #createPopper(): void {
    this.popperInstance = createPopper(this.referenceRef().nativeElement, this.tooltip, {
      ...untracked(() => this.popperOptionsComputed())
    });
  }

  #scheduleReveal(): void {
    this.#timerId1 = setTimeout(() => this.#reveal(), untracked(this.#delay).show);
  }

  #reveal(): void {
    this.#renderer.removeClass(this.tooltip, 'd-none');
    this.tooltipRef?.setInput('visible', this.visible());
    this.popperInstance?.update();
    this.#timerId1 = undefined;
  }

  private removeTooltipElement(): void {
    clearTimeout(this.#timerId1);
    if (!this.tooltipRef) {
      return;
    }

    const fadeTime = untracked(this.animation) ? 300 : 0;
    clearTimeout(this.#timerId2);
    this.#timerId2 = setTimeout(() => {
      const index = this.#viewContainerRef.indexOf(this.tooltipRef.hostView);
      if (index >= 0) {
        this.#viewContainerRef.detach(index);
      }
      this.popperInstance?.destroy();
      this.popperInstance = undefined;
      this.#timerId2 = undefined;
    }, fadeTime);

    this.tooltipRef.setInput('visible', false);
  }
}
