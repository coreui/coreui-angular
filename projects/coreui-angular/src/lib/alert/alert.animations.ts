import {animation, animate, style} from '@angular/animations';

export const showAnimation = animation(
  [
    // style({opacity: 0, height: 0, padding: 0, border: 0, margin: 0}),
    animate('{{ time }} ease-in', style({opacity: '*'})),
    animate('{{ time }} {{ easing }}', style({height: '*', padding: '*', border: '*', margin: '*'}))
  ],
  {
    params: { time: '300ms', easing: 'ease-in' }
  });
export const hideAnimation = animation(
  [
    animate('{{ time }} {{ easing }}', style({opacity: 0})),
    animate('{{ time }} {{ easing }}', style({opacity: 0, height: 0, padding: 0, border: 0, margin: 0})),
      ],
  {
    params: { time: '300ms', easing: 'ease-out' }
  });
