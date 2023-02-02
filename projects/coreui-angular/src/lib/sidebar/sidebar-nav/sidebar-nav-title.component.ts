import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'c-sidebar-nav-title',
  template: '',
  standalone: true
})
export class SidebarNavTitleComponent implements OnInit {
  @Input() item: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const name = this.renderer.createText(this.item.name);

    if ( this.item.class ) {
      const classes = this.item.class;
      this.renderer.addClass(nativeElement, classes);
    }

    if ( this.item.wrapper ) {
      const wrapper = this.renderer.createElement(this.item.wrapper.element);
      this.addAttribs(this.item.wrapper.attributes, wrapper);
      this.renderer.appendChild(wrapper, name);
      this.renderer.appendChild(nativeElement, wrapper);
    } else {
      this.renderer.appendChild(nativeElement, name);
    }
  }

  private addAttribs(attribs: { [x: string]: any; }, element: any): void {
    if (attribs) {
      for (const attr in attribs) {
        if (attr === 'style' && typeof(attribs[attr]) === 'object' ) {
          this.setStyle(attribs[attr], element);
        } else if (attr === 'class') {
          this.addClass(attribs[attr], element);
        } else {
          this.setAttrib(attr, attribs[attr], element);
        }
      }
    }
  }

  private setStyle(styles: { [x: string]: any; }, el: any): void {
    for (const style in styles) {
      if (style) {
        this.renderer.setStyle(el, style, styles[style]);
      }
    }
  }

  private addClass(classes: string | Array<string>, el: any): void {
    const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
    classArray.filter((element) => element.length > 0).forEach(element => {
      this.renderer.addClass(el, element );
    });
  }

  private setAttrib(key: string, value: string, el: any): void {
    this.renderer.setAttribute(el, key, value );
  }
}
