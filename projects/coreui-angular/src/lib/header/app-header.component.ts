import { Component, Input, OnInit, OnDestroy, Inject, Renderer2, HostBinding, DOCUMENT } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AsideToggleDirective, HtmlAttributesDirective, SidebarToggleDirective } from '../shared';

@Component({
  selector: 'app-header, cui-header',
  templateUrl: './app-header.component.html',
  standalone: true,
  imports: [RouterLink, NgClass, SidebarToggleDirective, HtmlAttributesDirective, AsideToggleDirective]
})
export class AppHeaderComponent implements OnInit, OnDestroy {

  @Input() fixed?: boolean;

  @Input() navbarBrand: any;
  @Input() navbarBrandFull: any;
  @Input() navbarBrandMinimized: any;
  @Input() navbarBrandText: any = { icon: '🅲', text: '🅲 CoreUI' };
  @Input() navbarBrandHref = ''; // deprecated, use navbarBrandRouterLink instead
  @Input() navbarBrandRouterLink: any[] | string = '';

  @Input() sidebarToggler: string | boolean = 'lg';
  @Input() mobileSidebarToggler = true;

  @Input() asideMenuToggler: string | boolean = 'lg';
  @Input() mobileAsideMenuToggler = true;

  private readonly fixedClass = 'header-fixed';

  @HostBinding('class.app-header') appHeaderClass = true;
  @HostBinding('class.navbar') navbarClass = true;

  navbarBrandImg!: boolean;

  private readonly breakpoints = ['xl', 'lg', 'md', 'sm', 'xs'];
  sidebarTogglerClass = 'd-none d-md-block';
  sidebarTogglerMobileClass = 'd-lg-none';
  asideTogglerClass = 'd-none d-md-block';
  asideTogglerMobileClass = 'd-lg-none';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.isFixed(this.fixed);
    this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
    this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : this.navbarBrandHref;
    this.sidebarTogglerClass = this.setTogglerBreakpointClass(this.sidebarToggler as string);
    this.sidebarTogglerMobileClass = this.setTogglerMobileBreakpointClass(this.sidebarToggler as string);
    this.asideTogglerClass = this.setTogglerBreakpointClass(this.asideMenuToggler as string);
    this.asideTogglerMobileClass = this.setTogglerMobileBreakpointClass(this.asideMenuToggler as string);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, this.fixedClass);
  }

  isFixed(fixed = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, this.fixedClass);
    }
  }

  setTogglerBreakpointClass(breakpoint = 'md') {
    let togglerClass = 'd-none d-md-block';
    if (this.breakpoints.includes(breakpoint)) {
      const breakpointIndex = this.breakpoints.indexOf(breakpoint);
      togglerClass = `d-none d-${breakpoint}-block`;
    }
    return togglerClass;
  }

  setTogglerMobileBreakpointClass(breakpoint = 'lg') {
    let togglerClass = 'd-lg-none';
    if (this.breakpoints.includes(breakpoint)) {
      togglerClass = `d-${breakpoint}-none`;
    }
    return togglerClass;
  }
}
