import {
  animate,
  query,
  style,
  transition,
  trigger,
  group,
} from '@angular/animations';
export const slider =
// export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ]),
      // Animate the new page in
      query(':enter', [
        animate('500ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ])
    ]),
  ]);
