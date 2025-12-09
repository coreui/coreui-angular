import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { NgStyle, NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  ElementRef,
  forwardRef,
  inject,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  signal,
  SimpleChanges,
  viewChild
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
import { SidebarNavIconPipe } from './sidebar-nav-icon.pipe';
import { SidebarNavBadgePipe } from './sidebar-nav-badge.pipe';
import { SidebarNavLinkComponent } from './sidebar-nav-link.component';
import { SidebarNavLabelComponent } from './sidebar-nav-label.component';
import { SidebarNavTitleComponent } from './sidebar-nav-title.component';
import { SidebarNavDividerComponent } from './sidebar-nav-divider.component';
import { SidebarNavItemClassPipe } from './sidebar-nav-item-class.pipe';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'c-sidebar-nav-group',
  templateUrl: './sidebar-nav-group.component.html',
  styleUrls: ['./sidebar-nav-group.component.scss'],
  providers: [SidebarNavHelper, SidebarNavGroupService],
  imports: [
    HtmlAttributesDirective,
    IconDirective,
    NgTemplateOutlet,
    SidebarNavIconPipe,
    SidebarNavBadgePipe,
    forwardRef(() => SidebarNavComponent),
    NgStyle
  ],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '*'
        })
      ),
      state(
        'closed',
        style({
          height: '0px'
        })
      ),
      transition('open <=> closed', [animate('.15s ease')])
    ])
  ],
  host: {
    '[class]': 'hostClasses()'
  }
})
export class SidebarNavGroupComponent implements OnInit, OnDestroy {
  readonly #router = inject(Router);
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);
  readonly #sidebarNavGroupService = inject(SidebarNavGroupService);
  public readonly helper = inject(SidebarNavHelper);

  constructor() {
    const router = this.#router;

    this.navigationEndObservable = router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  readonly item = input<INavData>();
  readonly dropdownMode = input<'path' | 'none' | 'close'>('path');
  readonly show = input<boolean>();
  readonly compact = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  readonly hostClasses = computed(() => {
    return {
      'nav-group': true,
      show: this.open()
    };
  });

  readonly sidebarNav = viewChild.required(
    forwardRef(() => SidebarNavComponent),
    { read: ElementRef }
  );

  navigationEndObservable: Observable<NavigationEnd>;
  navSubscription!: Subscription;
  navGroupSubscription!: Subscription;

  readonly open = signal<boolean | undefined>(undefined);
  readonly navItems = signal<INavData[]>([]);
  readonly display = signal<any>({ display: 'block' });

  ngOnInit(): void {
    this.navItems.set([...(this.item()?.children ?? [])]);

    this.navSubscription = this.navigationEndObservable.subscribe((event: NavigationEnd) => {
      if (this.dropdownMode() !== 'none') {
        const samePath = this.samePath(event.url);
        this.openGroup(samePath);
      }
    });

    if (this.samePath(this.#router.routerState.snapshot.url)) {
      this.openGroup(true);
    }

    this.navGroupSubscription = this.#sidebarNavGroupService.sidebarNavGroupState$.subscribe((next) => {
      if (this.dropdownMode() === 'close' && next.sidebarNavGroup && next.sidebarNavGroup !== this) {
        const url = next.sidebarNavGroup.item()?.url ?? [];
        const normUrl = Array.isArray(url) ? this.#router.createUrlTree(url).toString() : url;
        const itemUrl = this.item()?.url ?? [];
        const normItemUrl = Array.isArray(normUrl) ? this.#router.createUrlTree(normUrl).toString() : normUrl;
        if (normUrl.startsWith(normItemUrl)) {
          return;
        }
        if (this.samePath(this.#router.routerState.snapshot.url)) {
          this.openGroup(true);
          return;
        }
        this.openGroup(false);
      }
    });
  }

  samePath(url: string): boolean {
    // console.log('item:', this.item.name, this.item.url, 'url:', url);
    const itemUrl = this.item()?.url ?? [];
    const itemArray = Array.isArray(itemUrl) ? itemUrl : itemUrl.split('/');
    const urlArray = url.split('/');
    return itemArray?.every((value: string, index: number) => {
      // console.log(value === urlArray[index], 'value:', value, 'index:', index, urlArray[index], url);
      return value === urlArray[index];
    });
  }

  openGroup(open: boolean): void {
    this.open.set(open);
  }

  toggleGroup($event: any): void {
    $event.preventDefault();
    this.openGroup(!this.open());
    if (this.open()) {
      this.#sidebarNavGroupService.toggle({ open: this.open(), sidebarNavGroup: this });
    }
  }

  ngOnDestroy(): void {
    this.navSubscription?.unsubscribe();
  }

  onAnimationStart($event: AnimationEvent) {
    this.display.set({ display: 'block' });
    setTimeout(() => {
      const host = this.sidebarNav()?.nativeElement;
      if ($event.toState === 'open' && host) {
        this.#renderer.setStyle(host, 'height', `${host['scrollHeight']}px`);
      }
    });
  }

  onAnimationDone($event: AnimationEvent) {
    setTimeout(() => {
      const host = this.sidebarNav()?.nativeElement;
      if ($event.toState === 'open' && host) {
        this.#renderer.setStyle(host, 'height', 'auto');
      }
      if ($event.toState === 'closed') {
        setTimeout(() => {
          this.display.set(null);
        });
      }
    });
  }
}

@Component({
  selector: 'c-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  imports: [
    HtmlAttributesDirective,
    SidebarNavLinkComponent,
    SidebarNavLabelComponent,
    SidebarNavTitleComponent,
    SidebarNavDividerComponent,
    forwardRef(() => SidebarNavGroupComponent),
    SidebarNavItemClassPipe,
    RouterModule
  ],
  host: {
    '[class]': 'hostClasses()',
    '[attr.role]': 'role()'
  }
})
export class SidebarNavComponent implements OnChanges {
  readonly sidebar = inject(SidebarComponent, { optional: true });
  readonly helper = inject(SidebarNavHelper);
  readonly router = inject(Router);
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);
  readonly #sidebarService = inject(SidebarService);

  readonly navItems = input<INavData[] | undefined>([]);
  readonly dropdownMode = input<'path' | 'none' | 'close'>('path');
  readonly groupItems = input<boolean, unknown>(undefined, { transform: booleanAttribute });
  readonly compact = input<boolean, unknown>(undefined, { transform: booleanAttribute });
  readonly role = input('navigation');

  readonly hostClasses = computed(() => {
    const groupItems = this.groupItems();
    return {
      'sidebar-nav': !groupItems,
      'nav-group-items': groupItems,
      compact: groupItems && this.compact()
    };
  });

  // @HostBinding('class.nav-group-items')
  // get sidebarNavGroupItemsClass(): boolean {
  //   return !!this.groupItems;
  // }

  readonly navItemsArray = signal<INavData[]>([]);

  public ngOnChanges(changes: SimpleChanges): void {
    const navItems = this.navItems();
    this.navItemsArray.set(Array.isArray(navItems) ? navItems.slice() : []);
  }

  public hideMobile(): void {
    // todo: proper scrollIntoView() after NavigationEnd
    if (this.sidebar && this.sidebar.sidebarState.mobile) {
      this.#sidebarService.toggle({ toggle: 'visible', sidebar: this.sidebar });
    }
  }
}
