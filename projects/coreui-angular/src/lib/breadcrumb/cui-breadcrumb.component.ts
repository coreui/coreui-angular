import { Component, Inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT, NgIf, NgClass, AsyncPipe, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

import { AppBreadcrumbService } from './app-breadcrumb.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cui-breadcrumb',
  templateUrl: './cui-breadcrumb.component.html',
  standalone: true,
  imports: [NgIf, NgClass, RouterLink, AsyncPipe, NgForOf]
})
export class CuiBreadcrumbComponent implements OnInit, OnDestroy {
  @Input() fixed?: boolean;

  public breadcrumbs?: Observable<any[]>;
  private readonly fixedClass = 'breadcrumb-fixed';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public service: AppBreadcrumbService,
  ) { }

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
