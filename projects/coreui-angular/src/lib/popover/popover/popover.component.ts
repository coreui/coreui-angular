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
  selector: 'c-popover',
  templateUrl: './popover.component.html',
})
export class PopoverComponent implements AfterViewInit, OnChanges, OnDestroy {

  /**
   * Content of popover
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

  @ViewChild('popoverTemplate', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;
  private textNode!: Text;

  constructor(
    private renderer: Renderer2
  ) { }

  @HostBinding('class')
  get hostClasses(): { [klass: string]: any; } {
    return {
      popover: true,
      fade: true,
      show: this.visible,
      'bs-popover-auto': true
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
      const popoverBody = this.renderer.createElement('div');
      this.renderer.addClass(popoverBody, 'popover-body');
      this.renderer.appendChild(popoverBody, this.textNode);

      const element = this.viewContainerRef.element.nativeElement;
      this.renderer.appendChild(element.parentNode, popoverBody);
    }
  }
}
