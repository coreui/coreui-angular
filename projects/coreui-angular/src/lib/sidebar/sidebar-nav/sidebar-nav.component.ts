import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import {
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet
} from '@angular/common';
import {
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { SidebarService } from '../sidebar.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { INavData } from './sidebar-nav';
import { SidebarNavHelper } from './sidebar-nav.service';
import { SidebarNavGroupService } from './sidebar-nav-group.service';
import { HtmlAttributesDirective } from '../../shared';
import { IconModule } from '@coreui/icons-angular';
import { SidebarNavIconPipe } from './sidebar-nav-icon.pipe';
import { SidebarNavBadgePipe } from './sidebar-nav-badge.pipe';
import { SidebarNavLinkComponent } from './sidebar-nav-link.component';
import { SidebarNavLabelComponent } from './sidebar-nav-label.component';
import { SidebarNavTitleComponent } from './sidebar-nav-title.component';
import { SidebarNavDividerComponent } from './sidebar-nav-divider.component';
import { SidebarNavItemClassPipe } from './sidebar-nav-item-class.pipe';

@Component({
  selector: 'c-sidebar-nav-group',
  templateUrl: './sidebar-nav-group.component.html',
  styleUrls: ['./sidebar-nav-group.component.scss'],
  providers: [SidebarNavHelper, SidebarNavGroupService],
  standalone: true,
  imports: [
    HtmlAttributesDirective,
    NgTemplateOutlet,
    NgIf,
    NgClass,
    IconModule,
    SidebarNavIconPipe,
    SidebarNavBadgePipe,
    forwardRef(() => SidebarNavComponent),
    NgStyle
  ],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '*'
      })),
      state('closed', style({
        height: '0px'
      })),
      transition('open <=> closed', [
        animate('.15s ease')
      ])
    ])
  ]
})
export class SidebarNavGroupComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private hostElement: ElementRef,
    public helper: SidebarNavHelper,
    private sidebarNavGroupService: SidebarNavGroupService
  ) {
    this.navigationEndObservable = router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  @Input() item: any;
  @Input() dropdownMode: 'path' | 'none' | 'close' = 'path';
  @Input() show?: boolean;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'nav-group': true,
      show: this.open
    };
  }

  @ViewChild(forwardRef(() => SidebarNavComponent), { read: ElementRef }) sidebarNav!: ElementRef;

  navigationEndObservable: Observable<NavigationEnd>;
  navSubscription!: Subscription;
  navGroupSubscription!: Subscription;

  public open!: boolean;
  public navItems: INavData[] = [];
  public display: any = { display: 'block' };

  ngOnInit(): void {

    this.navItems = [...this.item.children];

    this.navSubscription = this.navigationEndObservable.subscribe((event: NavigationEnd) => {
      if (this.dropdownMode !== 'none') {
        const samePath = this.samePath(event.url);
        this.openGroup(samePath);
      }
    });

    if (this.samePath(this.router.routerState.snapshot.url)) {
      this.openGroup(true);
    }

    this.navGroupSubscription = this.sidebarNavGroupService.sidebarNavGroupState$.subscribe(next => {
      if (this.dropdownMode === 'close' && next.sidebarNavGroup && next.sidebarNavGroup !== this) {
        if (next.sidebarNavGroup.item.url.startsWith(this.item.url)) {
          return;
        }
        if (this.samePath(this.router.routerState.snapshot.url)) {
          this.openGroup(true);
          return;
        }
        this.openGroup(false);
      }
    });
  }

  samePath(url: string): boolean {
    // console.log('item:', this.item.name, this.item.url, 'url:', url);
    const itemArray = this.item.url?.split('/');
    const urlArray = url.split('/');
    return itemArray?.every((value: string, index: number) => {
      // console.log(value === urlArray[index], 'value:', value, 'index:', index, urlArray[index], url);
      return value === urlArray[index];
    });
  }

  openGroup(open: boolean): void {
    this.open = open;
  }

  toggleGroup($event: any): void {
    $event.preventDefault();
    this.openGroup(!this.open);
    if (this.open) {
      this.sidebarNavGroupService.toggle({ open: this.open, sidebarNavGroup: this });
    }
  }

  ngOnDestroy(): void {
    this.navSubscription?.unsubscribe();
  }

  onAnimationStart($event: AnimationEvent) {
    this.display = { display: 'block' };
    if ($event.toState === 'open') {
      const host = this.sidebarNav.nativeElement;
      this.renderer.setStyle(host, 'height', `${host['scrollHeight']}px`);
    }
  }

  onAnimationDone($event: AnimationEvent) {
    if ($event.toState === 'open') {
      const host = this.sidebarNav.nativeElement;
      this.renderer.setStyle(host, 'height', 'auto');
    }
    if ($event.toState === 'closed') {
      setTimeout(() => {
        this.display = null;
      });
    }
  }
}

@Component({
  selector: 'c-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    HtmlAttributesDirective,
    SidebarNavLinkComponent,
    SidebarNavLabelComponent,
    SidebarNavTitleComponent,
    SidebarNavDividerComponent,
    SidebarNavGroupComponent,
    SidebarNavItemClassPipe,
    RouterModule
  ]
})
export class SidebarNavComponent implements OnChanges {

  constructor(
    @Optional() public sidebar: SidebarComponent,
    public helper: SidebarNavHelper,
    public router: Router,
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private sidebarService: SidebarService
  ) { }

  @Input() navItems?: INavData[] = [];
  @Input() dropdownMode: 'path' | 'none' | 'close' = 'path';
  @Input() groupItems?: boolean;
  @Input() compact?: boolean;

  @HostBinding('class')
  get hostClasses(): any {
    return {
      'sidebar-nav': !this.groupItems,
      compact: !this.groupItems && !!this.compact
    };
  }

  @HostBinding('class.nav-group-items')
  get sidebarNavGroupItemsClass(): boolean {
    return !!this.groupItems;
  }

  @HostBinding('attr.role') role = 'nav';

  public navItemsArray: INavData[] = [];

  public ngOnChanges(changes: SimpleChanges): void {
    this.navItemsArray = Array.isArray(this.navItems) ? this.navItems.slice() : [];
  }

  public hideMobile(): void {
    // todo: proper scrollIntoView() after NavigationEnd
    if (this.sidebar && this.sidebar.sidebarState.mobile) {
      this.sidebarService.toggle({ toggle: 'visible', sidebar: this.sidebar });
    }
  }
}
