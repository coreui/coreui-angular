### [@coreui/angular](https://coreui.io/) changelog

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

