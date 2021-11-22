### Button

**CoreUI Angular Button** `cButton` directive can be used to customize html `<button>` or `<a>` elements.

_examples_
```angular2html
<button cButton color="success">ok</button>
````
```angular2html
<button cButton disabled>disabled</button>
<button cButton [disabled]="false">disabled="false"</button>
````
```angular2html
<button cButton active type="reset">active</button>
<button cButton [active]="false" >inactive</button>
```
```angular2html
<button cButton shape="rounded-pill">pill</button>
<button cButton shape="rounded-0">square</button>
```
```angular2html
<button cButton size="lg" >large</button>
<button cButton size="sm" >small</button>
```
```angular2html
<button cButton variant="ghost" >ghost</button>
<button cButton variant="outline" >outline</button>
```

```angular2html
<a href cButton >link</a>
<a href cButton disabled>link disabled</a>
```

#### cButton API
##### `cButton` directive

```ts
import { ButtonModule } from '@coreui/angular';
```

prop|type|default|description
---|---|---|---
`active` | `boolean` |_undefined_| pressed state
`color` | `Colors` | `primary` | background color
`disabled` | `boolean` |_null_| disabled attribute
`shape`|`Shapes`|_undefined_| `rounded-*` class
`size`|`Sizes`|_undefined_| size `sm..xl`
`type`|`ButtonTypes`| `button` | `button / submit / reset`
`variant`|`ghost / outline`|_undefined_| button variant
---

Additional Utilities:

```ts
import { UtilitiesModule } from '@coreui/angular'
```

directive|type|description
---|---|---
`[cTextColor]`|`string`| text color
---
