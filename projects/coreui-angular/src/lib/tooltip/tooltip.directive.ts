import {
  ChangeDetectorRef,
  ComponentRef,
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { createPopper, Instance, Options } from '@popperjs/core';

import { Triggers } from '../coreui.types';
import { TooltipComponent } from './tooltip/tooltip.component';
import { IListenersConfig, ListenersService } from '../services/listeners.service';

@Directive({
  selector: '[cTooltip]',
  exportAs: 'cTooltip',
  providers: [ListenersService]
})
export class TooltipDirective implements OnChanges, OnDestroy, OnInit {

  /**
   * Content of tooltip
   * @type {string | TemplateRef}
   */
  @Input('cTooltip') content: string | TemplateRef<any> = '';

  /**
   * Optional popper Options object, takes precedence over cPopoverPlacement prop
   * @type Partial<Options>
   */
  @Input('cTooltipOptions')
  set popperOptions(value: Partial<Options>) {
    this._popperOptions = { ...this._popperOptions, placement: this.placement, ...value };
  };

  get popperOptions(): Partial<Options> {
    return { placement: this.placement, ...this._popperOptions };
  }

  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
   */
  @Input('cTooltipPlacement') placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
   * @type {'hover' | 'focus' | 'click'}
   */
  @Input('cTooltipTrigger') trigger: Triggers | Triggers[] = 'hover';

  /**
   * Toggle the visibility of tooltip component.
   */
  @Input('cTooltipVisible')
  set visible(value: boolean) {
    this._visible = value;
  }

  get visible() {
    return this._visible;
  }

  private _visible = false;

  @HostBinding('attr.aria-describedby') get ariaDescribedBy(): string | null {
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
          offset: [0, 0]
        }
      }
    ]
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private listenersService: ListenersService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible']) {
      changes['visible'].currentValue ? this.addTooltipElement() : this.removeTooltipElement();
    }
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
      trigger: this.trigger,
      callbackToggle: () => {
        this.visible = !this.visible;
        this.visible ? this.addTooltipElement() : this.removeTooltipElement();
      },
      callbackOff: () => {
        this.visible = false;
        this.removeTooltipElement();
      },
      callbackOn: () => {
        this.visible = true;
        this.addTooltipElement();
      }
    };
    this.listenersService.setListeners(config);
  }

  private clearListeners(): void {
    this.listenersService.clearListeners();
  }

  private getUID(prefix: string): string {
    let uid = prefix ?? 'random-id';
    do {
      uid = `${prefix}-${Math.floor(Math.random() * 1000000).toString(10)}`;
    } while (this.document.getElementById(uid));

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
    if (!this.tooltipRef) {
      this.createTooltipElement();
    }

    this.tooltipId = this.getUID('tooltip');
    this.tooltipRef.instance.id = this.tooltipId;
    this.tooltipRef.instance.content = this.content;

    this.tooltip = this.tooltipRef.location.nativeElement;
    this.renderer.addClass(this.tooltip, 'd-none');
    this.renderer.addClass(this.tooltip, 'fade');

    this.popperInstance?.destroy();

    this.viewContainerRef.insert(this.tooltipRef.hostView);
    this.renderer.appendChild(this.document.body, this.tooltip);

    this.popperInstance = createPopper(
      this.hostElement.nativeElement,
      this.tooltip,
      { ...this.popperOptions }
    );
    if (!this.visible) {
      this.removeTooltipElement();
      return;
    }
    this.renderer.removeClass(this.tooltip, 'd-none');
    this.changeDetectorRef.markForCheck();

    setTimeout(() => {
      this.tooltipRef.instance.visible = this.visible;
      this.popperInstance.forceUpdate();
      this.changeDetectorRef.markForCheck();
    }, 100);

  }

  private removeTooltipElement(): void {
    this.tooltipId = '';
    if (!this.tooltipRef) {
      return;
    }
    this.tooltipRef.instance.visible = false;
    this.tooltipRef.instance.id = undefined;
    this.changeDetectorRef.markForCheck();
    setTimeout(() => {
      this.viewContainerRef?.detach();
    }, 300);
  }
}
