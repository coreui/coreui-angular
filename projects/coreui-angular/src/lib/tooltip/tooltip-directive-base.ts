import {
  afterRenderEffect,
  AfterViewChecked,
  AfterViewInit,
  ComponentRef,
  computed,
  DestroyRef,
  Directive,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  InputSignal,
  ModelSignal,
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
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, filter, finalize } from 'rxjs/operators';
import { createPopper, Instance, Options } from '@popperjs/core';

import { Triggers } from '../coreui.types';
import { IListenersConfig, IntersectionService, ListenersService } from '../services';
import { ElementRefDirective } from '../shared';
import { TooltipComponentBase } from './tooltip/tooltip-component-base';

@Directive()
export abstract class TooltipDirectiveBase implements OnDestroy, OnInit, AfterViewChecked, AfterViewInit {
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);
  readonly #viewContainerRef = inject(ViewContainerRef);
  readonly #listenersService = inject(ListenersService);
  readonly #intersectionService = inject(IntersectionService);
  readonly #destroyRef = inject(DestroyRef);
  readonly #document = inject(DOCUMENT);
  readonly #isServer = isPlatformServer(inject(PLATFORM_ID));
  #timerId1: ReturnType<typeof setTimeout> | undefined;
  #timerId2: ReturnType<typeof setTimeout> | undefined;

  protected abstract readonly component: Type<TooltipComponentBase>;
  protected abstract readonly offset: number;
  protected abstract readonly tooltipId: string;

  abstract readonly content: InputSignal<string | TemplateRef<unknown> | undefined>;
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
    if (this.#shown()) {
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

  ngAfterViewInit(): void {
    this.intersectionServiceSubscribe();
  }

  ngOnDestroy(): void {
    this.clearListeners();
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
        this.visible.update((value) => !value);
      },
      callbackOff: () => {
        this.visible.set(false);
      },
      callbackOn: () => {
        this.visible.set(true);
      }
    };
    this.#listenersService.setListeners(config);
  }

  private clearListeners(): void {
    this.#listenersService.clearListeners();
  }

  private intersectionServiceSubscribe(): void {
    this.#intersectionService.createIntersectionObserver(this.referenceRef());
    this.#intersectionService.intersecting$
      .pipe(
        filter((next) => next.hostElement === this.referenceRef()),
        debounceTime(100),
        finalize(() => {
          this.#intersectionService.unobserve(this.referenceRef());
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe((next) => {
        this.visible.set(next.isIntersecting ? this.visible() : false);
      });
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
          this.#timerId1 = setTimeout(() => this.#reveal(), 150);
        }
      }
      this.popperInstance.update();
      return;
    }

    this.tooltip = this.tooltipRef?.location.nativeElement;
    this.#renderer.addClass(this.tooltip, 'd-none');
    this.#renderer.addClass(this.tooltip, 'fade');

    this.#viewContainerRef.insert(this.tooltipRef.hostView);
    this.#renderer.appendChild(this.#document.body, this.tooltip);

    this.#createPopper();
    this.#timerId1 = setTimeout(() => this.#reveal(), 150);
  }

  #createPopper(): void {
    this.popperInstance = createPopper(this.referenceRef().nativeElement, this.tooltip, {
      ...untracked(() => this.popperOptionsComputed())
    });
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

    clearTimeout(this.#timerId2);
    this.#timerId2 = setTimeout(() => {
      const index = this.#viewContainerRef.indexOf(this.tooltipRef.hostView);
      if (index >= 0) {
        this.#viewContainerRef.detach(index);
      }
      this.popperInstance?.destroy();
      this.popperInstance = undefined;
      this.#timerId2 = undefined;
    }, 300);

    this.tooltipRef.setInput('visible', false);
  }
}
