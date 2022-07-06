#### CoreUI v2 `app-header` angular component

prop | type | default | example
--- | --- | --- | ---
fixed | boolean | `false` |  
navbarBrand | any  | | 
navbarBrandFull | any | | `{src: 'assets/img/brand/logo.svg', width: 89, height: 25, alt: 'CoreUI Logo'}`
navbarBrandMinimized | any | | `{src: 'assets/img/brand/sygnet.svg', width: 30, height: 30, alt: 'CoreUI Logo'}` 
navbarBrandText | any | `{icon: '🅲', text: '🅲 CoreUI'}` |
navbarBrandRouterLink | any[], string  | | `['/dashboard']`
sidebarToggler | string, boolean | | `'lg'`
mobileSidebarToggler | boolean | 
asideMenuToggler | string, boolean | | `'lg'`
mobileAsideMenuToggler | boolean |

notes:  
- `[fixed] = "true"` : set `header-fixed` class   
- `[sidebarToggler] = "'lg'"` : toggler breakpoint for desktop/mobile view   
- `[sidebarToggler] = "false"` : remove toggler 
- `[mobileSidebarToggler] = "false"` : remove mobile toggler 
- `[asideMenuToggler] = "false"` : remove toggler 
- `[mobileAsideMenuToggler] = "false"` : remove mobile toggler 

to shift default ( lg, md ) desktop/mobile breakpoint in your template:
1. override `_variables.scss`
    ```scss
    // Variable overrides
    $breakpoint-mobile-up: md;
    $breakpoint-mobile-down: sm;
    ```

2. set complementary changes to `default-layout.component.html`  
  - `<app-header [sidebarToggler]="'md'" ... >`
  - `<app-sidebar [display]="'md'" ... >`
