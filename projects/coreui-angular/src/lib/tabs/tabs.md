### Tabs

**CoreUI Angular Tabs** can be used to create a tabbed interface with tabbable regions.

_examples_
```angular2html
<c-nav variant="underline">
  <c-nav-item>
    <a cNavLink [routerLink] [cTabContent]="tabContent1" [tabPaneIdx]="0">
      Home
    </a>
  </c-nav-item>
  <c-nav-item>
    <a cNavLink [routerLink] [cTabContent]="tabContent1" [tabPaneIdx]="1" [disabled]="true">
      Profile
    </a>
  </c-nav-item>
</c-nav>
<c-tab-content #tabContent1="cTabContent" [activeTabPaneIdx]="1">
  <c-tab-pane  class="p-3 preview" role="tabpanel" >
    This is some placeholder content the <strong>Home</strong> tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
  </c-tab-pane>
  <c-tab-pane class="p-3 preview" role="tabpanel" >
    This is some placeholder content the <strong>Profile</strong> tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
  </c-tab-pane>
</c-tab-content>
````

```angular2html
<c-nav variant="pills">
  <c-nav-item>
    <a cNavLink [routerLink] [cTabContent]="tabContent3" [tabPaneIdx]="0" [active]="true">
      Home
    </a>
  </c-nav-item>
  <c-nav-item>
    <a cNavLink [routerLink] [cTabContent]="tabContent3" [tabPaneIdx]="1">
      Profile
    </a>
  </c-nav-item>
</c-nav>
<c-tab-content #tabContent3="cTabContent" >
  <c-tab-pane  class="p-3 preview" role="tabpanel" >
    This is some placeholder content the <strong>Home</strong> tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
  </c-tab-pane>
  <c-tab-pane class="p-3 preview" role="tabpanel" >
    This is some placeholder content the <strong>Profile</strong> tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
  </c-tab-pane>
</c-tab-content>
````

```ts
// code excerpt
@Component({
  template: `
  <c-nav variant="tabs">
  <c-nav-item *ngFor="let nav of panes; index as i; first as isFirst; last as isLast">
    <a cNavLink [routerLink] [cTabContent]="tabContent2" [tabPaneIdx]="i" [active]="isFirst" [disabled]="isLast">
      {{nav.name}}
    </a>
  </c-nav-item>
</c-nav>
<c-tab-content #tabContent2="cTabContent" [activeTabPaneIdx]="1">
  <c-tab-pane *ngFor="let pane of panes; index as i;" class="p-3 preview">
    This is some placeholder content the <strong>{{pane.name}}</strong> tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
  </c-tab-pane>
</c-tab-content>
  `,
})
export class SampleComponent {
  public panes = [
    { name: 'Home 01', id: 'tab-01' },
    { name: 'Profile 02', id: 'tab-02' },
    { name: 'Contact 03', id: 'tab-03' },
  ]
}
```


#### Tabs API

```ts
import { TabsModule } from '@coreui/angular';
```

#### `<c-tab-content>` component

export name | description
---|---
exportAs: `cTabContent`| Defines the name that can be used in the template to assign this component to a variable.

prop|type|default|description
---|---|---|---
`activeTabPaneIdx` | `number` |_undefined_| preset active tabPane
---

#### `<c-tab-pane>` component

export name | description
---|---
exportAs: `cTabPane`| Defines the name that can be used in the template to assign this component to a variable.
---

#### `[cTabContentRef]` directive

On click event triggers `active` prop on corresponding `cNavLink` and `<c-tab-pane>` 

prop|type|default|description
---|---|---|---
`cTabContent` | `TabContentComponent` |_undefined_| assign `<c-tab-content>` to directive by template #variable
`tabPaneIdx`| `number` | _-1_ | assigns corresponding `<c-tab-pane>` index to directive
`active`| `boolean` | _undefined_ | set active `cNavLink` and corresponding `<c-tab-pane>`
`disabled`| 'boolean' |_false_| disables `cNavLink`  

Note: `cNavLink` is also disabled when there is no corresponding `<c-tab-pane>`

---
#### `TabService` service
provides `activeTabPaneIdx$` observable for components interaction with following interface

```ts
interface ITabContentState {
  activeIdx: number,
  tabContent: TabContentComponent
}
```
