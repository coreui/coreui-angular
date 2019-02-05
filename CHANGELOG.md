### [@coreui/angular](https://coreui.io/) changelog

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

