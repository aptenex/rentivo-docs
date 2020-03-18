import styled from 'styled-components';
import Image from 'gatsby-image';
import Link from 'gatsby-link';
import { themeGet } from 'styled-system';
export const CaseStudySlideWrapper = styled.div`
  --gradient-background: linear-gradient( 47deg,${themeGet('colors.primaryDark', '#eb4d4b')} 0%,${themeGet('colors.primary', '#eb4d4b')} 100% );
  --gradient-color: #fad961;
  .glide__bullets {
    margin-top: 45px;
    text-align: center;
    @media (max-width: 575px) {
      margin-top: 30px;
    }
    .glide__bullet {
      width: 12px;
      height: 12px;
      background: #e7f1ed;
      margin: 5px;
      transition: 0.15s ease-in-out;
      &:hover {
        background: #d8e2de;
      }
      &.glide__bullet--active {
        background: #c9cecc;
      }
    }
  }
`;

export const StudyBackground = styled(Image)`
  filter: brightness(0.7);
  height: 100%;
`

export const CaseStudyBannerWrapper = styled(Link)`
  position: relative;
  overlfow: hidden;
  display: block;
    transition: all 0.4s ease 0s;
    transform: scale(1) rotate(0.0deg);
  
  
`

export const LogoImage = styled(Image)`
  position: absolute !important;
  z-index: 10;
  bottom: 20px;
  left: 20px;
  max-width: 60%;
  height: 75px;
  overflow: visible;
  filter: brightness(0) invert(1);
`;

export const ImageLabel = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: 20px;
  z-index: 10;
  background: var(--gradient-background);
  padding: 4px 7px;
  display: inline-block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    line-height: 1;
    text-transform: uppercase;
    background-size: 101% 100%;
    color: rgb(255, 255, 255);
    margin: 0px 16px 0px 0px;
    padding: 6px 12px;
    border-radius: 12px;
`;
export const CaseStudyBody = styled.div`
  position: relative;
  display: block;
  background: #fff;
  border: 1px solid #f2f4f7;
  padding: 20px;
`;



export const AccentFocusHighlightBar = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 6px;
    opacity: 0;
    background-image: var(--gradient-background);
    transform: translate3d(-100%, 0px, 0px);
    transition: transform 0.4s ease 0s, opacity 0.4s ease 0s;
`;


export const CaseStudyItem = styled.div`
  position: relative;
  display: block;
  background: #fff;
  border: 1px solid #f2f4f7;
  border-radius: 5px;  
  transition: all 0.4s ease 0s;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 5px 0px;
  
  &:hover {
      ${StudyBackground} {
        transition: all 0.4s ease 0s;
        transform: scale(1.01) rotate(0.01deg);
      }
  
      background: #d8e2de;
      transform: translateY(-5px);
      box-shadow: rgba(0, 0, 0, 0.07) 0px 5px 14px 2px;
      ${AccentFocusHighlightBar} {
        transition: transform 0.4s ease 0s, opacity 0.4s ease 0s;
        opacity: 0.9;
        transform: translate3d(0px, 0px, 0px);
      }
  }
 
`;

export const CaseStudyMeta = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  a {
      letter-spacing: 0.12em;
      font-size: 1.3em;
      font-weight: 600;
  }
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  flex-basis: 50px;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 6px 30px 0px rgba(39, 79, 117, 0.2);
  margin-right: 15px;
  @media (max-width: 575px) {
    width: 40px;
    height: 40px;
    flex-basis: 40px;
  }
`;
