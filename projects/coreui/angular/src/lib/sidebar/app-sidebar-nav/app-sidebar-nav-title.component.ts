import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import { INavAttributes, INavData } from '../app-sidebar-nav';

@Component({
  selector: 'app-sidebar-nav-title, cui-sidebar-nav-title',
  template: '',
})
export class AppSidebarNavTitleComponent implements OnInit {
  @Input() item: INavData = {};

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
  }

  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const name = this.renderer.createText(this.item.name as string);

    if (this.item.class) {
      const classes = this.item.class;
      this.renderer.addClass(nativeElement, classes);
    }

    if (this.item.wrapper) {
      const wrapper = this.renderer.createElement(this.item.wrapper.element);
      this.addAttribs(this.item.wrapper.attributes, wrapper);
      this.renderer.appendChild(wrapper, name);
      this.renderer.appendChild(nativeElement, wrapper);
    } else {
      this.renderer.appendChild(nativeElement, name);
    }
  }

  private addAttribs(attribs: INavAttributes, element: any) {
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

  private setStyle(styles: { [x: string]: any; }, el: any) {
    for (const style in styles) {
      this.renderer.setStyle(el, style, styles[style] );
    }
  }

  private addClass(classes: string | string[], el: any) {
    const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
    classArray.filter((element) => element.length > 0).forEach(element => {
      this.renderer.addClass(el, element );
    });
  }

  private setAttrib(key: string, value: string, el: any) {
    this.renderer.setAttribute(el, key, value );
  }
}
