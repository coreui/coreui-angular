import {
  computed,
  Directive,
  effect,
  inject,
  InputSignal,
  InputSignalWithTransform,
  OnDestroy,
  Renderer2,
  TemplateRef,
  viewChild,
  ViewContainerRef
} from '@angular/core';

@Directive()
export abstract class TooltipComponentBase implements OnDestroy {
  readonly renderer = inject(Renderer2);

  protected abstract readonly prefix: string;

  abstract readonly content: InputSignal<string | TemplateRef<unknown>>;
  abstract readonly visible: InputSignalWithTransform<boolean, unknown>;

  readonly #contentEffect = effect(() => {
    this.updateView(this.content());
  });

  readonly viewContainerRef = viewChild('contentAnchor', { read: ViewContainerRef });
  private textNode!: Node;

  readonly hostClasses = computed(() => {
    return {
      [this.prefix]: true,
      fade: true,
      show: this.visible(),
      [`bs-${this.prefix}-auto`]: true
    } as Record<string, boolean>;
  });

  ngOnDestroy(): void {
    this.clear();
  }

  protected createTextNode(content: string): Node {
    return this.renderer.createText(content);
  }

  private clear(): void {
    this.viewContainerRef()?.clear();
    if (!!this.textNode) {
      this.renderer.removeChild(this.textNode.parentNode, this.textNode);
    }
  }

  private updateView(content: string | TemplateRef<unknown>): void {
    this.clear();

    if (!content) {
      return;
    }

    if (content instanceof TemplateRef) {
      this.viewContainerRef()?.createEmbeddedView(content);
    } else {
      this.textNode = this.createTextNode(content);

      const element = this.viewContainerRef()?.element.nativeElement;
      this.renderer.appendChild(element.parentNode, this.textNode);
    }
  }
}
