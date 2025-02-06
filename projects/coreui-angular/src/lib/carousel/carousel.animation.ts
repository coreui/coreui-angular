import { animate, animation, group, query, state, style, transition, trigger, useAnimation } from '@angular/animations';

export function toSlideLeft(fromState: any, toState: any): boolean {
  return toState.left === true && toState.type === 'slide';
}

export function toSlideRight(fromState: any, toState: any): boolean {
  return toState.left === false && toState.type === 'slide';
}

export function toFadeLeft(fromState: any, toState: any): boolean {
  return toState.left === true && toState.type !== 'slide';
}

export function toFadeRight(fromState: any, toState: any): boolean {
  return toState.left === false && toState.type !== 'slide';
}

export const slideAnimationLeft = animation(
  group([
    query(
      ':leave',
      [
        animate(
          '0.6s ease-in-out',
          style({
            transform: 'translateX(-100%)'
          })
        )
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({
          transform: 'translateX(100%)'
        }),
        animate('0.6s ease-in-out', style('*'))
      ],
      { optional: true }
    )
  ])
);

export const slideAnimationRight = animation(
  group([
    query(
      ':enter',
      [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('0.6s ease-in-out', style('*'))
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        animate(
          '0.6s ease-in-out',
          style({
            transform: 'translateX(100%)'
          })
        )
      ],
      { optional: true }
    )
  ])
);

export const fadeAnimationLeft = animation(
  group([
    query(
      ':leave',
      [
        animate(
          '0.9s ease-in-out',
          style({
            zIndex: 0,
            opacity: 0
          })
        )
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({
          zIndex: 1,
          opacity: 1
        }),
        animate('0.6s ease-in-out', style('*'))
      ],
      { optional: true }
    )
  ])
);
export const fadeAnimationRight = animation(
  group([
    query(
      ':enter',
      [
        style({
          zIndex: 1,
          opacity: 1
        }),
        animate('0.6s ease-in-out', style('*'))
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        animate(
          '0.9s ease-in-out',
          style({
            zIndex: 0,
            opacity: 0
          })
        )
      ],
      { optional: true }
    )
  ])
);

export const carouselPlay = trigger('carouselPlay', [
  state('*', style({ transform: 'translateX(0)', display: 'block', opacity: 1 })),
  transition(toFadeLeft, useAnimation(fadeAnimationLeft)),
  transition(toFadeRight, useAnimation(fadeAnimationRight)),
  transition(toSlideLeft, useAnimation(slideAnimationLeft)),
  transition(toSlideRight, useAnimation(slideAnimationRight))
]);
