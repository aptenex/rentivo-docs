import styled from 'styled-components';
import { themeGet } from 'styled-system';
import BannerBG from 'common/src/assets/image/saas/saas-banner.jpg';

const HeroWrapper = styled.section`
  padding-top: 210px;
  padding-bottom: 160px;
  background-image: url(${BannerBG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  @media (max-width: 990px) {
    padding-top: 180px;
    padding-bottom: 60px;
    min-height: auto;
  }
  @media (max-width: 767px) {
    padding-top: 130px;
    padding-bottom: 20px;
    min-height: auto;
  }

  @media only screen and (max-width: 480px) {
    background: none;
  }

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

  .row-wrapper {
    position: relative;
    z-index: 1;
    .col-wrapper {
      z-index: 15;
      margin-bottom: 30px;
    }
    &.template_image_content {
      .col-wrapper {
        margin-left: 5%;
      }
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
  
  width: 50%;
  height: 100%;
   display: flex;
  align-items: center;
  z-index: 10;
  @media( max-width: 990px){
    width: 100%;
  }
  
  
  .underlay-wrapper {
    position: absolute;
    top: 0px;
    width: 100%;
    .image-underlay {
      position: absolute !important;      
      width: 100%;
   }
  }
 
   
  .container-wrapper {
    .image-underlay {
      position: absolute !important;
    }
  }
  
  
  &.heroImage {
    @media( min-width: 990px){
    
      position: absolute;
      top: 100px;
      right: 0;
      .heroImageCarouselWrapper {
         margin-top: 100px;
         position: absolute;
         top: 20px;
         right: 0;
        
      }
    }
  }
  
  .heroImageCarouselWrapper {           
      z-index: 10;   
       width: 100%; 
  }
  
 
  
  @media( max-width: 990px){
    .heroImageCarouselWrapper {           
      width: 100%;
      padding: 40px;    
    }
  }
  
   @media( max-width: 750px){
    .heroImageCarouselWrapper {           
      max-width: 750px;
      padding: 30px;    
    }
  }
  
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

export { LeadingLabel, BannerObject };

export default HeroWrapper;
