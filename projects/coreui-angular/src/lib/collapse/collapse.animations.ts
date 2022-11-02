import { animate, animation } from '@angular/animations';

export const expandAnimation = animation([
  animate('{{ time }} {{ easing }}')
]);

export const collapseAnimation = animation([
  animate('{{ time }} {{ easing }}')
]);

export const expandHorizontalAnimation = animation([
  animate('{{ time }} {{ easing }}')
]);

export const collapseHorizontalAnimation = animation([
  animate('{{ time }} {{ easing }}')
]);
