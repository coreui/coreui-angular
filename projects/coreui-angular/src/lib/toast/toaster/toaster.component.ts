import {
  AfterContentChecked,
  Component,
  ComponentRef,
  ContentChildren,
  DestroyRef,
  ElementRef,
  HostBinding,
  inject,
  Injector,
  Input,
  NgModuleRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
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
  standalone: true,
  imports: [ToasterHostDirective],
  host: { class: 'toaster toast-container' }
})
export class ToasterComponent implements OnInit, AfterContentChecked {
  readonly #destroyRef = inject(DestroyRef);

  constructor(
    private hostElement: ElementRef,
    private renderer: Renderer2,
    private toasterService: ToasterService
  ) {}

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
  @Input() position: string | 'absolute' | 'fixed' | 'static' = 'absolute';

  @ViewChild(ToasterHostDirective, { static: true }) toasterHost!: ToasterHostDirective;
  @ContentChildren(ToastComponent, { read: ViewContainerRef }) contentToasts!: QueryList<ViewContainerRef>;

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
    this.stateToasterSubscribe();
  }

  ngAfterContentChecked(): void {
    this.toasts = this.contentToasts;
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
    const componentRef: ComponentRef<any> = this.toasterHost.viewContainerRef.createComponent(toast, options);
    this.toastsDynamic.push(componentRef);
    const index = this.toastsDynamic.indexOf(componentRef);
    for (const [key, value] of Object.entries(props)) {
      componentRef.setInput(key, value);
    }
    componentRef.setInput('placement', this.placement);
    componentRef.setInput('dynamic', true);
    componentRef.setInput('index', index);
    componentRef.setInput('visible', true);
    componentRef.instance['visibleChange'].emit(true);
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

    this.toasts?.forEach((item) => {
      if (state.toast && item.element.nativeElement === state.toast.hostElement.nativeElement) {
        if (!state.toast.dynamic()) {
          state.toast['visible'] = false;
        }
      }
    });
  }

  private stateToasterSubscribe(): void {
    this.toasterService.toasterState$.pipe(takeUntilDestroyed(this.#destroyRef)).subscribe((state) => {
      if (state.show === false) {
        this.removeToast(state);
      }
      // if (state.show === true && state.toast?.dynamic() === undefined) {
      //   /* empty */
      // }
    });
  }
}
