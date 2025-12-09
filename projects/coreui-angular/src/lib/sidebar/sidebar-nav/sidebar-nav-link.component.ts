import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, input, OnDestroy, OnInit, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { IconDirective } from '@coreui/icons-angular';
// import {SidebarService} from '../sidebar.service';
import { HtmlAttributesDirective } from '../../shared';
import { SidebarNavHelper } from './sidebar-nav.service';
import { INavData } from './sidebar-nav';
import { SidebarNavLinkPipe } from './sidebar-nav-link.pipe';
import { SidebarNavBadgePipe } from './sidebar-nav-badge.pipe';
import { SidebarNavIconPipe } from './sidebar-nav-icon.pipe';

@Component({
  selector: 'c-sidebar-nav-link-content',
  template: `
    @let itemLinkContent = item();
    @if (itemLinkContent) {
      <ng-container>{{ itemLinkContent?.name ?? '' }}</ng-container>
    }
  `,
  providers: [SidebarNavHelper]
})
export class SidebarNavLinkContentComponent {
  readonly helper = inject(SidebarNavHelper);

  readonly item = input<INavData>({});
}

@Component({
  selector: 'c-sidebar-nav-link',
  templateUrl: './sidebar-nav-link.component.html',
  providers: [SidebarNavHelper],
  imports: [
    RouterModule,
    HtmlAttributesDirective,
    IconDirective,
    SidebarNavLinkContentComponent,
    SidebarNavLinkPipe,
    SidebarNavBadgePipe,
    SidebarNavIconPipe,
    NgTemplateOutlet
  ]
})
export class SidebarNavLinkComponent implements OnInit, OnDestroy {
  readonly router = inject(Router);

  readonly item = input<INavData>();

  readonly linkClick = output();

  public linkType!: string;
  public href!: string;
  public linkActive!: boolean;
  private url!: string;

  private navigationEndObservable: Observable<NavigationEnd>;
  private navSubscription!: Subscription;

  constructor() {
    const router = this.router;

    this.navigationEndObservable = router.events.pipe(
      filter((event) => {
        return event instanceof NavigationEnd;
      }),
      takeUntilDestroyed()
    ) as Observable<NavigationEnd>;
  }

  ngOnInit(): void {
    const item = this.item() ?? {};
    this.url =
      typeof item.url === 'string'
        ? item.url
        : this.router.serializeUrl(this.router.createUrlTree((item.url as any[]) ?? ['']));
    this.linkType = this.getLinkType();
    this.href = this.isDisabled() ? '' : item.href || this.url;
    this.linkActive = this.router.url.split(/[?#(;]/)[0] === this.href.split(/[?#(;]/)[0];
    this.navSubscription = this.navigationEndObservable.subscribe((event) => {
      const itemUrlArray = this.href.split(/[?#(;]/)[0].split('/');
      const urlArray = event.urlAfterRedirects.split(/[?#(;]/)[0].split('/');
      this.linkActive = itemUrlArray.every((value, index) => value === urlArray[index]);
    });
  }

  ngOnDestroy(): void {
    this.navSubscription?.unsubscribe();
  }

  public getLinkType(): string {
    return this.isDisabled() ? 'disabled' : this.isExternalLink() ? 'external' : 'link';
  }

  public isDisabled(): boolean {
    return this.item()?.attributes?.['disabled'];
  }

  public isExternalLink(): boolean {
    const item = this.item() ?? {};
    const linkPath = Array.isArray(item.url) ? item.url[0] : item.url;
    return !!item.href || linkPath?.substring(0, 4) === 'http';
  }

  linkClicked(): void {
    this.linkClick?.emit();
  }

  // public hideMobile() {
  //   // todo: proper scrollIntoView() after NavigationEnd
  //   setTimeout(() => {
  //     console.log('scroll')
  //     this.hostElement.nativeElement.scrollIntoView();
  //   }, 1000)
  //   this.sidebarService.toggle({open: false, breakpoint: ''});
  // }
}
