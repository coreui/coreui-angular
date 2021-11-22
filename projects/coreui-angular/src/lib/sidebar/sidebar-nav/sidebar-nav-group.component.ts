// moved to ./sidebar-nav.component due https://angular.io/errors/NG3003

// import {
//   Component,
//   HostBinding,
//   Input,
//   OnDestroy,
//   OnInit
// } from '@angular/core';
//
// import { Router, NavigationEnd } from '@angular/router';
// import { Observable, Subscription } from 'rxjs';
// import { filter } from 'rxjs/operators';
//
// import { SidebarNavHelper } from './sidebar-nav.service';
// import { INavData } from './sidebar-nav';
//
// @Component({
//   selector: 'c-sidebar-nav-group',
//   templateUrl: './sidebar-nav-group.component.html',
//   styleUrls: ['./sidebar-nav-group.component.scss'],
//   providers: [ SidebarNavHelper ]
// })
// export class SidebarNavGroupComponent implements OnInit, OnDestroy {
//   @Input() item: any;
//   @Input() dropdownMode: 'closeInactive' | 'noAction' | 'openActive' = 'closeInactive';
//   // @ts-ignore
//   @Input() show: boolean;
//
//   @HostBinding('class')
//   // tslint:disable-next-line:typedef
//   get hostClasses(): any {
//     return {
//       'nav-group': true,
//       show: this.open,
//     };
//   }
//
//   // todo: dropdownMode
//
//   navigationEndObservable: Observable<NavigationEnd>;
//   // @ts-ignore
//   navSubscription: Subscription;
//
//   // @ts-ignore
//   private open: boolean;
//   public navItems: INavData[] = [];
//
//   constructor(
//     private router: Router,
//     public helper: SidebarNavHelper
//   ) {
//     this.navigationEndObservable = router.events.pipe(
//       filter(event => event instanceof NavigationEnd)
//     ) as Observable<NavigationEnd>;
//   }
//
//   ngOnInit(): void {
//
//     this.navItems = [...this.item.children];
//
//     this.navSubscription = this.navigationEndObservable.subscribe(event => {
//       const samePath = this.samePath(event.url);
//       this.openGroup(samePath);
//     });
//
//     if (this.samePath(this.router.routerState.snapshot.url)) {
//       this.openGroup(true);
//     }
//   }
//
//   samePath(url: string): boolean {
//     const itemArray = this.item.url.split('/');
//     const urlArray = url.split('/');
//     return itemArray.every((value: string, index: number) => {
//       console.log('value', value, 'index', index, urlArray[index], url);
//       return value === urlArray[index];
//     });
//   }
//
//   openGroup(open: boolean): void {
//     this.open = open;
//   }
//
//   toggleGroup($event: any): void {
//     $event.preventDefault();
//     this.open = !this.open;
//   }
//
//   ngOnDestroy(): void {
//     this.navSubscription.unsubscribe();
//   }
// }
