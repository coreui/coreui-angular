import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  ComponentRef,
  computed,
  DestroyRef,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  model,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, filter, finalize } from 'rxjs/operators';
import { createPopper, Instance, Options } from '@popperjs/core';

import { Triggers } from '../coreui.types';
import { IListenersConfig, IntersectionService, ListenersService } from '../services';
import { ElementRefDirective } from '../shared';
import { TooltipComponent } from './tooltip/tooltip.component';

@Directive({
  selector: '[cTooltip]',
  exportAs: 'cTooltip',
  providers: [ListenersService, IntersectionService],
  standalone: true,
  host: { '[attr.aria-describedby]': 'ariaDescribedBy' }
})
export class TooltipDirective implements OnDestroy, OnInit, AfterViewInit {
  /**
   * Content of tooltip
   * @type {string | TemplateRef}
   */
  readonly content = input<string | TemplateRef<any> | undefined>(undefined, { alias: 'cTooltip' });

  contentEffect = effect(() => {
    if (this.content()) {
      this.destroyTooltipElement();
    }
  });

  /**
   * Optional popper Options object, takes precedence over cPopoverPlacement prop
   * @type Partial<Options>
   */
  readonly popperOptions = input<Partial<Options>>({}, { alias: 'cTooltipOptions' });

  popperOptionsEffect = effect(() => {
    this._popperOptions = {
      ...this._popperOptions,
      placement: this.placement(),
      ...this.popperOptions()
    };
  });

  popperOptionsComputed = computed(() => {
    return { placement: this.placement(), ...this._popperOptions };
  });

  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
   * @type: 'top' | 'bottom' | 'left' | 'right'
   * @default: 'top'
   */
  readonly placement = input<'top' | 'bottom' | 'left' | 'right'>('top', { alias: 'cTooltipPlacement' });

  /**
   * ElementRefDirective for positioning the tooltip on reference element
   * @type: ElementRefDirective
   * @default: undefined
   */
  readonly reference = input<ElementRefDirective | undefined>(undefined, { alias: 'cTooltipRef' });

  readonly referenceRef = computed(() => this.reference()?.elementRef ?? this.hostElement);

  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
   * @type: 'Triggers | Triggers[]
   */
  readonly trigger = input<Triggers | Triggers[]>('hover', { alias: 'cTooltipTrigger' });

  /**
   * Toggle the visibility of tooltip component.
   * @type boolean
   */
  readonly visible = model(false, { alias: 'cTooltipVisible' });

  visibleEffect = effect(() => {
    this.visible() ? this.addTooltipElement() : this.removeTooltipElement();
  });

  get ariaDescribedBy(): string | null {
    return this.tooltipId ? this.tooltipId : null;
  }

  private tooltip!: HTMLDivElement;
  private tooltipId!: string;
  private tooltipRef!: ComponentRef<TooltipComponent>;
  private popperInstance!: Instance;

  private _popperOptions: Partial<Options> = {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 5]
        }
      }
    ]
  };

  readonly #destroyRef = inject(DestroyRef);
  readonly #document = inject(DOCUMENT);

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private listenersService: ListenersService,
    private changeDetectorRef: ChangeDetectorRef,
    private intersectionService: IntersectionService
  ) {}

  ngAfterViewInit(): void {
    this.intersectionServiceSubscribe();
  }

  ngOnDestroy(): void {
    this.clearListeners();
    this.destroyTooltipElement();
  }

  ngOnInit(): void {
    this.setListeners();
  }

  private setListeners(): void {
    const config: IListenersConfig = {
      hostElement: this.hostElement,
      trigger: this.trigger(),
      callbackToggle: () => {
        this.visible.set(!this.visible());
      },
      callbackOff: () => {
        this.visible.set(false);
      },
      callbackOn: () => {
        this.visible.set(true);
      }
    };
    this.listenersService.setListeners(config);
  }

  private clearListeners(): void {
    this.listenersService.clearListeners();
  }

  private intersectionServiceSubscribe(): void {
    this.intersectionService.createIntersectionObserver(this.referenceRef());
    this.intersectionService.intersecting$
      .pipe(
        filter((next) => next.hostElement === this.referenceRef()),
        debounceTime(100),
        finalize(() => {
          this.intersectionService.unobserve(this.referenceRef());
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe((next) => {
        this.visible.set(next.isIntersecting ? this.visible() : false);
      });
  }

  private getUID(prefix: string): string {
    let uid = prefix ?? 'random-id';
    do {
      uid = `${prefix}-${Math.floor(Math.random() * 1000000).toString(10)}`;
    } while (this.#document.getElementById(uid));

    return uid;
  }

  private createTooltipElement(): void {
    if (!this.tooltipRef) {
      this.tooltipRef = this.viewContainerRef.createComponent<TooltipComponent>(TooltipComponent);
      // this.viewContainerRef.detach();
    }
  }

  private destroyTooltipElement(): void {
    this.tooltip?.remove();
    this.tooltipRef?.destroy();
    // @ts-ignore
    this.tooltipRef = undefined;
    this.popperInstance?.destroy();
    this.viewContainerRef?.detach();
    this.viewContainerRef?.clear();
  }

  private addTooltipElement(): void {
    if (!this.content()) {
      this.destroyTooltipElement();
      return;
    }

    if (!this.tooltipRef) {
      this.createTooltipElement();
    }

    this.tooltipRef?.setInput('content', this.content() ?? '');

    this.tooltip = this.tooltipRef?.location.nativeElement;
    this.renderer.addClass(this.tooltip, 'd-none');
    this.renderer.addClass(this.tooltip, 'fade');

    this.popperInstance?.destroy();

    this.viewContainerRef.insert(this.tooltipRef.hostView);
    this.renderer.appendChild(this.#document.body, this.tooltip);

    this.popperInstance = createPopper(this.referenceRef().nativeElement, this.tooltip, {
      ...this.popperOptionsComputed()
    });

    if (!this.visible()) {
      this.removeTooltipElement();
      return;
    }
    setTimeout(() => {
      this.tooltipId = this.getUID('tooltip');
      this.tooltipRef?.setInput('id', this.tooltipId);
      this.renderer.removeClass(this.tooltip, 'd-none');
      this.tooltipRef?.setInput('visible', this.visible());
      this.popperInstance?.forceUpdate();
      this.changeDetectorRef?.markForCheck();
    }, 100);
  }

  private removeTooltipElement(): void {
    this.tooltipId = '';
    if (!this.tooltipRef) {
      return;
    }
    this.tooltipRef.setInput('visible', false);
    this.tooltipRef.setInput('id', undefined);
    this.changeDetectorRef.markForCheck();
    setTimeout(() => {
      this.viewContainerRef?.detach();
    }, 300);
  }
}
