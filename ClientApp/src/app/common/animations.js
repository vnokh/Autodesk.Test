"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.slider = 
// export const fader =
animations_1.trigger('routeAnimations', [
    animations_1.transition('* <=> *', [
        // Set a default  style for enter and leave
        animations_1.query(':enter, :leave', [
            animations_1.style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            }),
        ]),
        // Animate the new page in
        animations_1.query(':enter', [
            animations_1.animate('500ms ease', animations_1.style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
        ])
    ]),
]);
//# sourceMappingURL=animations.js.map