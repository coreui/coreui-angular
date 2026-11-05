import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, DOCUMENT, inject } from '@angular/core';


import { asideMenuCssClasses, sidebarCssClasses } from '../classes';
import { ClassToggler } from '../toggle-classes';

/**
 * Allows the sidebar to be toggled via click.
 */
@Directive({
  selector: '[appSidebarToggler]',
  providers: [ClassToggler],
  standalone: true
})
export class SidebarToggleDirective implements OnInit {
  private classToggler = inject(ClassToggler);

  @Input('appSidebarToggler') breakpoint: string | boolean = false;
  public bp!: string | boolean;
  ngOnInit(): void {
    this.bp = this.breakpoint;
  }
  @HostListener('click', ['$event'])
  toggleOpen($event: Event) {
    $event.preventDefault();
    const cssClass = this.bp ? `sidebar-${this.bp}-show` : sidebarCssClasses[0];
    this.classToggler.toggleClasses(cssClass, sidebarCssClasses);
  }
}

@Directive({
  selector: '[appSidebarMinimizer]',
  standalone: true
})
export class SidebarMinimizeDirective {
  private document = inject<Document>(DOCUMENT);
  private renderer = inject(Renderer2);


  @HostListener('click', ['$event'])
  toggleOpen($event: Event) {
    $event.preventDefault();
    const body = this.document.body;
    if (body.classList.contains('sidebar-minimized')) {
      this.renderer.removeClass(body, 'sidebar-minimized');
    } else {
      this.renderer.addClass(body, 'sidebar-minimized');
    }
  }
}

@Directive({
  selector: '[appMobileSidebarToggler]',
  standalone: true
})
export class MobileSidebarToggleDirective {
  private document = inject<Document>(DOCUMENT);
  private renderer = inject(Renderer2);


  @HostListener('click', ['$event'])
  toggleOpen($event: Event) {
    $event.preventDefault();
    const body = this.document.body;
    if (body.classList.contains('sidebar-show')) {
      this.renderer.removeClass(body, 'sidebar-show');
    } else {
      this.renderer.addClass(body, 'sidebar-show');
    }
  }
}

/**
 * Allows the off-canvas sidebar to be closed via click.
 */
@Directive({
  selector: '[appSidebarClose]',
  standalone: true
})
export class SidebarOffCanvasCloseDirective {
  private document = inject<Document>(DOCUMENT);
  private renderer = inject(Renderer2);


  @HostListener('click', ['$event'])
  toggleOpen($event: Event) {
    $event.preventDefault();

    const body = this.document.body;
    if (body.classList.contains('sidebar-off-canvas')) {
      if (body.classList.contains('sidebar-show')) {
        this.renderer.removeClass(body, 'sidebar-show');
      } else {
        this.renderer.addClass(body, 'sidebar-show');
      }
    }
  }
}

@Directive({
  selector: '[appBrandMinimizer]',
  standalone: true
})
export class BrandMinimizeDirective {
  private document = inject<Document>(DOCUMENT);
  private renderer = inject(Renderer2);


  @HostListener('click', ['$event'])
  toggleOpen($event: Event) {
    $event.preventDefault();
    const body = this.document.body;
    if (body.classList.contains('brand-minimized')) {
      this.renderer.removeClass(body, 'brand-minimized');
    } else {
      this.renderer.addClass(body, 'brand-minimized');
    }
  }
}


/**
 * Allows the aside to be toggled via click.
 */
@Directive({
  selector: '[appAsideMenuToggler]',
  providers: [ClassToggler],
  standalone: true
})
export class AsideToggleDirective implements OnInit {
  private classToggler = inject(ClassToggler);

  @Input('appAsideMenuToggler') breakpoint: string | boolean = false;
  public bp!: string | boolean;
  ngOnInit(): void {
    this.bp = this.breakpoint;
  }
  @HostListener('click', ['$event'])
  toggleOpen($event: Event) {
    $event.preventDefault();
    const cssClass = this.bp ? `aside-menu-${this.bp}-show` : asideMenuCssClasses[0];
    this.classToggler.toggleClasses(cssClass, asideMenuCssClasses);
  }
}

@Directive({
  selector: '[appHtmlAttr]',
  standalone: true
})
export class HtmlAttributesDirective implements OnInit {
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);

  @Input() appHtmlAttr?: Record<string, unknown> = {};

  ngOnInit() {
    const attribs = this.appHtmlAttr;
    for (const attr in attribs) {
      const value = attribs[attr];
      if (attr === 'style' && typeof value === 'object') {
        this.setStyle(value as Record<string, string>);
      } else if (attr === 'class') {
        this.addClass(value as string | string[]);
      } else {
        this.setAttrib(attr, value as string | null);
      }
    }
  }

  private setStyle(styles: Record<string, string>) {
    for (const style in styles) {
      if (style) {
        this.renderer.setStyle(this.el.nativeElement, style, styles[style]);
      }
    }
  }

  private addClass(classes: string | string[]) {
    const classArray = (Array.isArray(classes) ? classes : classes.split(' '));
    classArray.filter((element) => element.length > 0).forEach(element => {
      this.renderer.addClass(this.el.nativeElement, element);
    });
  }

  private setAttrib(key: string, value: string | null) {
    if (value !== null) {
      this.renderer.setAttribute(this.el.nativeElement, key, value);
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, key);
    }
  }
}
