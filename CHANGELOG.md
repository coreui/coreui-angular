### [@coreui/angular](https://coreui.io/) changelog

##### `v2.7.4`
- fix: add `SidebarNavHelper` to public-api surface - see: #67 

##### `v2.7.3`
- chore: update to `Angular 9.0.0-rc.9`
- refactor: `@coreui/angular` components library
- tests: fix and add some missing tests

###### dependencies update
- update `@angular/animations` to `~9.0.0-rc.9`
- update `@angular/common` to `~9.0.0-rc.9`
- update `@angular/compiler` to `~9.0.0-rc.9`
- update `@angular/core` to `~9.0.0-rc.9`
- update `@angular/forms` to `~9.0.0-rc.9`
- update `@angular/platform-browser` to `~9.0.0-rc.9`
- update `@angular/platform-browser-dynamic` to `~9.0.0-rc.9`
- update `@angular/router` to `~9.0.0-rc.9`
- update `@angular-devkit/build-angular` to `~0.900.0-rc.9`
- update `@angular-devkit/build-ng-packagr` to `~0.900.0-rc.9`
- update `@angular/cli` to `~9.0.0-rc.9`
- update `@angular/compiler-cli` to `~9.0.0-rc.9`
- update `@angular/language-service` to `~9.0.0-rc.9`
- update `@types/node` to `^12.11.1`
- update `@types/jasmine` to `~3.5.0`
- update `@types/jasminewd2` to `~2.0.3`
- update `codelyzer` to `^5.1.2`
- update `jasmine-core` to `~3.5.0`
- update `jasmine-spec-reporter` to `~4.2.1`
- update `karma` to `~4.3.0`
- update `karma-chrome-launcher` to `~3.1.0`
- update `karma-coverage-istanbul-reporter` to `~2.1.0`
- update `ng-packagr` to `^9.0.0-rc.7`
- update `protractor` to `~5.4.2`
- update `ts-node` to `~8.3.0`
- update `tslint` to `~5.18.0`

##### `v2.7.2`
- fix(sidebar-nav): AppSidebarNavLabelComponent is not exported in the AppSidebarModule - thanks @zwiras #63

###### dependencies update
- update `@angular/animations` to `^9.0.0-rc.7`
- update `@angular/common` to `^9.0.0-rc.7`
- update `@angular/compiler` to `^9.0.0-rc.7`
- update `@angular/core` to `^9.0.0-rc.7`
- update `@angular/forms` to `^9.0.0-rc.7`
- update `@angular/platform-browser` to `^9.0.0-rc.7`
- update `@angular/platform-browser-dynamic` to `^9.0.0-rc.7`
- update `@angular/router` to `^9.0.0-rc.7`
- update `@angular-devkit/build-angular` to `^0.900.0-rc.7`
- update `@angular-devkit/build-ng-packagr` to `^0.900.0-rc.7`
- update `@angular/cli` to `^9.0.0-rc.7`
- update `@angular/compiler-cli` to `^9.0.0-rc.7`
- update `@angular/language-service` to `^9.0.0-rc.7`
- update `@types/node` to `^12.12.21`
- update `codelyzer` to `^5.2.1`

##### `v2.7.1`
- fix(sidebar-nav): @angular/router has no exported member QueryParamsHandling, see: 
    - https://github.com/angular/angular/issues/30925
    - https://github.com/angular/angular/issues/30816

