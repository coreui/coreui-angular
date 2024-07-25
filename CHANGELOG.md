### [@coreui/angular](https://coreui.io/angular/) changelog

#### `5.2.8`

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
