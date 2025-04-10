### [@coreui/angular](https://coreui.io/angular/) changelog

---

#### `5.4.7`

- fix(avatar): default size should be '' not `md`
- chore(dependencies): update

---

#### `5.4.6`

- chore(dependencies): update
- refactor(dropdown): migrate to contendChild(), constructor-based dependency injection to inject(), cleanup
- refactor(dropdown-item): add default role prop, cleanup 
- refactor(dropdown-menu): migrate to contendChildren(), cleanup

---

#### `5.4.5`

- chore(dependencies): update
- refactor(coreui.types): add BooleanInput and NumberInput types

---

#### `5.4.3`

- chore(dependencies): update to `Angular 19.2`
- refactor(icon.component): cleanup, classList simplify
- refactor(chartjs.component): signal inputs, host bindings, cleanup
- fix(table-color): allow undefined type for color input prop
- fix(align): allow undefined type for align input prop

---

#### `5.4.1`

- chore(dependencies): update 

---

#### `5.4.0`

- chore(dependencies): version bump and tilde `~` dependencies for @coreui/* packages with Sass modules 

---

#### `5.3.16`

- chore(dependencies): tilde `~` dependencies for @coreui/* packages to avoid Sass modules mismatch

---

#### `5.3.15`

- refactor: linkedSignal source cleanup
- refactor(form): host binding, cleanup, tests
- refactor(form-floating): host binding, cleanup, tests
- test(form-select): coverage
- test(form-check-input): indeterminate coverage
- refactor(modal-toggle): host binding, cleanup, tests
- refactor(navbar-toggler): host binding, cleanup, tests
- refactor(template-id): signal inputs, cleanup, tests
- test(bg-color): css classes coverage
- test(border): css classes coverage
- fix(border): border input boolean
- test(rounded): css classes coverage
- fix(rounded): border input boolean
- refactor(text-bg-color): host binding, cleanup, tests
- refactor(text-color): host binding, cleanup, tests
- test(shadow-on-scroll): coverage
- test(visible): coverage
- refactor(utilities): module minor cleanups
- refactor(sidebar-toggler): signal inputs, host bindings, cleanup
- refactor(sidebar-toggle): signal inputs, host bindings, cleanup
- refactor(sidebar-nav-link): signal output
- refactor(sidebar-brand): signal inputs, host bindings, cleanup
- refactor(sidebar): signal inputs, host bindings, cleanup, use inert attribute
- chore(dependencies): update

---

#### `5.3.14`

- fix(carousel): when paused (interval=0) and manually changed slide, it does not restart when interval>0
- refactor(carousel-item): add attribute role = "group"
- refactor(carousel-inner): add aria-live "off" for interval > 0, otherwise "polite"
- fix(carousel-control): allow custom content (regression)
- refactor(carousel): add interval to carousel state
- fix(carousel.config): set default interval to 0
- fix(theme.directive): use colorScheme if dark not set
- refactor(progress-bar): set default value=0
- refactor(dropdown): signal inputs, host bindings, cleanup, tests
- refactor(dropdown-item): set default value of disabled prop to false
- refactor(dropdown-close): set default value of disabled prop to false
- chore(dependencies): update

---

#### `5.3.12`

- fix(carousel): first image slides in for `crossfade` transition, animations refactor, closes #213 - thanks @baloo32
- fix(carousel): `interval` prop value change should set/reset timer, closes #214 - thanks @baloo32
- chore(dependencies): update

---

#### `5.3.10`

- fix(offcanvas): offcanvas hides on animation.done toState visible, refactor
- refactor(backdrop): minor cleanups

---

#### `5.3.9`

- chore(dependencies): update
- fix(accordion): accordion item not expanded when visible=true on init (regression)
- refactor(alert): signal inputs, host bindings, cleanup, tests
- refactor(breadcrumb): signal inputs, host bindings, cleanup, tests
- refactor(grid): signal inputs, host bindings, cleanup, tests
- refactor(header): signal inputs, host bindings, cleanup, tests
- refactor(theme.directive): signal inputs, host bindings, cleanup, tests
- refactor(offcanvas): signal inputs, host bindings, cleanup, tests
- refactor(pagination): signal inputs, host bindings, cleanup, tests
- refactor(carousel): signal inputs, host bindings, cleanup, tests
- feat(carousel-indicators): allow custom content via TemplateId directive, refactor
- test(accordion): coverage
- test(backdrop): coverage
- test(card-img): coverage
- test(collapse): coverage
- test(element-ref): update
- test(placeholder): coverage
- test(popover): coverage
- test(tooltip): coverage

---

#### `5.3.8`

- chore(dependencies): update to `Angular 19.1`
- refactor(form-control): signal inputs, host bindings, cleanup
- refactor(form-select): signal inputs, host bindings, cleanup
- refactor(form-label): signal inputs, host bindings, cleanup
- refactor(form-feedback): signal inputs, host bindings, cleanup
- refactor(form-check): signal inputs, host bindings, cleanup
- refactor(form): signal inputs, host bindings, cleanup
- refactor(input-group): cleanup
- refactor(nav): signal inputs, host bindings, cleanup, tests
- refactor(modal): signal inputs, host bindings, cleanup, 
- refactor(progress): signal inputs, host bindings, cleanup, tests, service introduction
- refactor(table-active): signal inputs, host bindings, cleanup, tests 
- refactor(table-color): signal inputs, host bindings, cleanup, tests
- refactor(table): signal inputs, host bindings, cleanup, tests
- refactor(tab): signal inputs, host bindings, cleanup, tests
- refactor(toast): signal inputs, host bindings, cleanup
- refactor(align): signal inputs, host bindings, cleanup, tests
- refactor(bg-color): signal inputs, host bindings, cleanup, tests
- refactor(border): signal inputs, host bindings, cleanup, tests
- refactor(rounded): signal inputs, host bindings, cleanup, tests
- refactor(shadow-on-scroll): signal inputs, host bindings, cleanup
- refactor(visible): signal inputs, cleanup
- refactor: make EffectRef #private 

---

#### `5.3.7`

- fix(collapse): collapse not expanded when initial visible=true
- fix(offcanvas): use `inert` attribute instead of `aria-hidden`
- chore(dependencies): update

---

#### `5.3.5`

- chore(dependencies): update
- feat(services): uid service
- feat(services): rtl service
- refactor(form-floating): signal inputs, host bindings, cleanup
- test(progress): cleanup

---

#### `5.3.4`

- chore(dependencies): update
- refactor: migrate constructor-based dependency injection to inject function
- fix(tab-panel): avoid initial transition

---

#### `5.3.3`

- chore(dependencies): update
- fix(accordion): accordion item not expanded on init when visible=true
- refactor(avatar): remove NgOptimizedImage directive, add object-fit: cover
- chore(workflows): update node-version to 22.x

---

#### `5.3.2`
- chore(dependencies): update
- chore(workflows): update with npm ci
- fix(package-lock): rebuild

---

#### `5.3.1`

- chore(dependencies): update 
- fix(tabs): NG0950 required input is accessed before a value is set tempfix

---

#### `5.3.0`

- chore(dependencies): update to `Angular 19`
- refactor: directives, components and pipes are now standalone by default
- refactor: remove deprecated 'allowSignalWrites' flag for effect() - writes are allowed by default

---

#### `5.2.25`

- chore(dependencies): update to Angular `18.2.12`
- fix(tabs-list): allowSignalWrites for tabsService effect

---

#### `5.2.24`

- chore(dependencies): update to Angular `18.2.11`
- refactor(tab-panel): animateChild for optional nested animations

---

#### `5.2.23`

- chore(dependencies): update
- refactor(html-attr.directive): signal input, cleanup
- refactor(icon): signal inputs, host bindings, cleanup

---

#### `5.2.22`

- chore(dependencies): update
- refactor(collapse): input signals, host bindings
- refactor(navbar): input signals, host bindings
- refactor(icon.directive): host binding innerHtml
- refactor(offcanvas): minor fixes
- refactor(sidebar-nav): minor fixes

---

#### `5.2.21`

- chore(dependencies): update

---

#### `5.2.20`

- chore(dependencies): update to Angular `18.2.8`
- refactor(accordion): input signals, host bindings
- refactor(toaster.service): readonly props

---

#### `5.2.19`

- chore(dependencies): update to Angular `18.2.6`
- refactor(spinner): input signals, host bindings, ng-content default fallback content

---

#### `5.2.18`

- chore(dependencies): update to Angular `18.2.5`
- fix(progress-bar): bar animation fails for no style width on 0 percent
- refactor(popover): use ComponentRef setInput() api, input signals, host bindings
- refactor(tooltip): use ComponentRef setInput() api, input signals, host bindings
- refactor(toast): use ComponentRef setInput() api, input signals
- fix(widget-stat-f): rounded-start-1 bg for icon without padding, text-color for value prop
- refactor(callout): input signals, host bindings
- refactor(card-header-actions): host bindings
- refactor(card-img): input signals, host bindings
- refactor(card): host bindings
- refactor(input-group): input signals, host bindings
- refactor(container): input signals, host bindings
- refactor(header): input signals, host bindings
- refactor(widgets): input signals, host bindings
- refactor(collapse): input signals, host bindings

---

#### `5.2.17`

- refactor(img): input signals, host bindings
- refactor(list-group): input signals, host bindings
- chore(dependencies): update to Angular `18.2.2`
  - see also: vulnerability [Webpack AutoPublicPathRuntimeModule has a DOM Clobbering Gadget that leads to XSS](https://github.com/advisories/GHSA-4vvj-4cpr-p986)

---

#### `5.2.16`

- refactor(footer): input signals, host bindings
- refactor(placeholder): input signals, host bindings
- chore(dependencies): update `eslint` to `^9.9.1`
- chore(dependencies): update `typescript-eslint` to `~8.3.0`
- chore(dependencies): update `tslib` to `^2.7.0`
- chore(dependencies): update `micromatch` to `4.0.8` 
  - see also: vulnerability [Regular Expression Denial of Service (ReDoS) in micromatch](https://github.com/advisories/GHSA-952p-6rrq-rcjv)

---

#### `5.2.15`

- refactor(button): input signals, host bindings
- refactor(button-close): input signals, host bindings
- refactor(avatar): host bindings
- refactor(badge): host bindings
- chore(dependencies): update to Angular `18.2.1`
- chore(dependencies): update to typescript-eslint `~8.2.0`

---

#### `5.2.14`

- chore(dependencies): update to Angular `18.2`
- chore(dependencies): update to typescript `~5.5.4`
- chore(dependencies): update to typescript-eslint `~8.1.0`
- chore(dependencies): update to angular-eslint `~18.3.0`
- refactor(button): input signals

---

#### `5.2.13`

- chore(dependencies): update
- chore(karma.conf): add custom chrome launcher with `--disable-search-engine-choice-screen` flag
- refactor: remove empty constructors, wrapper components host class cleanups

---

#### `5.2.12`

- chore(dependencies): update
- chore(eslint): update `eslint` to v9, `angular-eslint`, `typescript-eslint`
- refactor: eslint minor syntax cleanups

---

#### `5.2.11`

- feat(schematics): ng-add basic integration 
- chore(dependencies): update

---

#### `5.2.7`

- chore(dependencies): update

---

#### `5.2.5`

- chore(dependencies): update to Angular 18.1
- refactor: update calls to `afterRender` with an explicit phase to the new API

---

#### `5.2.3`

- chore(dependencies): update
- refactor(accordion): minor cleanup, add host class metadata
- refactor(avatar): template default ng-content, host class metadata, input signals
- refactor(badge): host class metadata, input signals
- refactor(card): host class metadata, input signals
- refactor(text-bg-color): input signals
- refactor(text-color): input signals
- refactor(widget-stat-b): input signals
- refactor(modal): minor syntax cleanup

---

#### `5.2.2`

- chore(dependencies): update
- fix(tabs2): missing exportAs
- fix(tab.directive): missing disabled attribute

---

#### `5.2.1`

- chore(dependencies): update

---

#### `5.2.0`

- chore(dependencies): update to `Angular 18`
- feat(tabs): Angular tabs reimagined structure, keyboard interactions and WAI-ARIA support

---

#### `5.1.2`

- chore(dependencies): update (js-yaml vulnerability)
- fix(avatar): add `alt` prop for img alternate text
- fix(footer): set default `role="contentinfo"`
- fix(header): set default `role="banner"`
- fix(sidebar-nav): set default `role="navigation"`
- fix(tab-pane): add default `role="tabpanel"`
- fix(TabContentRef): add `aria-selected` attribute and default `role="tab"`

---

#### `5.1.1`

- chore(dependencies): update
- fix(dropdown): add aria-expanded attribute, refactor

---

#### `5.1.0`

- chore(dependencies): update
- feat: element-ref directive
- feat(tooltip): reference input for positioning the tooltip on reference element, refactor with signals
- refactor(listeners.service): add focusin Trigger
- refactor(template-id.directive): cleanup, add missing test

---

#### `5.0.4`

- chore(dependencies): update
- fix(tooltip): do not show the tooltip for empty content, refactor with input()

---

#### `5.0.3`

- chore(dependencies): update
- test: add missing tests, refactor

---

#### `5.0.2`

- chore(dependencies): update
- fix(icon): cIcon directive [name] binding does not refresh icon in angular 17 #203
- refactor(icons-angular): use Angular signals
- test(icons-angular): update

---

#### `5.0.1`

- chore(dependencies): update
- fix(color-mode.service): afterNextRender() for SSR
- fix(local-storage.service): provide null for empty Storage.getItem() value

---

#### `5.0.0`

- chore(dependencies): update to `Angular 17.3`
- chore(dependencies): update to `CoreUI 5`
- refactor(sidebar): drop sidebar-toggler component, use directive instead, use control flow, use Input() transform
- refactor(widget): update to v5
- fix(tooltip): update offset for v5
- refactor(toast): use Input() transform
- feat(utilities): shadow-on-scroll directive
- refactor(tabs): use Input() transform
- refactor(table.type): Partial attributes
- feat: ThemeDirective
- feat(services): v5 color-mode, local-storage, in-memory-storage, script-injector
- refactor(progress): add progress-stacked component, update testing, rewrite with signals
- refactor(progress): add progress-bar props for simplified use with [value]
- fix(popover): update offset for v5
- refactor(placeholder): use Input() transform
- refactor(offcanvas): use ThemeDirective composition for dark prop
- refactor(navbar): colorScheme prop replaced with ThemeDirective composition
- fix(row): row-cols-n for xs="n"
- refactor(form-check-input): use Input() transform
- refactor(dropdown): allow to select a dropdown-item with up/down arrows, testing update, use Input() transform
- refactor(dropdown): implement FocusableOption interface for items
- refactor(dropdown): use ThemeDirective composition for dark prop
- refactor(collapse): use Input() transform
- refactor(carousel): control flow, use Input() transform, ThemeDirective composition for dark prop
- refactor(card): use TextColorDirective composition
- refactor(button-close): deprecate white input prop, use ThemeDirective composition for dark prop
- refactor(breadcrumb): cleanups, add routeSnapshot.title as fallback value, use control flow, use Input() transform
- refactor(badge): update TextColors, use TextColorDirective composition
- chore(backdrop.service): cleanup
- refactor(avatar): update TextColors, use TextColorDirective composition, use control flow
- refactor(alert): use Input() transform, use control flow
- refactor(coreui.types): update to v5
- refactor(accordion): use Input() transform
- refactor(chartjs): update to ChartJS 4.x, types cleanup, use afterRender for SSR
- refactor(icon): add afterNextRender for SSR, add aria-hidden attribute, improve testing
- feat(utilities): TextBgColor directive
- refactor(badge): improve background and text color handling with TextBgColor directive composition api
- refactor(card): improve background and text color handling with TextBgColor directive composition api

---

#### `4.7.18`

- chore(dependencies): update

---

#### `4.7.17`

- chore(dependencies): update to `Angular 17.3`

---

#### `4.7.16`

- chore(dependencies): update

---

#### `4.7.15`

- fix(sidebar-nav-group): typo on control flow migration - thanks @meriturva, closes #200
- chore(workflows): update github actions to v4 - checkout, setup-node

---

#### `4.7.14`

- chore(dependencies): update to `Angular 17.2`

---

#### `4.7.13`

- refactor(@coreui/angular): use control flow
- fix(chartjs): canvas already in use, refactor

---

#### `4.7.12`

- chore(dependencies): update
- fix(chartjs): use afterRender, afterNextRender fails - temp fix

---

#### `4.7.10`

- fix(toast): types
- fix(carousel): types
- fix(sidebar): missing export SidebarNavHelper
- chore(dependencies): update

---

#### `4.7.8`

- refactor: allow getComputedStyle() to be undefined for SSR
- refactor(tooltip): for use with IntersectionService providedIn root
- refactor(popover): for use with IntersectionService providedIn root
- refactor(carousel): for use with IntersectionService providedIn root
- refactor(IntersectionService): providedIn root, allow multiple observers, add unobserve() method
- refactor(icon): afterNextRender in case of SSR
- refactor(chartjs): afterNextRender in case of SSR

---

#### `4.7.7`

- chore(dependencies): update

---

#### `4.7.6`

- chore(dependencies): update

---

#### `4.7.3`

- refactor(backdrop, modal, offcanvas): move scrollbar adjustments to offcanvas, cleanups
  feat(modal): restore focus on modal hide, set focus to visible modal
- fix(backdrop): add missing export
- chore(dependencies): update

---

#### `4.7.0`

- chore(dependencies): update to `Angular 17`
    - `Angular 17`
    - `TypeScript ~5.2`
    - `zone.js ~0.14.2`
- chore: update tsconfig and eslintrc
- refactor: minor cleanups - typings, tests
- chore: update `.github/workfows` for node-version 20

---

#### `4.5.28`

- chore(dependencies): update

---

#### `4.5.27`

- chore(dependencies): update

see: [Babel vulnerable to arbitrary code execution when compiling specifically crafted malicious code](https://github.com/coreui/coreui-angular/security/dependabot/31)

---

#### `4.5.25`

- chore: sync with v4.5.25
- chore(dependencies): update

---

#### `4.5.16`

- chore(dependencies): update

---

#### `4.5.15`

- chore(dependencies): update to Angular 16.2
- fix(icon): check name value for undefined

---

#### `4.5.14`

- fix(@coreui/angular): add missing peerDependencies
- refactor(sidebar-nav): IconDirective imports

---

#### `4.5.13`

- chore(dependencies): update

---

#### `4.5.11`

- chore(dependencies): update

---

#### `4.5.10`

- refactor: @Input() transform option of @angular/core@16.1 instead of @angular/cdk coerce functions (partial)
- chore: dependencies update (angular v16.1.4)
- chore: peerDependencies update to Angular 16.1

---

#### `4.5.8`

- fix(toast): show animation not working
- refactor(toast): remove: onAnimationEvent(), @fadeInOut.start, @fadeInOut.done
- fix(toaster): drop setTimeout() on removeToast()
- refactor(toaster): move to takeUntilDestroyed()
- chore: dependencies update (angular v16.1.3)

---

#### `4.5.2`

- fix(tooltip): add IntersectionObserver to remove tooltip when host element is not visible
- chore: dependencies update

---

#### `4.5.0`

- chore: dependencies update
    - `Angular 16`
    - `TypeScript ~4.9.3`
- refactor(breadcrumb-router.service): router.events takeUntilDestroyed()
- refactor(toaster): remove ComponentFactoryResolver

---

#### `4.4.9`

- refactor: safe ?.unsubscribe() from subscriptions
- chore(dependencies): update

---

#### `4.4.8`

- refactor(tabs): safe tabServiceSubscription?.unsubscribe()
- chore(dependencies): update

---

#### `4.4.7`

- feat(form-check): add reverse prop
- chore(dependencies): update

---

#### `4.4.1`

- fix(alert): typo in template
- refactor(html-attr): cleanup
- refactor(icon, icon-set): cleanup

---

#### `4.4.0`

- chore: dependencies update
- chore(sidebar): minor cleanups

---

#### `4.4.0-next.1`

- feat: standalone components
- chore: dependencies update
- fix(popover): remove popover when host element is not visible

---

#### `4.3.17`

- `@coreui/angular`
- `@coreui/angular-chartjs`
- `@coreui/icons-angular`
    - chore: dependencies update

---

#### `4.3.16`

- `@coreui/angular`
    - chore: dependencies update
- `@coreui/angular-chartjs`
    - chore: dependencies update
- `@coreui/icons-angular`
    - feat(cIcon): standalone directive
    - chore: dependencies update

---

#### `4.3.15`

- `@coreui/angular-chartjs`
    - feat(c-chart): emit chartRef on new Chart()
    - feat(c-chart): standalone component
    - chore: dependencies update

---

#### `4.3.11`

- fix(offcanvas): avoid flicker on the first render

---

#### `4.4.0-next.0`

- feat: standalone components (wip)

---

#### `4.3.10`

- feat(offcanvas): add responsive variations
- refactor(offcanvas): animation classes, scrollbar behavior, cleanup
- refactor(modal, offcanvas): move get scrollbarWidth to BackdropService
- feat(offcanvas): add backdrop static option support
- chore: dependencies update

---

#### `4.3.9`

- chore: dependencies update

---

#### `4.3.8`

- fix(dropdown): visibleChange emit and visibleState update on changes, refactor with rxjs

---

#### `4.3.7`

update to:

- `Angular 15.1`

---

#### `4.3.0`

update to:

- `Angular 15`
- `TypeScript 4.8`
- `RxJS 7.5`

---
