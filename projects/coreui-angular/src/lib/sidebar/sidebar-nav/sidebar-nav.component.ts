import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  Component,
  computed,
  effect,
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
  untracked
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { SidebarService } from '../sidebar.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { INavData } from './sidebar-nav';
import { SidebarNavHelper } from './sidebar-nav.service';
import { SidebarNavGroupService } from './sidebar-nav-group.service';
import { NavGroupService } from '../../nav';
import { CollapseDirective } from '../../collapse';
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
  providers: [SidebarNavHelper],
  imports: [
    CollapseDirective,
    HtmlAttributesDirective,
    IconDirective,
    NgTemplateOutlet,
    SidebarNavIconPipe,
    SidebarNavBadgePipe,
    forwardRef(() => SidebarNavComponent)
  ],
  host: {
    '[class]': 'hostClasses()'
  }
})
export class SidebarNavGroupComponent implements OnInit, OnDestroy {
  readonly #router = inject(Router);
  readonly #hostElement = inject(ElementRef);
  readonly #sidebarNavGroupService = inject(SidebarNavGroupService);
  public readonly helper = inject(SidebarNavHelper);

  constructor() {
    const router = this.#router;

    this.navigationEndObservable = router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  /**
   * The nav data item rendered as a sidebar nav group.
   * @returns INavData
   */
  readonly item = input<INavData>();

  /**
   * Determines when an inactive `c-sidebar-nav-group` closes.
   * - `path`: on an active route change only
   * - `close`: when another group is clicked
   * - `none`: never, the group stays open
   */
  readonly dropdownMode = input<'path' | 'none' | 'close'>('path');

  /**
   * Sets the group's initial expanded state.
   * @returns boolean
   */
  readonly show = input<boolean>();

  /**
   * Renders the group's nested nav in compact mode.
   * @returns boolean
   */
  readonly compact = input<boolean, unknown>(undefined, { transform: booleanAttribute });

  /**
   * Open the group when the active route matches one of its items. Governs opening only —
   * closing an inactive group stays with `dropdownMode`.
   * @returns boolean
   * @default true
   * @since 5.7.28
   */
  readonly openOnActive = input(true, { transform: booleanAttribute });

  readonly hostClasses = computed(() => {
    return {
      'nav-group': true,
      show: this.open()
    };
  });

  navigationEndObservable: Observable<NavigationEnd>;
  navSubscription!: Subscription;
  navGroupSubscription!: Subscription;

  readonly open = signal<boolean | undefined>(undefined);
  readonly navItems = signal<INavData[]>([]);
  readonly display = signal<string | null>(null);

  ngOnInit(): void {
    this.navItems.set([...(this.item()?.children ?? [])]);

    this.navSubscription = this.navigationEndObservable.subscribe((event: NavigationEnd) => {
      if (this.dropdownMode() !== 'none') {
        const samePath = this.samePath(event.url);
        if (samePath && !this.openOnActive()) {
          return;
        }
        this.openGroup(samePath);
      }
    });

    if (this.openOnActive() && this.samePath(this.#router.routerState.snapshot.url)) {
      this.openGroup(true);
    }

    this.navGroupSubscription = this.#sidebarNavGroupService.sidebarNavGroupState$.subscribe((next) => {
      if (this.dropdownMode() === 'close' && next.sidebarNavGroup && next.sidebarNavGroup !== this) {
        if (this.samePath(this.#router.routerState.snapshot.url)) {
          if (this.open()) {
            return;
          }
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
    if (this.open() !== undefined && this.open() !== open) {
      // the group drops `show` in the same pass, hiding the nav before cCollapse can measure it
      this.display.set('block');
    }
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

  onCollapseChange(state: string): void {
    this.display.set(state === 'collapsed' || state === 'open' ? null : 'block');
  }
}

@Component({
  selector: 'c-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss'],
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
  },
  providers: [NavGroupService, SidebarNavGroupService]
})
export class SidebarNavComponent implements OnChanges {
  readonly sidebar = inject(SidebarComponent, { optional: true });
  readonly helper = inject(SidebarNavHelper);
  readonly router = inject(Router);
  readonly #renderer = inject(Renderer2);
  readonly #hostElement = inject(ElementRef);
  readonly #sidebarService = inject(SidebarService);
  readonly #navGroupService = inject(NavGroupService);

  /**
   * Configuration object for sidebar-nav.
   * @returns INavData[] | undefined
   * @default []
   */
  readonly navItems = input<INavData[] | undefined>([]);

  /**
   * Determines when an inactive `c-sidebar-nav-group` closes.
   * - `path`: on an active route change only
   * - `close`: when another group is clicked
   * - `none`: never, the group stays open
   */
  readonly dropdownMode = input<'path' | 'none' | 'close'>('path');
  /**
   * Renders `c-sidebar-nav` as a nested group's item list rather than the top-level sidebar nav.
   * @returns boolean
   */
  readonly groupItems = input<boolean, unknown>(undefined, { transform: booleanAttribute });
  /**
   * Renders the nav in compact mode.
   * @returns boolean
   */
  readonly compact = input<boolean, unknown>(undefined, { transform: booleanAttribute });
  /**
   * Open a nav group when a nav link inside it becomes active, e.g. through `routerLinkActive`.
   * Governs opening only — closing an inactive group stays with `dropdownMode`.
   * @returns boolean
   * @default true
   * @since 5.7.28
   */
  readonly openOnActive = input(true, { transform: booleanAttribute });
  /**
   * Default role for sidebar nav.
   * @returns string
   * @default 'navigation'
   */
  readonly role = input('navigation');
  /**
   * Set the sidebar nav variant to tree.
   * @default undefined
   * @since 5.7.28
   */
  readonly variant = input<'tree'>();

  readonly hostClasses = computed(() => {
    const groupItems = this.groupItems();
    const variant = this.variant();
    return {
      'sidebar-nav': !groupItems,
      'nav-group-items': groupItems,
      [`sidebar-nav-${variant}`]: !groupItems && !!variant,
      compact: this.compact()
    };
  });

  readonly #openOnActiveEffect = effect(() => {
    const openOnActive = this.openOnActive();
    untracked(() => {
      this.#navGroupService.openOnActive.set(openOnActive);
    });
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
