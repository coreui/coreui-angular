import { animate, animation, style } from '@angular/animations';

export const expandAnimation = animation([
  animate('{{ time }} {{ easing }}')
]);

export const collapseAnimation = animation([
  style({ height: '*', minHeight: '*' }),
  animate('{{ time }} {{ easing }}',
    style({ height: 0, minHeight: 0 })
  )
]);

export const expandHorizontalAnimation = animation([
  animate('{{ time }} {{ easing }}')
]);

export const collapseHorizontalAnimation = animation([
  // style({ opacity: '*' }),
  animate(
    '{{ time }} {{ easing }}'
    // style({ opacity: 0 })
  )
]);
