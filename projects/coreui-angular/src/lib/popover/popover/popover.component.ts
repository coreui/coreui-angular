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
import { NgClass } from '@angular/common';

@Component({
  selector: 'c-popover',
  templateUrl: './popover.component.html',
  standalone: true,
  imports: [NgClass],
  host: {
    class: 'popover fade bs-popover-auto',
    '[class]': 'hostClasses()',
    '[attr.role]': 'role()',
    '[attr.id]': 'id()'
  }
})
export class PopoverComponent implements OnDestroy {
  readonly renderer = inject(Renderer2);

  /**
   * Content of popover
   * @type {string | TemplateRef}
   */
  readonly content = input<string | TemplateRef<any>>('');

  readonly contentEffect = effect(() => {
    this.updateView(this.content());
  });

  /**
   * Toggle the visibility of popover component.
   * @type boolean
   */
  readonly visible = input(false, { transform: booleanAttribute });
  readonly id = input<string>();
  readonly role = input('tooltip');

  readonly viewContainerRef = viewChild('popoverTemplate', { read: ViewContainerRef });
  private textNode!: Text;

  readonly hostClasses = computed<Record<string, boolean>>(() => {
    return {
      popover: true,
      fade: true,
      show: this.visible(),
      'bs-popover-auto': true
    };
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
      const textNodeContent = this.renderer.createText(content);
      this.textNode = this.renderer.createElement('div');
      this.renderer.addClass(this.textNode, 'popover-body');
      this.renderer.appendChild(this.textNode, textNodeContent);

      const element = this.viewContainerRef()?.element.nativeElement;
      this.renderer.appendChild(element.parentNode, this.textNode);
    }
  }
}
