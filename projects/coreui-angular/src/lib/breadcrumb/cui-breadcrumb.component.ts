import { Component, Input, OnDestroy, OnInit, Renderer2, DOCUMENT, inject } from '@angular/core';
import { NgClass, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { AppBreadcrumbService, IBreadcrumb } from './app-breadcrumb.service';

@Component({
    selector: 'cui-breadcrumb',
    templateUrl: './cui-breadcrumb.component.html',
    imports: [NgClass, RouterLink, AsyncPipe]
})
export class CuiBreadcrumbComponent implements OnInit, OnDestroy {
  private document = inject<Document>(DOCUMENT);
  private renderer = inject(Renderer2);
  service = inject(AppBreadcrumbService);

  @Input() fixed?: boolean;

  public breadcrumbs?: Observable<IBreadcrumb[]>;
  private readonly fixedClass = 'breadcrumb-fixed';

  public ngOnInit(): void {
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
