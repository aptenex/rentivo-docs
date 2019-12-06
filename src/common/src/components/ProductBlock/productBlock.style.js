import styled from 'styled-components';
import {
  color,
  width,
  height,
  display,
  space,
  borders,
  borderColor,
  boxShadow,
  borderRadius,
  flexWrap,
  alignItems,
  justifyContent,
  flexDirection,
  position,
  overflow,
  fontSize,
  textAlign,
} from 'styled-system';

// ProductBlock wrapper style
const ProductBlockWrapper = styled.a`
  display: block;
  &.icon_left {
    display: flex;
    .icon__wrapper{
      flex-shrink: 0;
    }
  }
  div.imgWrapper .gatsby-image-wrapper {
    display: block !important;
    margin: 0 auto;
    
  }
  div.imgWrapper img, 
  div.svgWrapper > svg {
    position: relative;
    height: 124px;
    margin-top: 20px;
    display: block;
    &::after {
      content: '';
      display: block;
      width: 42px;
      height: 12px;
      border-radius: 5px;
      background-color: red;
      position: absolute;
      top: 0px;
      z-index: 3;
    }
  }
  div.imgWrapper::before,
  div.svgWrapper::before {
      content: '';
      display: block;
      width: 82px;
      height: 15px;
      border-radius: 5px;
      background-color: #01c88b63;
      left: 37%;
      top: 51%;
      position: absolute;
      margin-top: -30px;
      z-index: -2;
    }
  div.imgWrapper::after,
  div.svgWrapper::after {
      content: '';
      display: block;
      width: 42px;
      height: 12px;
      border-radius: 5px;
      background-color: #01c88b;
      left: 45%;
      position: absolute;
      margin-top: -38px;
      z-index: -2;
    }
  }
  
  
  &.icon_right {
    display: flex;
    flex-direction: row-reverse;
    .content__wrapper {
      text-align: right;
    }
    .icon__wrapper{
      flex-shrink: 0;
    }
  }
  
 
  &:hover .overlayContentWrapper {
    display: block;
    opacity: 1;
    visibility: visible;
    bottom: -105px;
    transition: all 0.3s ease;
    h2 {
      color: #01c88b;
      font-size: 1.5em;
      font-weight: bold;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.3s ease;
    width: 100%;
    height: 100%;
    background: #01c88b;
    background: #012837;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    z-index: 1; 
  
  }
  &:hover {
    ::before {
        opacity: 1;
        transition: all 0.3s ease;
        visibility: visible;
    }
  }
  


  /* styled system prop support */
  overflow: hidden;
  ${display}
  ${width}
  ${height}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}  
  ${color}
  ${space}
  ${borders}
  ${borderColor}
  ${boxShadow}
  ${borderRadius}
  ${overflow}
  margin: 0 auto;
`;

// Icon wrapper style
const IconWrapper = styled.div`
  ${display}
  ${width}
  ${height}
  ${alignItems}
  ${justifyContent}
  margin: 0 auto;
  ${color}
  ${space}
  ${borders}
  ${borderColor}
  ${boxShadow}
  ${borderRadius}
  ${overflow}
  ${fontSize}
  margin-top: 40px;
`;

// Content wrapper style
const ContentWrapper = styled.div`
  ${width}
  ${space}
  ${textAlign}
`;

// Content wrapper style
const OverlayWrapper = styled(ContentWrapper)`
  
  left: 0px;
  position: absolute;
  bottom: -390px;
  height: 340px;
  padding: 20px;
  transition: all 0.8s ease;
  opacity: 0;  
  visibility: hidden;
  z-index: 2;
  width: 100%;
  p { 
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
   }
`;


// Button wrapper style
const ButtonWrapper = styled.div`
  ${display}
  ${space}
  ${alignItems}
  ${flexDirection}
  ${justifyContent}
`;

export {IconWrapper, ContentWrapper, ButtonWrapper, OverlayWrapper};
export default ProductBlockWrapper;
