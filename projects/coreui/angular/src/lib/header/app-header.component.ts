import {Component, ElementRef, Input, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Replace } from '../shared';

@Component({
  selector: 'app-header',
  template: `
    <header class="app-header navbar">
      <ng-template [ngIf]="mobileSidebarToggler != false">
        <button class="navbar-toggler d-lg-none" type="button" appSidebarToggler>
          <span class="navbar-toggler-icon"></span>
        </button>
      </ng-template>
        <a class="navbar-brand" [href]="navbarBrandHref">
          <ng-template [ngIf]="navbarBrandImg">
          <img *ngIf="navbarBrand"
               [appHtmlAttr]="navbarBrand"
               [ngClass]="'navbar-brand'">
          <img *ngIf="navbarBrandFull"
               [appHtmlAttr]="navbarBrandFull"
               [ngClass]="'navbar-brand-full'">
          <img *ngIf="navbarBrandMinimized"
               [appHtmlAttr]="navbarBrandMinimized"
               [ngClass]="'navbar-brand-minimized'">
          </ng-template>
          <ng-template [ngIf]="!navbarBrandImg">
            <div class="navbar-brand-full" [innerHTML]="navbarBrandText.text"></div>
            <div class="navbar-brand-minimized" [innerHTML]="navbarBrandText.icon"></div>
          </ng-template>
        </a>
      <ng-template [ngIf]="sidebarToggler != false">
        <button class="navbar-toggler d-md-down-none" type="button" [appSidebarToggler]="sidebarToggler">
          <span class="navbar-toggler-icon"></span>
        </button>
      </ng-template>
      <ng-content></ng-content>
      <ng-template [ngIf]="asideMenuToggler != false">
        <button class="navbar-toggler d-md-down-none" type="button" [appAsideMenuToggler]="asideMenuToggler">
          <span class="navbar-toggler-icon"></span>
        </button>
      </ng-template>
      <ng-template [ngIf]="mobileAsideMenuToggler != false">
        <button class="navbar-toggler d-lg-none" type="button" appAsideMenuToggler>
          <span class="navbar-toggler-icon"></span>
        </button>
      </ng-template>
    </header>
  `
})
export class AppHeaderComponent implements OnInit, OnDestroy {

  @Input() fixed: boolean;

  @Input() navbarBrand: any;
  @Input() navbarBrandFull: any;
  @Input() navbarBrandMinimized: any;
  @Input() navbarBrandText: any = {icon: '🅲', text: '🅲 CoreUI'};
  @Input() navbarBrandHref: any = '';

  @Input() sidebarToggler: any;
  @Input() mobileSidebarToggler: any;

  @Input() asideMenuToggler: any;
  @Input() mobileAsideMenuToggler: any;

  private readonly fixedClass = 'header-fixed';
  navbarBrandImg: boolean;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    Replace(this.el);
    this.isFixed(this.fixed);
    this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, this.fixedClass);
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, this.fixedClass);
    }
  }
}
