### [@coreui/angular](https://coreui.io/angular/) changelog

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
