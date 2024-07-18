<p align="center">
  <a href="https://coreui.io/">
    <img
      src="https://coreui.io/images/brand/coreui-signet.svg"
      alt="CoreUI logo"
      width="200"
    />
  </a>
</p>

<h3 align="center">CoreUI Icons for Angular</h3>

<p align="center">
  <br>
  <a href="https://coreui.io/angular/docs/icons"><strong>Explore CoreUI for Angular docs »</strong></a>
  <br>
  <br>
  <a href="https://icons.coreui.io/"><strong>CoreUI Icons »</strong></a>
  <br>
  <br>
  <a href="https://github.com/coreui/coreui-icons-angular/issues/new?template=bug_report.md">Report a bug</a>
  ·
  <a href="https://github.com/coreui/coreui-icons-angular/issues/new?template=feature_request.md">Request a feature</a>
  ·
  <a href="https://blog.coreui.io/">Blog</a>
</p>

# CoreUI Icons Angular

![angular][angular-badge]
[![npm-coreui-angular-v5-ng18][npm-coreui-icons-angular-v5-ng18]][coreui-angular-icons-npm]
[![npm-coreui-angular-latest][npm-coreui-icons-angular-latest]][coreui-angular-icons-npm]
[![npm-coreui-angular-next][npm-coreui-icons-angular-next]][coreui-angular-icons-npm]  
[![Downloads](https://img.shields.io/npm/dm/@coreui/icons-angular.svg?style=flat-square)][coreui-angular-icons-npm]
[![License](https://img.shields.io/npm/l/@coreui/angular?style=flat-square)][coreui]  

[coreui]: https://coreui.io/icons
[coreui-angular-icons-npm]: https://www.npmjs.com/package/@coreui/icons-angular
[npm-coreui-icons-angular-v5-ng18]: https://img.shields.io/npm/v/@coreui/icons-angular/v5-ng18?style=flat-square&color=brightgreen
[npm-coreui-icons-angular-latest]: https://img.shields.io/npm/v/@coreui/icons-angular/latest?style=flat-square&color=brightgreen
[npm-coreui-icons-angular-next]: https://img.shields.io/npm/v/@coreui/icons-angular/next?style=flat-square&color=red
[angular-badge]: https://img.shields.io/badge/angular-^18.1.0-lightgrey.svg?style=flat-square&logo=angular

## `cIcon` directive

Angular directive for [CoreUI Icons SVG set](https://coreui.io/icons/).

### Features

- Load icons:
  - stored in Angular root service,
  - directly passed SVG  content,
- Reduce icons bundle size when imported as single icons,
- Full functionality of `<svg>` tag,
- Clean API

For directive description visit [https://coreui.io/angular/docs/](https://coreui.io/angular/docs/4.0/)

### Installation

```shell
npm install @coreui/icons@3
npm install @coreui/icons-angular@5.2
```

### Usage

```ts
// app NgModule

import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  imports: [
    IconModule,
...
  providers: [IconSetService],
...
```

```ts
// app component

import { cilEnvelopeOpen, flagSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  ...
})
export class AppComponent implements OnInit {
  constructor(public iconSet: IconSetService) {
    // iconSet singleton
    iconSet.icons = { cilEnvelopeOpen, ...flagSet };
  }
...
```

```jsx
<svg cIcon name="cil-envelope-open" size="lg"></svg>
<svg cIcon name="cifAu"></svg>
```

### API

#### Icon _directive_
> Use one of `name` or `content` prop as it defines the way of icon import

##### Inputs

proprerty | type | default | description  
---|---|---|---
`name` | string | undefined | name of SVG icon stored in IconSetService
`content` | string, string[] | undefined | SVG content 
`size` | `custom`, `custom-size`, `sm`, `lg`, `xl`, `xxl`, `3xl`, `4xl`, `5xl`, `6xl`, `7xl`, `8xl`, `9xl` | '' | Size of icon
`title` | string | undefined |
`customClasses` | string | undefined | Overwrites default `.icon` classes
`viewBox` | string | undefined | SVG `viewbox`
`width` | string | undefined | SVG `width`
`height` | string | undefined | SVG `height`

--- 

#### IconSet _service_

##### Props

| proprerty | type | default | description|
| --- | --- | --- | --- |
| `getIcon()` | `(string): any[] ` | | returns an icon |
| `icons` | `IIconSet` | undefined | IconSet object |
| `iconNames` | `[key: string]: string` | _undefined_ | returns icon name from key |

---

## Support CoreUI Development

CoreUI is an MIT-licensed open source project and is completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. You can support development by buying the [CoreUI PRO](https://coreui.io/pricing/) or by becoming a sponsor via [Open Collective](https://opencollective.com/coreui/).

<!--- StartOpenCollectiveBackers -->

### Platinum Sponsors

Support this project by [becoming a Platinum Sponsor](https://opencollective.com/coreui/contribute/platinum-sponsor-40959/). A large company logo will be added here with a link to your website.

<a href="https://opencollective.com/coreui/contribute/platinum-sponsor-40959/checkout"><img src="https://opencollective.com/coreui/tiers/platinum-sponsor/0/avatar.svg?avatarHeight=100"></a>

### Gold Sponsors

Support this project by [becoming a Gold Sponsor](https://opencollective.com/coreui/contribute/gold-sponsor-40960/). A big company logo will be added here with a link to your website.

<a href="https://opencollective.com/coreui/contribute/gold-sponsor-40960/checkout"><img src="https://opencollective.com/coreui/tiers/gold-sponsor/0/avatar.svg?avatarHeight=100"></a>

### Silver Sponsors

Support this project by [becoming a Silver Sponsor](https://opencollective.com/coreui/contribute/silver-sponsor-40967/). A medium company logo will be added here with a link to your website.

<a href="https://opencollective.com/coreui/contribute/silver-sponsor-40967/checkout"><img src="https://opencollective.com/coreui/tiers/gold-sponsor/0/avatar.svg?avatarHeight=100"></a>

### Bronze Sponsors

Support this project by [becoming a Bronze Sponsor](https://opencollective.com/coreui/contribute/bronze-sponsor-40966/). The company avatar will show up here with a link to your OpenCollective Profile.

<a href="https://opencollective.com/coreui/contribute/bronze-sponsor-40966/checkout"><img src="https://opencollective.com/coreui/tiers/bronze-sponsor/0/avatar.svg?avatarHeight=100"></a>

### Backers

Thanks to all the backers and sponsors! Support this project by [becoming a backer](https://opencollective.com/coreui/contribute/backer-40965/).

<a href="https://opencollective.com/coreui/contribute/backer-40965/checkout" target="_blank" rel="noopener"><img src="https://opencollective.com/coreui/backers.svg?width=890"></a>

<!--- EndOpenCollectiveBackers -->

## Copyright and license

Copyright 2024 creativeLabs Łukasz Holeczek. Code released under the [MIT License](https://github.com/coreui/coreui-angular/blob/main/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).

