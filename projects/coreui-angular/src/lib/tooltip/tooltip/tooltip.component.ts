import {
  booleanAttribute,
  Component,
  computed,
  effect,
  inject,
  input,
  OnDestroy,
  Renderer2,
  TemplateRef,
  viewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'c-tooltip',
  templateUrl: './tooltip.component.html',
  host: {
    class: 'tooltip fade bs-tooltip-auto',
    '[class]': 'hostClasses()',
    '[attr.role]': 'role()',
    '[attr.id]': 'id()'
  }
})
export class TooltipComponent implements OnDestroy {
  readonly renderer = inject(Renderer2);

  /**
   * Content of tooltip
   * @returns {string | TemplateRef}
   */
  readonly content = input<string | TemplateRef<any>>('');

  readonly #contentEffect = effect(() => {
    this.updateView(this.content());
  });

  /**
   * Toggle the visibility of popover component.
   * @returns boolean
   */
  readonly visible = input(false, { transform: booleanAttribute });

  /**
   * The `id` HTML attribute of the tooltip.
   * @returns string
   */
  readonly id = input<string>();

  /**
   * Default role for tooltip.
   * @returns string
   * @default 'tooltip'
   */
  readonly role = input('tooltip');

  readonly viewContainerRef = viewChild('tooltipTemplate', { read: ViewContainerRef });
  private textNode!: Text;

  readonly hostClasses = computed(() => {
    return {
      tooltip: true,
      fade: true,
      show: this.visible(),
      'bs-tooltip-auto': true
    } as Record<string, boolean>;
  });

  ngOnDestroy(): void {
    this.clear();
  }

  private clear(): void {
    this.viewContainerRef()?.clear();
    if (!!this.textNode) {
      this.renderer.removeChild(this.textNode.parentNode, this.textNode);
    }
  }

  private updateView(content: string | TemplateRef<any>): void {
    this.clear();

    if (!content) {
      return;
    }

    if (content instanceof TemplateRef) {
      this.viewContainerRef()?.createEmbeddedView(content);
    } else {
      this.textNode = this.renderer.createText(content);

      const element = this.viewContainerRef()?.element.nativeElement;
      this.renderer.appendChild(element.parentNode, this.textNode);
    }
  }
}