###### dependencies update
- update `@angular/animations` to `^9.0.0-rc.5`
- update `@angular/common` to `^9.0.0-rc.5`
- update `@angular/compiler` to `^9.0.0-rc.5`
- update `@angular/core` to `^9.0.0-rc.5`
- update `@angular/forms` to `^9.0.0-rc.5`
- update `@angular/platform-browser` to `^9.0.0-rc.5`
- update `@angular/platform-browser-dynamic` to `^9.0.0-rc.5`
- update `@angular/router` to `^9.0.0-rc.5`
- update `core-js` to `^2.6.11`
- update `@angular-devkit/build-angular` to `^0.900.0-rc.5`
- update `@angular-devkit/build-ng-packagr` to `^0.900.0-rc.5`
- update `@angular/cli` to `^9.0.0-rc.5`
- update `@angular/compiler-cli` to `^9.0.0-rc.5`
- update `@angular/language-service` to `^9.0.0-rc.5`
- update `@types/jasmine` to `^3.5.0`
- update `@types/node` to `^12.12.17`
- update `karma-coverage-istanbul-reporter` to `^2.1.1`
- update `ng-packagr` to `^9.0.0-rc.3`
- update `ts-node` to `^8.5.4`
- update `tslint` to `^5.20.1`

##### `v2.7.0`
- chore: upgrade to Angular 9 - see also: 
    - `https://next.angular.io/guide/updating-to-version-9`
    - `https://update.angular.io/#8.0:9.0`
    - add missing `@Injectable` decorator to `SidebarNavHelper`
    - add a generic type to `ModuleWithProviders`
    - tsconfig.lib `enableIvy: false` for library backward compatibility
    - tsconfig.lib `annotateForClosureCompiler: false` and remove `tsickle` dependency 
    - move `tslib` to `dependencies`
    - tsconfig.app: add files[]
    - test: deprecate TestBed.get() use TestBed.inject()
- refactor(SidebarNavItem): add INavData items type

