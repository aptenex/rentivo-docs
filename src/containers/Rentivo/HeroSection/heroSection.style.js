import styled from 'styled-components';
import {themeGet} from 'styled-system';

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
      }
      .bg-2 {
          top: 8%;
        background-image: linear-gradient(-90deg,#fff,hsla(0,0%,100%,0) 68%,hsla(0,0%,100%,0));
      }
      
      .bg-3 {
      
          top: 16%;
        background-image: linear-gradient(-90deg,#fff,hsla(0,0%,100%,0) 76%,hsla(0,0%,100%,0));
      }
  }
  
  h1,h2,h3 {
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

export default HeroWrapper;
