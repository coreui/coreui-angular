import {
  AfterViewInit,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'c-tooltip',
  templateUrl: './tooltip.component.html'
})
export class TooltipComponent implements AfterViewInit, OnChanges, OnDestroy {

  /**
   * Content of tooltip
   * @type {string | TemplateRef}
   */
  @Input() content: string | TemplateRef<any> = '';
  /**
   * Toggle the visibility of popover component.
   * @type boolean
   */
  @Input() visible = false;
  @Input() @HostBinding('attr.id') id?: string;
  @Input() @HostBinding('attr.role') role = 'tooltip';

  @ViewChild('tooltipTemplate', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;
  private textNode!: Text;

  constructor(
    private renderer: Renderer2
  ) { }

  @HostBinding('class')
  get hostClasses(): { [klass: string]: any; } {
    return {
      tooltip: true,
      fade: true,
      show: this.visible,
      'bs-tooltip-auto': true
    };
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateView(this.content);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['content']) {
      setTimeout(() => {
        this.updateView(this.content);
      });
    }
  }

  ngOnDestroy(): void {
    this.clear();
  }

  private clear(): void {
    this.viewContainerRef?.clear();
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
      this.viewContainerRef.createEmbeddedView(content);
    } else {
      this.textNode = this.renderer.createText(content);

      const element = this.viewContainerRef.element.nativeElement;
      this.renderer.appendChild(element.parentNode, this.textNode);
    }
  }
}
