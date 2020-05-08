import styled, {keyframes} from 'styled-components';
import {themeGet} from 'styled-system';
import Heading from 'reusecore/src/elements/Heading';
const wave = keyframes`
  0% {
    top: -2%;
    right: -2%
  }
  50% {
    top: 6%;
    right: 2%
  }
  100% {
    top: -2%;
    right: -2%
  }
`

const waveThread1 = keyframes`
  0% {
    top: 0%;
    right: -2%
  }
  50% {
    top: 4%;
    right: 2%
  }
  75% {
    top: 3%;
    right: 1%
  }
  100% {
    top: 0%;
    right: -2%
  }
`

const waveThread2 = keyframes`
  0% {
    top: 8%;
    right: -2%
  }
  50% {
    top: 2%;
    right: 2%
  }
  100% {
    top: 8%;
    right: -2%
  }
`

const waveThread3 = keyframes`
  0% {
    top: 16%;
    right: -2%
  }
  50% {
    top: 4%;
    right: 2%
  }
  100% {
    top: 16%;
    right: -2%
  }
`

const HeroWrapper = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
  position: relative;
  overflow: hidden;
  text-align: center;

 
  .button__wrapper {
    margin-top: 40px;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
    .reusecore__button {
      &.outlined {
        border-color: rgba(82, 104, 219, 0.2);
      }
    }
  }
  @media (max-width: 800px) {
     .btn-primary {
       margin-bottom: 10px;
     }
  }
  @media (min-width: 600px) {
    h1 {
      font-size: 52px;
    }
    h2 {
     font-size: 42px;
    }
    h3 {
      font-size: 36px;
      font-weight: bold;
    }
    
  }
  &.coop,
  &.manage,
  &.channels,
  &.website
  {
    h1, h3 {    
      color: white;
    }
    .tagline {
      color: #c4d2f1;
    }
  }
  &.coop 
  {
    h1, h2, h3 {    
      color: white;
    }
    .tagline {
      color: #f2f2f2;
    }
  }
  .btn { 
    border-radius: 30px;
    &:hover {      
      box-shadow: 0 5px 10px 0 rgba(11,12,36,.3);
      -webkit-transform: translateY(-2px);
      transform: translateY(-2px);
    }
  }
  .contained-bg {
    
      position: absolute;
      height: 200%;
      width: 6000px;
      top: -2%;
      left: calc(100% - 3000px);
      pointer-events: none;
      will-change: transform;
      -webkit-transform: rotate(-20deg);
      transform: rotate(-20deg);
      animation: ${wave} 12s linear infinite;
      .bg-settings {
          opacity: .08;
          position: absolute;
          height: 100%;
          width: 100%;
          left: 0;
      }
      .bg-1 {
          top: 0;
          background-image: linear-gradient(-90deg,#fff,hsla(0,0%,100%,0) 60%,hsla(0,0%,100%,0));
          animation: ${waveThread1} 12s linear infinite;
      }
      .bg-2 {
          top: 8%;
        background-image: linear-gradient(-90deg,#fff,hsla(0,0%,100%,0) 68%,hsla(0,0%,100%,0));
        animation: ${waveThread2} 12s linear infinite;
      }
      
      .bg-3 {
      
          top: 16%;
        background-image: linear-gradient(-90deg,#fff,hsla(0,0%,100%,0) 76%,hsla(0,0%,100%,0));
        animation: ${waveThread3} 12s linear infinite;
      }
  }
  
  h1,h2,h3 {
    position: relative;
      font-weight: 400;
  } 
  .tagline {
    color: #666;
    line-height: 36px;
    font-weight: 400;
    @media (min-width: 600px) {
      font-size: 24px;
    }
    
    margin-bottom: 2em;    
  }
`;

export const TitleDecorWrapper = styled.u`
      position: absolute;
    top: -1rem;
    left: 50%;
    z-index: -1;
    transform: translate(-50%,-50%);
    font-size: 6.5rem;
    font-weight: 900;
    line-height: 6rem;
    color: #ccd7e5;
    white-space: nowrap;
`;
export default HeroWrapper;
