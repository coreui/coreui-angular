import {Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

import { asideMenuCssClasses, sidebarCssClasses } from '../classes';
import { ClassToggler } from '../toggle-classes';

/**
* Allows the sidebar to be toggled via click.
*/
@Directive({
  selector: '[appSidebarToggler]',
  providers: [ClassToggler]
})
export class SidebarToggleDirective implements OnInit {
  @Input('appSidebarToggler') breakpoint: string;
  public bp;
  constructor(private classToggler: ClassToggler) {}
  ngOnInit(): void {
    this.bp = this.breakpoint;
  }
  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    const cssClass = this.bp ? `sidebar-${this.bp}-show` : sidebarCssClasses[0];
    this.classToggler.toggleClasses(cssClass, sidebarCssClasses);
  }
}

@Directive({
  selector: '[appSidebarMinimizer]'
})
export class SidebarMinimizeDirective {
  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
  ) { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    const body = this.document.body;
    body.classList.contains('sidebar-minimized') ?
      this.renderer.removeClass(body, 'sidebar-minimized') :
      this.renderer.addClass(body, 'sidebar-minimized');
  }
}

@Directive({
  selector: '[appMobileSidebarToggler]'
})
export class MobileSidebarToggleDirective {
  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
  ) { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    const body = this.document.body;
    body.classList.contains('sidebar-show') ?
      this.renderer.removeClass(body, 'sidebar-show') :
      this.renderer.addClass(body, 'sidebar-show');
  }
}

/**
* Allows the off-canvas sidebar to be closed via click.
*/
@Directive({
  selector: '[appSidebarClose]'
})
export class SidebarOffCanvasCloseDirective {
  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
  ) { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();

    const body = this.document.body;
    if (body.classList.contains('sidebar-off-canvas')) {
      body.classList.contains('sidebar-show') ?
        this.renderer.removeClass(body, 'sidebar-show') :
        this.renderer.addClass(body, 'sidebar-show');
    }
  }
}

@Directive({
  selector: '[appBrandMinimizer]'
})
export class BrandMinimizeDirective {
  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
  ) { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    const body = this.document.body;
    body.classList.contains('brand-minimized') ?
      this.renderer.removeClass(body, 'brand-minimized') :
      this.renderer.addClass(body, 'brand-minimized');
  }
}


/**
* Allows the aside to be toggled via click.
*/
@Directive({
  selector: '[appAsideMenuToggler]',
  providers: [ClassToggler]
})
export class AsideToggleDirective implements OnInit {
  @Input('appAsideMenuToggler') breakpoint: string;
  public bp;
  constructor(private classToggler: ClassToggler) {}
  ngOnInit(): void {
    this.bp = this.breakpoint;
  }
  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    const cssClass = this.bp ? `aside-menu-${this.bp}-show` : asideMenuCssClasses[0];
    this.classToggler.toggleClasses(cssClass, asideMenuCssClasses);
  }
}

@Directive({
  selector: '[appHtmlAttr]'
})
export class HtmlAttributesDirective implements OnInit {
  @Input() appHtmlAttr: {[key: string]: string };

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    const attribs = this.appHtmlAttr;
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

  private setStyle(styles) {
    for (const style in styles) {
      this.renderer.setStyle(this.el.nativeElement, style, styles[style] );
    }
  }

  private addClass(classes) {
    const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
    classArray.filter((element) => element.length > 0).forEach(element => {
      this.renderer.addClass(this.el.nativeElement, element );
    });
  }

  private setAttrib(key, value) {
    value !== null ?
      this.renderer.setAttribute(this.el.nativeElement, key, value ) :
      this.renderer.removeAttribute(this.el.nativeElement, key);
  }
}
