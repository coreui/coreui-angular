import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SidebarNavHelper} from '../app-sidebar-nav.service';
import {NavigationEnd, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-nav-link-content',
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
  selector: 'app-sidebar-nav-link',
  templateUrl: './app-sidebar-nav-link.component.html',
  providers: [ SidebarNavHelper ]
})
export class AppSidebarNavLinkComponent implements OnInit, OnDestroy {

  protected _item: any;

  @Input()
  set item(item: any) {
    this._item = JSON.parse(JSON.stringify(item));
  }
  get item(): any {
    return this._item;
  }

  @Output() linkClick = new EventEmitter();

  public linkType: string;
  public href: string;
  public linkActive: boolean;

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
    this.linkType = this.getLinkType();
    this.href = this.isDisabled() ? '' : (this.item.href || this.item.url);
    this.linkActive = this.router.url.split(/[?#(]/)[0] === this.item.url.split(/[?#(]/)[0];
    this.navSubscription = this.navigationEndObservable.subscribe(event => {
      const itemUrlArray = this.item.url.split(/[?#(]/)[0].split('/');
      const urlArray = event.urlAfterRedirects.split(/[?#(]/)[0].split('/');
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
    const linkPath = Array.isArray(this.item.url) ? this.item.url[0] : this.item.url;
    return !!this.item.href || linkPath.substring(0, 4) === 'http';
  }

  linkClicked() {
    this.linkClick.emit();
  }
}