###### dependencies update
- update `@angular/animations` to `^9.0.0-rc.0`
- update `@angular/common` to `^9.0.0-rc.0`
- update `@angular/compiler` to `^9.0.0-rc.0`
- update `@angular/core` to `^9.0.0-rc.0`
- update `@angular/forms` to `^9.0.0-rc.0`
- update `@angular/platform-browser` to `^9.0.0-rc.0`
- update `@angular/platform-browser-dynamic` to `^9.0.0-rc.0`
- update `@angular/router` to `^9.0.0-rc.0`
- update `@angular-devkit/build-angular` to `~0.900.0-rc.0`
- update `@angular-devkit/build-ng-packagr` to `~0.900.0-rc.0`
- update `@angular/cli` to `^9.0.0-rc.0`
- update `@angular/compiler-cli` to `^9.0.0-rc.0`
- update `@angular/language-service` to `^9.0.0-rc.0`
- update `ng-packagr` to `^9.0.0-rc.1`
- update `typescript` to `~3.6.4"
- update `@types/node` to `^12.11.1`
- update `codelyzer` to `^5.1.2`
- update `@coreui/coreui` to `^2.1.16`
- update `@types/jasmine` to `^3.4.5`

##### `v2.6.3`
- refactor: change renderer.addClass to HostBinding
- test: add e2e test bed with some tests 

###### dependencies update
- update `@angular-devkit/build-angular` to `^0.803.14`
- update `@angular-devkit/build-ng-packagr` to `^0.803.14`
- update `@angular/cli` to `^8.3.14`
- update `@angular/compiler-cli` to `^8.2.12`
- update `@angular/language-service` to `^8.2.12`
- update `@angular/animations` to `^8.2.12`
- update `@angular/common` to `^8.2.12`
- update `@angular/compiler` to `^8.2.12`
- update `@angular/core` to `^8.2.12`
- update `@angular/forms` to `^8.2.12`
- update `@angular/platform-browser` to `^8.2.12`
- update `@angular/platform-browser-dynamic` to `^8.2.12`
- update `@angular/router` to `^8.2.12`
- rollback `protractor` to `^5.4.2`
- add `@coreui/coreui` (e2e)
- add `simple-line-icons` (e2e)
- add `ngx-perfect-scrollbar` (e2e)

##### `v2.6.2`
- feat(Sidebar): `minimized` state @Input/@Output - thanks @Hagith #84
- test(Sidebar): `minimized` state - thanks @Hagith #84
- feat(SidebarService): add SidebarService with observable actions 
- refactor(Sidebar): inject SidebarService, subscribe and toggle action events 
- refactor(SidebarMinimizer): inject SidebarService, toggle action events 
- refactor(Sidebar): onDestroy remove minimized classes

###### dependencies update
- update `@angular-devkit/build-angular` to `^0.803.13`
- update `@angular-devkit/build-ng-packagr` to `^0.803.13`
- update `@angular/cli` to `^8.3.13`
- update `codelyzer` to `^5.2.0`
- update `jasmine-core` to `^3.5.0`
- update `jasmine-spec-reporter` to `^4.2.1`
- update `karma` to `^4.4.1`
- update `karma-chrome-launcher` to `^3.1.0`
- update `karma-jasmine-html-reporter` to `^1.4.2`
- update `protractor` to `^6.0.0`

##### `v2.6.1`
- chore: add "cui" prefixed selector alias to all components - thanks @Hagith #80
- fix(INavData): add missing `href` for explicit external links
- refactor(SidebarNavLink): add `INavData` type to items, cleanup
- test: add `test-lib` script & make it work - thanks @Hagith #83

###### dependencies update
- update `@angular-devkit/build-angular` to `^0.803.12`
- update `@angular-devkit/build-ng-packagr` to `^0.803.12`
- update `@angular/cli` to `^8.3.12`
- update `karma` to `^4.4.0`

##### `v2.6.0`
- fix(SidebarNavLink): nav link target doesn't work through appHtmlAttr - thanks @Hagith #79
- fix(SidebarNavLink): allow link parameters array
- refactor(SidebarNavLink): extract disabled link type
- fix(SidebarNavLink): test for item.attributes presence
- refactor(SidebarNavLink): add `item.href` for explicit external links
- refactor(SidebarNavLink): extract SidebarNavLinkContent component
- fix(SidebarNavBadge): add missing badge.class prop
- feat(SidebarNavLink): allow `routerLink` properties as `item.linkProps`
- refactor(SidebarNavLink): `active` class workaround with NavigationEnd Observable
- refactor(SidebarNavLink): add pipe SidebarNavLink

```typescript
export interface INavLinkProps {
  queryParams?: {[k: string]: any};
  fragment?: string;
  queryParamsHandling?: 'merge' | 'preserve' | '';
  preserveFragment?: boolean;
  skipLocationChange?: boolean;
  replaceUrl?: boolean;
  state?: {[k: string]: any};
}
```

###### dependencies update
- update `@angular/animations` to `^8.2.11`
- update `@angular/common` to `^8.2.11`
- update `@angular/compiler` to `^8.2.11`
- update `@angular/core` to `^8.2.11`
- update `@angular/forms` to `^8.2.11`
- update `@angular/platform-browser` to `^8.2.11`
- update `@angular/platform-browser-dynamic` to `^8.2.11`
- update `@angular/router` to `^8.2.11`
- update `core-js` to `^2.6.10`
- update `@angular-devkit/build-angular` to `^0.803.10`
- update `@angular-devkit/build-ng-packagr` to `^0.803.10`
- update `@angular/cli` to `^8.3.10`
- update `@angular/compiler-cli` to `^8.2.11`
- update `@angular/language-service` to `^8.2.11`
- update `@types/jasmine` to `^3.4.4`
- update `@types/jasminewd2` to `^2.0.8`
- update `@types/node` to `^11.13.22`
- update `codelyzer` to `^5.1.2`
- update `ng-packagr` to `^5.7.0`
    
##### `v2.5.5`
- fix: regression build issue - Please add a @NgModule annotation

##### `v2.5.4`
- refactor(sidebar): move INavData interface to @coreui/angular library - thanks @Fredx87 #72
- refactor(sidebar): add pipe SidebarNavItemClass #74
- refactor(sidebar): use pipes in sidebar-nav-dropdown - thanks @coyoteecd #74
- refactor(sidebar): use pipes in sidebar-nav-items pipe #74
- refactor(sidebar): sidebar-nav-service cleanup
- refactor: public_api

###### dependencies update
- update `@angular/animations` to `^8.2.7`
- update `@angular/common` to `^8.2.7`
- update `@angular/compiler` to `^8.2.7`
- update `@angular/core` to `^8.2.7`
- update `@angular/forms` to `^8.2.7`
- update `@angular/platform-browser` to `^8.2.7`
- update `@angular/platform-browser-dynamic` to `^8.2.7`
- update `@angular/router` to `^8.2.7`
- update `rxjs` to `^6.5.3`
- update `zone.js` to `^0.10.2`
- update `@angular-devkit/build-angular` to `^0.803.5`
- update `@angular-devkit/build-ng-packagr` to `^0.803.5`
- update `@angular/cli` to `^8.3.5`
- update `@angular/compiler-cli` to `^8.2.7`
- update `@angular/language-service` to `^8.2.7`
- update `@types/jasmine` to `^3.4.0`
- update `@types/node` to `^11.13.20`
- update `codelyzer` to `^5.1.1`
- update `karma` to `^4.3.0`
- update `ng-packagr` to `^5.5.1`
- update `ts-node` to `^8.4.1`
- update `tsickle` to `~0.37.0`
- update `tslint` to `^5.20.0`

##### `v2.5.3`
- fix(sidebar): performance issues with app-sidebar-nav components due to ngClass bindings - thanks @coyoteecd #74
- fix(sidebar): app-sidebar-nav-label.component sets an incomplete variant style - thanks @coyoteecd closes #75 

###### dependencies update
- update `@angular/animations` to `^8.2.0`
- update `@angular/common` to `^8.2.0`
- update `@angular/compiler` to `^8.2.0`
- update `@angular/core` to `^8.2.0`
- update `@angular/forms` to `^8.2.0`
- update `@angular/platform-browser` to `^8.2.0`
- update `@angular/platform-browser-dynamic` to `^8.2.0`
- update `@angular/router` to `^8.2.0`
- update `zone.js` to `~0.10.0`
- update `@angular-devkit/build-angular` to `^0.802.0`
- update `@angular-devkit/build-ng-packagr` to `^0.802.0`
- update `@angular/cli` to `^8.2.0`
- update `@angular/compiler-cli` to `^8.2.0`
- update `@angular/language-service` to `^8.2.0`
- update `@types/jasmine` to `^3.3.16`
- update `@types/node` to `^11.13.18`
- update `karma` to `^4.2.0`
- update `karma-coverage-istanbul-reporter` to `^2.1.0`
- update `ng-packagr` to `^5.4.3`
- update `tsickle` to `^0.36.0`
- update `tslint` to `^5.18.0`

##### `v2.5.2`
- refactor(AppHeader): add reactive toggler class based on breakpoint   
usage: set toggler breakpoint
```html
<app-header
  [sidebarToggler]="'lg'"
  [asideMenuToggler]="'md'">
