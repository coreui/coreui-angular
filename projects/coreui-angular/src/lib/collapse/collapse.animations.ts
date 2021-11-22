import { animation, animate, style } from '@angular/animations';

export const expandAnimation = animation([
  style({ height: 0, visibility: 'hidden', overflow: 'hidden', paddingTop: 0, paddingBottom: 0 }),
  animate('{{ time }} {{ easing }}', style({ height: '*', visibility: 'visible', paddingTop: '*', paddingBottom: '*', minHeight: '*' })
  ),
  animate('{{ time }}', style({opacity: '*', overflow: '*'})),
]);

export const collapseAnimation = animation([
  style({ height: '*', visibility: 'visible', overflow: 'hidden', paddingTop: '*', paddingBottom: '*', minHeight: '*' }),
  animate(
    '{{ time }} {{ easing }}',
    style({ height: 0, visibility: 'hidden', opacity: 0, overflow: 'hidden', paddingTop: 0, paddingBottom: 0, minHeight: 0 })
  )
]);
