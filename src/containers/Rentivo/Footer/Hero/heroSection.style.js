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
  
  
  .tagline {
    color: #666;
    line-height: 36px;
    @media (min-width: 600px) {
      font-size: 24px;
    }
    
    margin-bottom: 2em;
    
  }
`;

export default HeroWrapper;
