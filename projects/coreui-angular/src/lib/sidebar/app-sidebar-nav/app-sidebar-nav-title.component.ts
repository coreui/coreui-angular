import { Component, ElementRef, Input, OnInit, Renderer2, inject } from '@angular/core';
import { INavAttributes, INavData } from '../app-sidebar-nav';

@Component({
  selector: 'app-sidebar-nav-title, cui-sidebar-nav-title',
  template: '',
  standalone: true
})
export class AppSidebarNavTitleComponent implements OnInit {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @Input() item: INavData = {};

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

  private addAttribs(attribs: INavAttributes, element: HTMLElement) {
    if (attribs) {
      for (const attr in attribs) {
        const value = attribs[attr];
        if (attr === 'style' && typeof value === 'object') {
          this.setStyle(value as Record<string, string>, element);
        } else if (attr === 'class') {
          this.addClass(value as string | string[], element);
        } else {
          this.setAttrib(attr, value as string, element);
        }
      }
    }
  }

  private setStyle(styles: Record<string, string>, el: HTMLElement) {
    for (const style in styles) {
      this.renderer.setStyle(el, style, styles[style]);
    }
  }

  private addClass(classes: string | string[], el: HTMLElement) {
    const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
    classArray.filter((element) => element.length > 0).forEach(element => {
      this.renderer.addClass(el, element);
    });
  }

  private setAttrib(key: string, value: string, el: HTMLElement) {
    this.renderer.setAttribute(el, key, value);
  }
}
