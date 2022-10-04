import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { INavData } from './sidebar-nav';
import { SidebarNavHelper } from './sidebar-nav.service';
import { SidebarService } from '../sidebar.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'c-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnChanges {
  @Input() navItems?: INavData[] = [];
  @Input() dropdownMode?: 'closeInactive' | 'noAction' | 'openActive' = 'closeInactive';
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

  constructor(
    @Optional() public sidebar: SidebarComponent,
    public helper: SidebarNavHelper,
    public router: Router,
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private sidebarService: SidebarService
  ) { }

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

@Component({
  selector: 'c-sidebar-nav-group',
  templateUrl: './sidebar-nav-group.component.html',
  styleUrls: ['./sidebar-nav-group.component.scss'],
  providers: [SidebarNavHelper],
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
  @Input() item: any;
  @Input() dropdownMode: 'closeInactive' | 'noAction' | 'openActive' = 'closeInactive';
  // @ts-ignore
  @Input() show: boolean;

  @HostBinding('class')
  // tslint:disable-next-line:typedef
  get hostClasses(): any {
    return {
      'nav-group': true,
      show: this.open
    };
  }

  // todo: dropdownMode

  navigationEndObservable: Observable<NavigationEnd>;
  // @ts-ignore
  navSubscription: Subscription;

  // @ts-ignore
  public open: boolean;
  public navItems: INavData[] = [];
  public display: any = { display: 'block' };

  constructor(
    private router: Router,
    public helper: SidebarNavHelper,
    private hostElement: ElementRef
  ) {
    this.navigationEndObservable = router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  ngOnInit(): void {

    this.navItems = [...this.item.children];

    this.navSubscription = this.navigationEndObservable.subscribe((event: NavigationEnd) => {
      const samePath = this.samePath(event.url);
      this.openGroup(samePath);
    });

    if (this.samePath(this.router.routerState.snapshot.url)) {
      this.openGroup(true);
    }
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
    this.open = !this.open;
  }

  ngOnDestroy(): void {
    this.navSubscription.unsubscribe();
  }

  onAnimationStart($event: AnimationEvent) {
    setTimeout(() => {
      this.display = { display: 'block' };
    });
  }

  onAnimationDone($event: AnimationEvent) {
    if ($event.toState === 'closed') {
      setTimeout(() => {
        this.display = null;
      });
    }
  }
}
