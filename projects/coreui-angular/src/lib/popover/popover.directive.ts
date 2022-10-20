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
import { PopoverComponent } from './popover/popover.component';
import { IListenersConfig, ListenersService } from '../services/listeners.service';

@Directive({
  selector: '[cPopover]',
  exportAs: 'cPopover',
  providers: [ListenersService]
})
export class PopoverDirective implements OnChanges, OnDestroy, OnInit {

  /**
   * Content of popover
   * @type {string | TemplateRef}
   */
  @Input('cPopover') content: string | TemplateRef<any> = '';

  /**
   * Optional popper Options object, takes precedence over cPopoverPlacement prop
   * @type Partial<Options>
   */
  @Input('cPopoverOptions')
  set popperOptions(value: Partial<Options>) {
    this._popperOptions = { ...this._popperOptions, placement: this.placement, ...value };
  };

  get popperOptions(): Partial<Options> {
    return { placement: this.placement, ...this._popperOptions };
  }

  /**
   * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
   */
  @Input('cPopoverPlacement') placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
   * @type {'hover' | 'focus' | 'click'}
   */
  @Input('cPopoverTrigger') trigger?: Triggers | Triggers[] = 'hover';

  /**
   * Toggle the visibility of popover component.
   */
  @Input('cPopoverVisible')
  set visible(value: boolean) {
    this._visible = value;
  }

  get visible() {
    return this._visible;
  }

  private _visible = false;

  @HostBinding('attr.aria-describedby') get ariaDescribedBy(): string | null {
    return this.popoverId ? this.popoverId : null;
  }

  private popover!: HTMLDivElement;
  private popoverId!: string;
  private popoverRef!: ComponentRef<PopoverComponent>;
  private popperInstance!: Instance;

  private _popperOptions: Partial<Options> = {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8]
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
      changes['visible'].currentValue ? this.addPopoverElement() : this.removePopoverElement();
    }
  }

  ngOnDestroy(): void {
    this.clearListeners();
    this.destroyPopoverElement();
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
        this.visible ? this.addPopoverElement() : this.removePopoverElement();
      },
      callbackOff: () => {
        this.visible = false;
        this.removePopoverElement();
      },
      callbackOn: () => {
        this.visible = true;
        this.addPopoverElement();
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

  private createPopoverElement(): void {
    if (!this.popoverRef) {
      this.popoverRef = this.viewContainerRef.createComponent<PopoverComponent>(PopoverComponent);
      // this.viewContainerRef.detach();
    }
  }

  private destroyPopoverElement(): void {
    this.popover?.remove();
    this.popoverRef?.destroy();
    // @ts-ignore
    this.popoverRef = undefined;
    this.popperInstance?.destroy();
    this.viewContainerRef?.detach();
    this.viewContainerRef?.clear();
  }

  private addPopoverElement(): void {
    if (!this.popoverRef) {
      this.createPopoverElement();
    }
    this.popoverRef.instance.content = this.content;
    this.popover = this.popoverRef.location.nativeElement;
    this.renderer.addClass(this.popover, 'd-none');
    this.renderer.addClass(this.popover, 'fade');

    this.popperInstance?.destroy();

    setTimeout(() => {
      this.popperInstance = createPopper(
        this.hostElement.nativeElement,
        this.popover,
        { ...this.popperOptions }
      );
      this.viewContainerRef.insert(this.popoverRef.hostView);
      this.renderer.appendChild(this.document.body, this.popover);
      if (!this.visible) {
        this.removePopoverElement();
        return;
      }
      setTimeout(() => {
        this.popoverId = this.getUID('popover');
        this.popoverRef.instance.id = this.popoverId;
        if (!this.visible) {
          this.removePopoverElement();
          return;
        }
        this.renderer.removeClass(this.popover, 'd-none');
        this.popoverRef.instance.visible = this.visible;
        this.popperInstance.forceUpdate();
        this.changeDetectorRef.markForCheck();
      }, 100);
    });
  }

  private removePopoverElement(): void {
    this.popoverId = '';
    if (!this.popoverRef) {
      return;
    }
    this.popoverRef.instance.visible = false;
    this.popoverRef.instance.id = undefined;
    this.changeDetectorRef.markForCheck();
    setTimeout(() => {
      this.viewContainerRef.detach();
    }, 300);
  }
}
