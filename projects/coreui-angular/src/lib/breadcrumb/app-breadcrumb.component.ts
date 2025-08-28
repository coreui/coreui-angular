import { Component, ElementRef, Inject, Input, OnDestroy, OnInit, Renderer2, DOCUMENT } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';

import { AppBreadcrumbService } from './app-breadcrumb.service';
import { Replace } from '../shared';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    template: `
    @for (breadcrumb of breadcrumbs | async; track breadcrumb; let last = $last) {
      @if (breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)) {
        <li class="breadcrumb-item"
          [ngClass]="{active: last}">
          @if (!last) {
            <a [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>
          }
          @if (last) {
            <span [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</span>
          }
        </li>
      }
    }
    `,
  imports: [NgClass, RouterLink, AsyncPipe]
})
export class AppBreadcrumbComponent implements OnInit, OnDestroy {
  @Input() fixed?: boolean;
  public breadcrumbs?: Observable<any>;
  private readonly fixedClass = 'breadcrumb-fixed';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public service: AppBreadcrumbService,
    public el: ElementRef
  ) { }

  public ngOnInit(): void {
    Replace(this.el);
    this.isFixed(this.fixed);
    this.breadcrumbs = this.service.breadcrumbs;
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, this.fixedClass);
  }

  isFixed(fixed = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.document.body, this.fixedClass);
    }
  }
}
