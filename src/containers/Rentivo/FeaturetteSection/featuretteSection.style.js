import styled from 'styled-components';
import {themeGet} from 'styled-system';
import BannerBG from 'common/src/assets/image/saas/saas-banner.jpg';

const HeroWrapper = styled.section`
  
  padding-top: 80px;
  padding-bottom: 120px;
  
  .featureLogo {
    max-width: 200px;
    float: right;
  }
  
  &.hero {
    padding-top: 210px;
    padding-bottom: 160px;
    background-image: url(${BannerBG});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
  }
  
  position: relative;
  overflow: hidden;

  .particle {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    @media (max-width: 990px) {
      display: none;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }


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
`;

const BannerObject = styled.div`
  
`;

const LeadingLabel = styled.div`
  display: inline-block;
  border-radius: 4em;
  border: 1px solid ${themeGet('colors.lightBorder', '#f1f4f6')};
  padding: 7px 25px;
  box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.05);
  margin-bottom: 30px;
  background-color: ${themeGet('colors.white', '#ffffff')};
  @media (max-width: 767px) {
    padding: 7px 15px;
  }
`;

export {LeadingLabel, BannerObject};

export default HeroWrapper;
