import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {SidebarNavHelper} from '../app-sidebar-nav.service';
import {INavData} from '../app-sidebar-nav';

@Component({
  selector: 'app-sidebar-nav-link-content, cui-sidebar-nav-link-content',
  template: `
    <ng-container *ngIf="true">
      <i *ngIf="helper.hasIcon(item)" [ngClass]="item | appSidebarNavIcon"></i>
      <ng-container>{{item.name}}</ng-container>
      <span *ngIf="helper.hasBadge(item)" [ngClass]="item | appSidebarNavBadge">{{ item.badge.text }}</span>
    </ng-container>
  `,
  providers: [ SidebarNavHelper ]
})
export class AppSidebarNavLinkContentComponent {
  @Input() item: any;

  constructor(
    public helper: SidebarNavHelper
  ) { }
}

@Component({
  selector: 'app-sidebar-nav-link, cui-sidebar-nav-link',
  templateUrl: './app-sidebar-nav-link.component.html',
  providers: [ SidebarNavHelper ]
})
export class AppSidebarNavLinkComponent implements OnInit, OnDestroy {

  protected _item: INavData;

  @Input()
  set item(item: INavData) {
    this._item = JSON.parse(JSON.stringify(item));
  }
  get item(): INavData {
    return this._item;
  }

  @Output() linkClick = new EventEmitter();

  public linkType: string;
  public href: string;
  public linkActive: boolean;
  private url: string;

  private navigationEndObservable: Observable<NavigationEnd>;
  private navSubscription: Subscription;

  constructor (
    public router: Router,
  ) {
    this.navigationEndObservable = router.events.pipe(
      filter(event => {
        return event instanceof NavigationEnd;
      })
    ) as Observable<NavigationEnd>;
  }

  ngOnInit() {
    this.url = typeof this.item.url === 'string' ? this.item.url : this.router.serializeUrl(this.router.createUrlTree(this.item.url)) ;
    this.linkType = this.getLinkType();
    this.href = this.isDisabled() ? '' : (this.item.href || this.url);
    this.linkActive = this.router.url.split(/[?#(;]/)[0] === this.href.split(/[?#(;]/)[0];
    this.navSubscription = this.navigationEndObservable.subscribe(event => {
      const itemUrlArray = this.href.split(/[?#(;]/)[0].split('/');
      const urlArray = event.urlAfterRedirects.split(/[?#(;]/)[0].split('/');
      this.linkActive = itemUrlArray.every((value, index) => value === urlArray[index]);
    });
  }

  ngOnDestroy(): void {
    this.navSubscription.unsubscribe();
  }

  public getLinkType() {
    return this.isDisabled() ? 'disabled' : this.isExternalLink() ? 'external' : 'link';
  }

  public isDisabled() {
    return (this.item.attributes && this.item.attributes.disabled) ? true : null;
  }

  public isExternalLink() {
    return !!this.item.href || this.url.substring(0, 4) === 'http';
  }

  linkClicked() {
    this.linkClick.emit();
  }
}
