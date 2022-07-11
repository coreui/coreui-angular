import { animation, animate, style } from '@angular/animations';

export const expandAnimation = animation([
  style({ height: 0, visibility: 'hidden', paddingTop: 0, paddingBottom: 0 }),
  animate('{{ time }} {{ easing }}', style({ height: '*', visibility: 'visible', paddingTop: '*', paddingBottom: '*', minHeight: '*' })
  ),
  animate('{{ time }}', style({opacity: '*'})),
]);

export const collapseAnimation = animation([
  style({ height: '*', visibility: 'visible', paddingTop: '*', paddingBottom: '*', minHeight: '*' }),
  animate(
    '{{ time }} {{ easing }}',
    style({ height: 0, visibility: 'hidden', opacity: 0, paddingTop: 0, paddingBottom: 0, minHeight: 0 })
  )
]);

export const expandHorizontalAnimation = animation([
  style({ width: 0, visibility: 'hidden', paddingLeft: 0, paddingRight: 0 }),
  animate('{{ time }} {{ easing }}', style({ width: '*', visibility: 'visible', paddingLeft: '*', paddingRight: '*', minWidth: '*' })
  ),
  animate('{{ time }}', style({opacity: '*'})),
]);

export const collapseHorizontalAnimation = animation([
  style({ width: '*', visibility: 'visible', paddingLeft: '*', paddingRight: '*', minWidth: '*' }),
  animate(
    '{{ time }} {{ easing }}',
    style({ width: 0, visibility: 'hidden', opacity: 0, paddingLeft: 0, paddingRight: 0, minWidth: 0 })
  )
]);
