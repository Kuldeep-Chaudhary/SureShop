import { keyframes } from "@emotion/react";


export const slideInBottom = keyframes`
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    opacity: 1;
  }
`;

// animation slide-in-right
export const slideInRight = keyframes`
  0% {
    -webkit-transform: translateX(50px);
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
    opacity: 1;
  }
`;
