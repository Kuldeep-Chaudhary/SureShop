import { keyframes } from "@emotion/react";

// export const flipHorizontalBottom = keyframes`
// 0% {
// -webkit-transorm: rotateX(0);
// transform: roateX(0);
// }
// 100%{
// -webkit-transform: rotateX(-180deg);
// transform:rotate(-180deg);
// }
// `;
// animation text-pop-up-top

// export const textPopUpTop = keyframes`
// 0%{
// -webkit-transform: translateY(0);
// transform: translateY(0);
// -webkit-transform-origin: 50% 50%;
// transform-origin: 50% 50%;
// text-shadow:none;
// }
// 100%{
// -webkit-transform: translateY(-10px);
// transform: translateY(-10px);
// -webkit-transform-origin: 50% 50%;
// transform-origin: 50% 50%;
// text-shadow: 0 1px 0 #000, 0 2px 0 #000, 0 3px 0 #000, 0 4px 0 #000,
//  0 5px 0 #000, 0 6px 0 #000, 0 7px 0 #000, 0 8px 0 #000,;
// }
// `

// animation slide-in-bottom

export const slideInBottom = keyframes`
0% {
-webkit-transorm: translateY(50px);
transform: translateY(50px);
opacity:0;
}
100%{
-webkit-transform: translateY(0px);
transform: translateY(0px);
opacity: 1;
}
`;
// animation slide-in-right

export const slideInRight = keyframes`
0% {
-webkit-transorm: translateX(50px);
transform: translateY(50px);
opacity:0;
}
100%{
-webkit-transform: translateX(0px);
transform: translateY(0px);
opacity: 1;
}
`;