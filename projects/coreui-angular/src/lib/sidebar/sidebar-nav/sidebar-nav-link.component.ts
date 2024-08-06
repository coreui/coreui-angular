import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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
    @if (true) {
      <ng-container>{{ item?.name ?? '' }}</ng-container>
    }
  `,
  providers: [SidebarNavHelper],
  standalone: true
})
export class SidebarNavLinkContentComponent {
  @Input() item?: INavData;

  constructor(public helper: SidebarNavHelper) {}
}

@Component({
  selector: 'c-sidebar-nav-link',
  templateUrl: './sidebar-nav-link.component.html',
  providers: [SidebarNavHelper],
  standalone: true,
  imports: [
    RouterModule,
    HtmlAttributesDirective,
    IconDirective,
    SidebarNavLinkContentComponent,
    SidebarNavLinkPipe,
    SidebarNavBadgePipe,
    SidebarNavIconPipe,
    NgTemplateOutlet,
    NgClass
  ]
})
export class SidebarNavLinkComponent implements OnInit, OnDestroy {
  protected _item: INavData = {};

  @Input()
  set item(item: INavData) {
    this._item = JSON.parse(JSON.stringify(item));
  }

  get item(): INavData {
    return this._item;
  }

  @Output() linkClick = new EventEmitter();

  public linkType!: string;
  public href!: string;
  public linkActive!: boolean;
  private url!: string;

  private navigationEndObservable: Observable<NavigationEnd>;
  private navSubscription!: Subscription;

  constructor(
    public router: Router
    // private renderer: Renderer2,
    // private hostElement: ElementRef,
    // private sidebarService: SidebarService
  ) {
    this.navigationEndObservable = router.events.pipe(
      filter((event) => {
        return event instanceof NavigationEnd;
      })
    ) as Observable<NavigationEnd>;
  }

  ngOnInit(): void {
    this.url =
      typeof this.item.url === 'string'
        ? this.item.url
        : this.router.serializeUrl(this.router.createUrlTree(this.item.url as any[]));
    this.linkType = this.getLinkType();
    this.href = this.isDisabled() ? '' : this.item.href || this.url;
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
    return this.item?.attributes?.['disabled'];
  }

  public isExternalLink(): boolean {
    const linkPath = Array.isArray(this.item.url) ? this.item.url[0] : this.item.url;
    return !!this.item.href || linkPath.substring(0, 4) === 'http';
  }

  linkClicked(): void {
    this.linkClick.emit();
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
