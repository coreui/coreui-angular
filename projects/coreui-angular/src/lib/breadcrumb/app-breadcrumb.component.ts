import { Component, ElementRef, Inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import {AsyncPipe, DOCUMENT, NgClass, NgForOf, NgIf} from '@angular/common';

import { AppBreadcrumbService } from './app-breadcrumb.service';
import { Replace } from '../shared';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    template: `
    <ng-template ngFor let-breadcrumb [ngForOf]="breadcrumbs | async" let-last = last>
      <li class="breadcrumb-item"
          *ngIf="breadcrumb.label.title && (breadcrumb.url.slice(-1) == '/' || last)"
          [ngClass]="{active: last}">
        <a *ngIf="!last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>
        <span *ngIf="last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</span>
      </li>
    </ng-template>
  `,
  imports: [NgIf, NgClass, RouterLink, NgForOf, AsyncPipe]
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
