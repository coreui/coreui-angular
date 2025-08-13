import {
  Component,
  ComponentRef,
  computed,
  contentChildren,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  input,
  NgModuleRef,
  OnInit,
  Renderer2,
  viewChild,
  ViewContainerRef
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { IToasterAction, ToasterService } from './toaster.service';
import { ToasterHostDirective } from './toaster-host.directive';
import { ToastComponent } from '../toast/toast.component';

export enum ToasterPlacement {
  Static = 'static',
  TopStart = 'top-start',
  TopCenter = 'top-center',
  TopEnd = 'top-end',
  MiddleStart = 'middle-start',
  MiddleCenter = 'middle-center',
  MiddleEnd = 'middle-end',
  BottomStart = 'bottom-start',
  BottomCenter = 'bottom-center',
  BottomEnd = 'bottom-end'
}

export type TToasterPlacement =
  | ToasterPlacement.Static
  | ToasterPlacement.TopStart
  | ToasterPlacement.TopCenter
  | ToasterPlacement.TopEnd
  | ToasterPlacement.MiddleStart
  | ToasterPlacement.MiddleCenter
  | ToasterPlacement.MiddleEnd
  | ToasterPlacement.BottomStart
  | ToasterPlacement.BottomCenter
  | ToasterPlacement.BottomEnd
  | string;

@Component({
  selector: 'c-toaster',
  templateUrl: './toaster.component.html',
  exportAs: 'cToaster',
  imports: [ToasterHostDirective],
  host: {
    class: 'toaster toast-container',
    '[class]': 'hostClasses()'
  },
  providers: [ToasterService]
})
export class ToasterComponent implements OnInit {
  readonly #hostElement = inject(ElementRef);
  readonly #renderer = inject(Renderer2);
  readonly #toasterService = inject(ToasterService);
  readonly #destroyRef = inject(DestroyRef);

  placements = Object.values(ToasterPlacement);
  toastsDynamic: ComponentRef<any>[] = [];

  /**
   * Toaster placement
   * @return TToasterPlacement
   */
  readonly placementInput = input<TToasterPlacement>(ToasterPlacement.TopEnd, { alias: 'placement' });

  get placement() {
    return this.placementInput();
  }

  /**
   * Toaster position
   * @return (string | 'absolute' | 'fixed' | 'static')
   */
  readonly position = input<string | 'absolute' | 'fixed' | 'static'>('absolute');

  readonly toasterHost = viewChild.required(ToasterHostDirective);
  readonly contentToasts = contentChildren(ToastComponent, { read: ViewContainerRef });

  readonly #contentToastsEffect = effect(() => {
    // Ensure that the contentToasts is available before accessing it
    // temp fix for: ASSERTION ERROR: Unexpected state: no hydration info available for a given TNode, which represents a view container. [Expected=> null != undefined <=Actual]
    this.contentToasts();
  });

  readonly hostClasses = computed(() => {
    const placement = this.placement;
    const position = this.position();
    return {
      toaster: true,
      'toast-container': true,
      [`position-${position}`]: !!position,
      'top-0': placement.includes('top'),
      'top-50': placement.includes('middle'),
      'bottom-0': placement.includes('bottom'),
      'start-0': placement.includes('start'),
      'start-50': placement.includes('center'),
      'end-0': placement.includes('end'),
      'translate-middle-x': placement.includes('center') && !placement.includes('middle'),
      'translate-middle-y': placement.includes('middle') && !placement.includes('center'),
      'translate-middle': placement.includes('middle') && placement.includes('center')
    } as Record<string, boolean>;
  });

  ngOnInit(): void {
    this.stateToasterSubscribe();
  }

  public addToast(
    toast: any,
    props: any,
    options?: {
      index?: number;
      injector?: Injector;
      ngModuleRef?: NgModuleRef<unknown>;
      projectableNodes?: Node[][];
    }
  ): ComponentRef<any> {
    const componentRef: ComponentRef<any> = this.toasterHost().viewContainerRef.createComponent(toast, options);
    this.toastsDynamic.push(componentRef);
    const index = this.toastsDynamic.indexOf(componentRef);
    for (const [key, value] of Object.entries(props)) {
      componentRef.setInput(key, value);
    }
    componentRef.setInput('placement', this.placement);
    componentRef.setInput('dynamic', true);
    componentRef.setInput('index', index);
    componentRef.setInput('visible', true);
    componentRef.instance['visibleChange']?.emit(true);
    componentRef.changeDetectorRef?.detectChanges();
    return componentRef;
  }

  public removeToast(state: IToasterAction): void {
    this.toastsDynamic?.forEach((item) => {
      if (state.toast?.dynamic() && item.instance === state.toast) {
        item.setInput('visible', false);
        item.instance['visibleChange'].emit(false);
        item.destroy();
      }
    });
    this.contentToasts()?.forEach((item) => {
      if (state.toast && item.element.nativeElement === state.toast.hostElement.nativeElement) {
        if (!state.toast.dynamic()) {
          state.toast.visible = false;
        }
      }
    });
  }

  private stateToasterSubscribe(): void {
    this.#toasterService.toasterState$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((state) => {
      if (state.show === false) {
        this.removeToast(state);
      }
      // if (state.show === true && state.toast?.dynamic() === undefined) {
      //   /* empty */
      // }
    });
  }
}
