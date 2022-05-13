import { animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";


export let fade = trigger('fade',[
    state('void',style({opacity : 0})),
    transition(':enter',[
        animate(500)
    ])
]);


// export let fade =     trigger('fadeInAnimation', [

//     // route 'enter' transition
//     transition(':enter', [

//         // css styles at start of transition
//         style({ opacity: 0 }),

//         // animation and styles at end of transition
//         animate('.3s', style({ opacity: 1 }))
//     ]),
// ]);