</app-header>
```
###### dependencies update
- update `@angular/animations` to `^8.0.2`
- update `@angular/common` to `^8.0.2`
- update `@angular/compiler` to `^8.0.2`
- update `@angular/core` to `^8.0.2`
- update `@angular/forms` to `^8.0.2`
- update `@angular/platform-browser` to `^8.0.2`
- update `@angular/platform-browser-dynamic` to `^8.0.2`
- update `@angular/router` to `^8.0.2`
- update `@angular-devkit/build-angular` to `^0.800.3`
- update `@angular-devkit/build-ng-packagr` to `^0.800.3`
- update `@angular/cli` to `^8.0.3`
- update `@angular/compiler-cli` to `^8.0.2`
- update `@angular/language-service` to `^8.0.2`
- update `@types/node` to `^11.13.14`
- update `ts-node` to `^8.3.0`
- update `tslib` to `^1.10.0`

##### `v2.5.1`
- fix(appHtmlAttr): cannot remove html attribute,   
  ex: `attributes: {hidden: null}` removes attribute `hidden`  

###### dependencies update
- update `@angular-devkit/build-angular` to `^0.800.2`
- update `@angular-devkit/build-ng-packagr` to `^0.800.2`
- update `@angular/cli` to `^8.0.2`
- update `ng-packagr` to `^5.3.0`

##### `v2.5.0`
- chore: upgrade to Angular 8.0 - thanks @dennisameling
- chore: move browserslist file
- chore(tslint): cleanup unused/deprecated rules
- chore(tsconfig): target update 

###### dependencies update
- update `@angular/animations` to `^8.0.0`
- update `@angular/common` to `^8.0.0`
- update `@angular/compiler` to `^8.0.0`
- update `@angular/core` to `^8.0.0`
- update `@angular/forms` to `^8.0.0`
- update `@angular/platform-browser` to `^8.0.0`
- update `@angular/platform-browser-dynamic` to `^8.0.0`
- update `@angular/router` to `^8.0.0`
- update `core-js` to `^2.6.9`
- update `rxjs` to `^6.5.2`
- update `zone.js` to `~0.9.1`
- update `@angular-devkit/build-angular` to `~0.800.1`
- update `@angular-devkit/build-ng-packagr` to `~0.800.1`
- update `@angular/cli` to `^8.0.1`
- update `@angular/compiler-cli` to `^8.0.0`
- update `@angular/language-service` to `^8.0.0`
- update `@types/jasmine` to `^3.3.13`
- update `@types/node` to `^11.13.13`
- update `codelyzer` to `^5.0.1`
- update `jasmine-core` to `~3.4.0`
- update `ng-packagr` to `^5.2.0`
- update `tsickle` to `^0.35.0`
- update `typescript` to `~3.4.5`

##### `v2.4.5`
- chore(readme): npm badges 
- chore(readme): prerequisites 
- update: `@angular/animations` to `^7.2.10`
- update: `@angular/common` to `^7.2.10`
- update: `@angular/compiler` to `^7.2.10`
- update: `@angular/core` to `^7.2.10`
- update: `@angular/forms` to `^7.2.10`
- update: `@angular/http` to `^7.2.10`
- update: `@angular/platform-browser` to `^7.2.10`
- update: `@angular/platform-browser-dynamic` to `^7.2.10`
- update: `@angular/router` to `^7.2.10`
- update: `@angular/compiler-cli` to `^7.2.10`
- update: `@angular/language-service` to `^7.2.10`
- update: `@types/jasmine` to `^3.3.12`
- update: `@types/node` to `^11.11.4`

##### `v2.4.4`
- fix(breadcrumb.service): wrong import from `rxjs` causes overhead in resulted bundle - fixes #22 thanks @sparun160782 @lscorcia @nazar-kuzo
- update: `@angular/animations` to `^7.2.9`
- update: `@angular/common` to `^7.2.9`
- update: `@angular/compiler` to `^7.2.9`
- update: `@angular/core` to `^7.2.9`
- update: `@angular/forms` to `^7.2.9`
- update: `@angular/http` to `^7.2.9`
- update: `@angular/platform-browser` to `^7.2.9`
- update: `@angular/platform-browser-dynamic` to `^7.2.9`
- update: `@angular/router` to `^7.2.9`
- update: `@angular-devkit/build-angular` to `^0.13.6`
- update: `@angular-devkit/build-ng-packagr` to `^0.13.6`
- update: `@angular/cli` to `^7.3.6`
- update: `@angular/compiler-cli` to `^7.2.9`
- update: `@angular/language-service` to `^7.2.9`
- update: `@types/jasmine` to `^3.3.10`
- update: `@types/node` to `^11.11.3`
- update: `karma` to `^4.0.1`
- update: `ts-node` to `^8.0.3`
- update: `tslint` to `^5.14.0`

##### `v2.4.3`
- update: `@coreui/coreui` to `^2.1.7`
- update: `@angular/animations` to `^7.2.6`
- update: `@angular/common` to `^7.2.6`
- update: `@angular/compiler` to `^7.2.6`
- update: `@angular/core` to `^7.2.6`
- update: `@angular/forms` to `^7.2.6`
- update: `@angular/http` to `^7.2.6`
- update: `@angular/platform-browser` to `^7.2.6`
- update: `@angular/platform-browser-dynamic` to `^7.2.6`
- update: `@angular/router` to `^7.2.6`
- update: `@angular-devkit/build-angular` to `^0.13.3`
- update: `@angular-devkit/build-ng-packagr` to `^0.13.3`
- update: `@angular/cli` to `^7.3.3`
- update: `@angular/compiler-cli` to `^7.2.6`
- update: `@angular/language-service` to `^7.2.6`
    
##### `v2.4.2`
- feat(header): use routerLink for brand instead of href attribute #51 - thanks @Hagith

##### `v2.4.1`
- fix(sidebar-nav): ie issues

##### `v2.4.0`
`dist` is the same as `v2.4.0-beta.1`
- update: `@angular/animations` to `^7.2.5`
- update: `@angular/common` to `^7.2.5`
- update: `@angular/compiler` to `^7.2.5`
- update: `@angular/core` to `^7.2.5`
- update: `@angular/forms` to `^7.2.5`
- update: `@angular/http` to `^7.2.5`
- update: `@angular/platform-browser` to `^7.2.5`
- update: `@angular/platform-browser-dynamic` to `^7.2.5`
- update: `@angular/router` to `^7.2.5`
- update: `@angular-devkit/build-angular` to `^0.13.2`
- update: `@angular-devkit/build-ng-packagr` to `^0.13.2`
- update: `@angular/cli` to `^7.3.2`
- update: `@angular/compiler-cli` to `^7.2.5`
- update: `@angular/language-service` to `^7.2.5`
- update: `@types/node` to `^11.9.4`
- update: `karma` to `^4.0.0`
- update: `karma-coverage-istanbul-reporter` to `^2.0.5`

##### `v2.4.0-beta.1`
- fix(sidebar): navItems reassignment bug [#126](https://github.com/coreui/coreui-free-angular-admin-template/issues/126), [#42](https://github.com/coreui/coreui-free-angular-admin-template/issues/42), #12
- refactor(aside): drop `Replace`
- refactor(breadcrumb): drop `Replace` new component `cui-breadcrumb` (migration needed)
- refactor(footer): minor changes
- refactor(header): drop `Replace`
- refactor(layout): cleanup
- refactor(sidebar-nav): drop `Replace`, redesign
- update: `@angular/animations` to `^7.2.4`
- update: `@angular/common` to `^7.2.4`
- update: `@angular/compiler` to `^7.2.4`
- update: `@angular/core` to `^7.2.4`
- update: `@angular/forms` to `^7.2.4`
- update: `@angular/http` to `^7.2.4`
- update: `@angular/platform-browser` to `^7.2.4`
- update: `@angular/platform-browser-dynamic` to `^7.2.4`
- update: `@angular/router` to `^7.2.4`
- update: `core-js` to `^2.6.5`
- update: `@angular-devkit/build-angular` to `^0.13.1`
- update: `@angular-devkit/build-ng-packagr` to `^0.13.1`
- update: `@angular/cli` to `^7.3.1`
- update: `@angular/compiler-cli` to `^7.2.4`
- update: `@angular/language-service` to `^7.2.4`
- update: `@types/jasmine` to `^3.3.9`
- update: `@types/node` to `^10.12.26`
- update: `ng-packagr` to `^4.7.1`

##### `v2.3.1`
- fix: faulty LayoutModule import causes: Unexpected value 'undefined' imported by the module #47
- refactor(appSidebarToggler): inject `ClassToggler` instead of ToggleClasses function
- fix: should not throw errors when navItems are undefined - #46 thanks @fluffynuts 

##### `v2.3.0`
- feat(app-header): navbarBrand img use appHtmlAttr instead of attr.*
- refactor: directive appLinkAttributes -> appHtmlAttr, moved to layout
- refactor(app-header): drop unused methods
- refactor(sidebar-nav): directive appLinkAttributes -> appHtmlAttr
- refactor(app-footer): drop Replace footer
- update: `@angular-devkit/build-angular` to `^0.13.0`
- update: `@angular-devkit/build-ng-packagr` to `^0.13.0`
- update: `@types/node` to `^10.12.21`

##### `v2.2.5`
- refactor: use Renderer2 instead of direct DOM manipulation
- refactor: use DOCUMENT dependency injection 
- update: `@angular/animations` to `^7.2.3`
- update: `@angular/common` to `^7.2.3`
- update: `@angular/compiler` to `^7.2.3`
- update: `@angular/core` to `^7.2.3`
- update: `@angular/forms` to `^7.2.3`
- update: `@angular/http` to `^7.2.3`
- update: `@angular/platform-browser` to `^7.2.3`
- update: `@angular/platform-browser-dynamic` to `^7.2.3`
- update: `@angular/router` to `^7.2.3`
- update: `core-js` to `^2.6.3`
- update: `rxjs` to `^6.4.0`
- update: `zone.js` to `^0.8.29`
- update: `@angular-devkit/build-angular` to `^0.12.4`
- update: `@angular-devkit/build-ng-packagr` to `^0.12.4`
- update: `@angular/cli` to `^7.3.0`
- update: `@angular/compiler-cli` to `^7.2.3`
- update: `@angular/language-service` to `^7.2.3`
- update: `@types/jasmine` to `^3.3.8`
- update: `@types/node` to `^10.12.20`
- update: `ng-packagr` to `^4.7.0`

##### `v2.2.4`
- update: `typescript` to `~3.2.4`
- update: `@angular/animations` to `^7.2.1`
- update: `@angular/common` to `^7.2.1`
- update: `@angular/compiler` to `^7.2.1`
- update: `@angular/core` to `^7.2.1`
- update: `@angular/forms` to `^7.2.1`
- update: `@angular/http` to `^7.2.1`
- update: `@angular/platform-browser` to `^7.2.1`
- update: `@angular/platform-browser-dynamic` to `^7.2.1`
- update: `@angular/router` to `^7.2.1`
- update: `zone.js` to `^0.8.28`
- update: `@angular-devkit/build-angular` to `^0.12.2`
- update: `@angular-devkit/build-ng-packagr` to `^0.12.2`
- update: `@angular/cli` to `^7.2.2`
- update: `@angular/compiler-cli` to `^7.2.1`
- update: `@angular/language-service` to `^7.2.1`
- update: `@types/jasmine` to `^3.3.6`
- update: `ng-packagr` to `^4.6.0`

##### `v2.2.3`
- refactor(app-sidebar-nav): minor changes
- update: `@coreui/coreui` to `^2.1.6`
- update: `@angular/animations` to `^7.2.0`
- update: `@angular/common` to `^7.2.0`
- update: `@angular/compiler` to `^7.2.0`
- update: `@angular/core` to `^7.2.0`
- update: `@angular/forms` to `^7.2.0`
- update: `@angular/http` to `^7.2.0`
- update: `@angular/platform-browser` to `^7.2.0`
- update: `@angular/platform-browser-dynamic` to `^7.2.0`
- update: `@angular/router` to `^7.2.0`
- update: `core-js` to `^2.6.2`
- update: `zone.js` to `^0.8.27`
- update: `@angular-devkit/build-angular` to `^0.12.1`
- update: `@angular-devkit/build-ng-packagr` to `^0.12.1`
- update: `@angular/cli` to `^7.2.1`
- update: `@angular/compiler-cli` to `^7.2.0`
- update: `@angular/language-service` to `^7.2.0`
- update: `@types/jasmine` to `^3.3.5`
- update: `@types/node` to `^10.12.18`

##### `v2.2.2`
- refactor(app-header): new prop `navbarBrandText` = {icon: 'C', text: 'CoreUI'} render as innerHTML
- refactor(app-header): new prop `navbarBrandHref` = ''
- refactor(app-header): `navbarBrandImg`: Boolean
- fix(app-sidebar): missing semicolon
- fix(angular.json): missing css path
- update: `@angular/animations` to `7.1.4`
- update: `@angular/common` to `7.1.4`
- update: `@angular/compiler` to `7.1.4`
- update: `@angular/core` to `7.1.4`
- update: `@angular/forms` to `7.1.4`
- update: `@angular/http` to `7.1.4`
- update: `@angular/platform-browser` to `7.1.4`
- update: `@angular/platform-browser-dynamic` to `7.1.4`
- update: `@angular/router` to `7.1.4`
- update: `core-js` to `2.6.1`
- update: `@angular-devkit/build-angular` to `0.11.3`
- update: `@angular-devkit/build-ng-packagr` to `0.11.3`
- update: `@angular/cli` to `7.1.3`
- update: `@angular/compiler-cli` to `7.1.4`
- update: `@angular/language-service` to `7.1.4`
- update: `@types/jasmine` to `3.3.4`
- update: `@types/node` to `10.12.17`
- update: `karma` to `3.1.4`
- update: `tslint` to `5.12.0`

##### `v2.2.1`
- fix: remove `-fixed` class on layout components destroy
- chore: commit `package-lock.json`
- chore: add [README](./projects/coreui/angular/README.md) 
- update: `core-js` to `2.6.0`
- update: `@angular-devkit/build-angular` to `0.11.1`
- update: `@angular-devkit/build-ng-packagr` to `0.11.1`
- update: `@angular/cli` to `7.1.1`
- update: `@types/jasmine` to `3.3.1`
- update: `@types/node` to `10.12.12`

##### `v2.2.0`
- chore: build with Angular 7 
- chore: update Angular to `^7.1.0` see: https://update.angular.io/
  - update: `@angular/animations` to `^7.1.1`
  - update: `@angular/common` to `^7.1.1`
  - update: `@angular/compiler` to `^7.1.1`
  - update: `@angular/core` to `^7.1.1`
  - update: `@angular/forms` to `^7.1.1`
  - update: `@angular/http` to `^7.1.1`
  - update: `@angular/platform-browser` to `^7.1.1`
  - update: `@angular/platform-browser-dynamic` to `^7.1.1`
  - update: `@angular/router` to `^7.1.1`
  - update: `@angular-devkit/build-angular` to `~0.11.0`
  - update: `@angular-devkit/build-ng-packagr` to `~0.11.0`
  - update: `@angular/cli` to `^7.1.0`
  - update: `@angular/compiler-cli` to `^7.1.1`
  - update: `@angular/language-service` to `^7.1.1`
  - update: `@types/jasmine` to `~3.3.0`
  - update: `karma` to `^3.1.3`
  - update: `karma-jasmine` to `~2.0.1`
  - update: `ng-packagr` to `^4.4.5`
  - update: `ts-node` to `~7.0.1`
  - update: `typescript` to `^3.1.6"

##### `v2.1.0`
- feat: sidebar nav-link  `attributes` - optional JS object with valid JS API naming:
  - valid attributes: `rel`, `target`, `hidden`, `disabled`, etc...
  - item example:
```
...
{
  name: 'Try CoreUI PRO',
  url: 'https://coreui.io/pro/react/',
  icon: 'cui-layers icons',
  variant: 'danger',
  attributes: { target: '_blank', rel: "noopener" },
},
....
```
- update `@coreui/coreui` to `2.1.3`
- update `rxjs` to `^6.3.3`
- update `@angular-devkit/build-angular` to `~0.8.8`
- update `@angular-devkit/build-ng-packagr` to `~0.8.8`
- update `@angular/cli` to `^6.2.8`
- update `@types/jasmine` to `~2.8.12`
- update `@types/jasminewd2` to `~2.0.6`
- update `@types/node` to `~10.12.10`
- update `jasmine-core` to `~3.3.0`
- update `karma-jasmine-html-reporter` to `^1.4.0`
- update `ng-packagr` to `^3.0.6`
- update `shelljs` to `^0.8.3`
- update `ts-node` to `~6.2.0`
- update `tsickle` to `^0.34.0`
- update `typescript` to `~2.9.2`

