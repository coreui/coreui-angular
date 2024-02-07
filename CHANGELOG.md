### [@coreui/angular](https://coreui.io/angular/) changelog

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
