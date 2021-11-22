### Close Button

**CoreUI Angular Close Button** `cButtonClose` directive can be used for dismissing content like modals and alerts.

_examples_
```angular2html
<button cButtonClose white></button>
<button cButtonClose [white]="true"></button>
````
```angular2html
<button cButtonClose disabled></button>
````
```angular2html
<button cButtonClose active>X</button>
```
```angular2html
<button cButtonClose size="lg" ></button>
<button cButtonClose size="sm" ></button>
```
```angular2html
<button cButtonClose cBgColor="danger"></button>
<button cButtonClose disabled cBgColor="danger"></button>
```

#### cButtonClose API
##### `cButtonClose` directive

```ts
import { ButtonModule } from '@coreui/angular';
```

prop|type|default|description
---|---|---|---
`active` | `boolean` |_undefined_| pressed state
`disabled` | `boolean` |_null_| disabled attribute
`size`|`Sizes`|_undefined_| size `sm..xl`
`white` | `boolean` |_undefined_| white variant
---

Additional Utilities:

```ts
import { UtilitiesModule } from '@coreui/angular'
```

directive|type|description
---|---|---
`[cBgColor]`|`string`| background color
---
