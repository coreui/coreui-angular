import {
  AfterContentChecked,
  Component,
  ComponentRef,
  ContentChildren,
  ElementRef,
  HostBinding,
  Injector,
  Input,
  NgModuleRef,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Subscription } from 'rxjs';

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
  BottomEnd = 'bottom-end',
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
  standalone: true,
  imports: [ToasterHostDirective]
})
export class ToasterComponent implements OnDestroy, OnInit, AfterContentChecked {

  stateToasterSubscription!: Subscription;
  placements = Object.values(ToasterPlacement);
  toasts!: QueryList<ViewContainerRef>;
  toastsDynamic: any[] = [];

  /**
   * Toaster placement
   * @type TToasterPlacement
   */
  @Input() placement: TToasterPlacement = ToasterPlacement.TopEnd;

  /**
   * Toaster position
   * @type (string | 'absolute' | 'fixed' | 'static')
   */
  @Input() position: (string | 'absolute' | 'fixed' | 'static') = 'absolute';

  @ViewChild(ToasterHostDirective, { static: true }) toasterHost!: ToasterHostDirective;
  @ContentChildren(ToastComponent, { read: ViewContainerRef }) contentToasts!: QueryList<ViewContainerRef>;

  constructor(
    private hostElement: ElementRef,
    private renderer: Renderer2,
    private toasterService: ToasterService
  ) { }

  @HostBinding('class')
  get hostClasses(): any {
    return {
      toaster: true,
      'toast-container': true,
      [`position-${this.position}`]: !!this.position,
      'top-0': this.placement.includes('top'),
      'top-50': this.placement.includes('middle'),
      'bottom-0': this.placement.includes('bottom'),
      'start-0': this.placement.includes('start'),
      'start-50': this.placement.includes('center'),
      'end-0': this.placement.includes('end'),
      'translate-middle-x': this.placement.includes('center') && !this.placement.includes('middle'),
      'translate-middle-y': this.placement.includes('middle') && !this.placement.includes('center'),
      'translate-middle': this.placement.includes('middle') && this.placement.includes('center')
    };
  }

  ngOnInit(): void {
    this.stateToasterSubscribe(true);
  }

  ngOnDestroy(): void {
    this.stateToasterSubscribe(false);
  }

  ngAfterContentChecked(): void {
    this.toasts = this.contentToasts;
  }

  addToast(toast: any, props: any, options?: {
    index?: number;
    injector?: Injector;
    ngModuleRef?: NgModuleRef<unknown>;
    projectableNodes?: Node[][];
  }): ComponentRef<any> {
    const componentRef: ComponentRef<any> = this.toasterHost.viewContainerRef.createComponent(toast, options);
    this.toastsDynamic.push(componentRef);
    const index = this.toastsDynamic.indexOf(componentRef);
    for (const [key, value] of Object.entries(props)) {
      componentRef.instance[key] = value;
    }
    componentRef.instance['placement'] = this.placement;
    componentRef.instance['dynamic'] = true;
    componentRef.instance['index'] = index;
    componentRef.instance['visible'] = true;
    componentRef.instance['visibleChange'].emit(true);
    componentRef.changeDetectorRef?.detectChanges();
    return componentRef;
  }

  removeToast(state: IToasterAction): void {
    this.toastsDynamic?.forEach(item => {
      if (state.toast?.dynamic && (item.instance === state.toast)) {
        item.instance.visible = false;
        item.instance['visibleChange'].emit(false);
        setTimeout(() => {
          item.destroy();
        }, 300);
      }
    });

    this.toasts?.forEach(item => {
      if (item.element.nativeElement === state.toast?.hostElement.nativeElement) {
        if (!state.toast?.dynamic) {
          // @ts-ignore
          state.toast.visible = false;
        }
      }
    });
  }

  private stateToasterSubscribe(subscribe: boolean = true): void {
    if (subscribe) {
      this.stateToasterSubscription = this.toasterService.toasterState$.subscribe((state) => {
        if (state.show === false) {
          this.removeToast(state);
        }
        if (state.show === true && state.toast?.dynamic === undefined) {
        }
      });
    } else {
      this.stateToasterSubscription?.unsubscribe();
    }
  }
}
