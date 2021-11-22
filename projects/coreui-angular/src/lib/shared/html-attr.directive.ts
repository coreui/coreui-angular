import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[cHtmlAttr]',
  exportAs: 'cHtmlAttr'
})
export class HtmlAttributesDirective implements OnInit {

  // @ts-ignore
  @Input() cHtmlAttr: {[key: string]: any };

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    const attribs = this.cHtmlAttr;
    for (const attr in attribs) {
      if (attr === 'style' && typeof(attribs[attr]) === 'object' ) {
        this.setStyle(attribs[attr]);
      } else if (attr === 'class') {
        this.addClass(attribs[attr]);
      } else {
        this.setAttrib(attr, attribs[attr]);
      }
    }
  }

  private setStyle(styles: { [x: string]: any; }): void {
    for (const style in styles) {
      if (style) {
        this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
      }
    }
  }

  private addClass(classes: string): void {
    const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
    classArray.filter((element) => element.length > 0).forEach(element => {
      this.renderer.addClass(this.el.nativeElement, element );
    });
  }

  private setAttrib(key: string, value: string | null): void {
    value !== null ?
      this.renderer.setAttribute(this.el.nativeElement, key, value ) :
      this.renderer.removeAttribute(this.el.nativeElement, key);
  }
}
