import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';
import NavbarItem from "./DesktopNav/Navbar/NavbarItem";
import Navbar from "./Navbar";
import {LoginLink, Cta, CtaSection, IconLock} from "./Navbar/Navbar.style";
import Logo from 'reusecore/src/elements/UI/Logo';
import Container from "../../common/src/components/UI/Container";



export const TagFilter = styled('ul')`
  font-size: 1.3em;
  max-width: 100%;
  margin: 0px;
  padding: 0px;  
  vertical-align: bottom;
  margin-bottom: 10px;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  li {
    border-radius: 3px;
    background: white;
    padding: 15px 30px;
    border: 1px solid #01b47d;
    margin-right: 20px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    &:hover {
      border: 1px solid #01b47d;      
      background: #e4fff7;
      cursor: pointer;
    }
    &.active {
      background: #01b47d;
      color: white;
      font-weight: 600;
      &:hover {
       
      }
    }    
  }
  
   @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    li { margin-bottom: 3px; margin-right: 0px;}    
   }
`;

export const TagList = styled(TagFilter)`
  font-size: 0.9em;
  display: inline-flex;  
  text-align: left;
    float:left;
    margin-bottom: 10px;
  li {    
    padding: 7px 12px;
    border: 1px solid #01b47d;    ;
    border-radius: 20px;
  }
   @media (max-width: 768px) {
      flex-direction: row;
      width: auto;
      li { margin-bottom: 3px;}    
   }
`;

export const RetiringIntegration = styled('label')`
  float: right;
  color: rgba(27,16,7,0.33);
`;
export const HotIntegration = styled('label')`
  @keyframes bounce {
    0%, 100%, 20%, 50%, 80% {
      transform:         translateY(0)
    }
    40% {
      transform:         translateY(-10px)
    }
    60% {
      transform:         translateY(-5px)
    }
  }
  
  animation-duration: 1.4s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  color: orange;
   &:hover {
      cursor: pointer;
    animation-name: bounce;
    -moz-animation-name: bounce;
   }
  svg:nth-child(2) {
    font-size: 1.2em;
    color: #ff4e00;
  }
  svg:last-child {
    font-size: 1.5em;
    color: red;
  }
`;

export const SoftLaunchIntegration = styled(HotIntegration)`
  color: #306eb3;
  svg:last-child {
    font-size: 1.5em;
    color: deepskyblue;
  }
`;

export const ComingSoonIntegration = styled(HotIntegration)`
  color: white;
  background: #ff615f;
  padding: 4px 12px;
  border-radius: 10px;
  font-size: 0.9em;
  svg:last-child {
    font-size: 1.5em;
    color: deepskyblue;
  }
`;

export const BlobWrapperA = styled.div`
  position: absolute;
  left: -40%;
`;
export const BlobWrapperB = styled.div`
  position: absolute;
  right: 40%;
`;
export const BlobWrapperC = styled.div`
  position: absolute;
  left: -40%;
`;

export const GlobalStyle = createGlobalStyle`
  
  body{
    font-family: 'Montserrat', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;
  }
  .tagline {
    color: #666;
    line-height: 36px;
    @media (min-width: 600px) {
      font-size: 24px;
    }
    margin-bottom: 2em;
    
  }
  .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
}
  
  .__react_component_tooltip {
        max-width: 460px;
    font-size: 1.1em !important;
    text-align: left;
    line-height: 1.3em;
    .multi-line {
    text-align: left !important;
    }
  }
  
  table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 3rem;
}

table th,
table td {
  padding: 0.75rem;
  vertical-align: top;
  border: 1px solid #BBB;  
  border-radius: 2px;
}

table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #AAA;
}

table tbody + tbody {
  border-top: 2px solid #eceeef;
}

table table {
  background-color: #fff;
}

table th,
table td {
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
}


  
  .supply {
    --primaryColor :  ${themeGet('colorStyles.products.supply.color')};
    svg [fill="#3f3d56"] { 
      fill: #f8cd53;
    }    
    svg [fill="#e6e6e6"] { 
      fill: ${themeGet('colorStyles.products.supply.color')};
    }
  }
  .manage {
    --primaryColor :  ${themeGet('colorStyles.products.manage.color')};     
  }
  
  .website {
    --primaryColor :  ${themeGet('colorStyles.products.website.color')};     
  }
  
  .channels {
    --primaryColor :  ${themeGet('colorStyles.products.channels.color')};
    svg path[fill="#3f3d56"] { 
      fill: var(--primaryColor);
    }
  }
  
  .cooperative,
  .coop {
    --primaryColor :  ${themeGet('colorStyles.products.coop.color')};
    svg path[fill="#3f3d56"] { 
      fill: var(--primaryColor);
    }
  }
  
  section {
    position: relative;
  }
  @media (max-width: 767px) {
  .nav-sub [class*='col-lg'], .nav-sub [class*='col-md']{
      margin-bottom: 0px;
    }
  }
  .nav-sub.contained {
    border-bottom: none;
  }
  main > div.contained.bg-tertiary {
    background: #403d93;
  }
  .contained {
    position: relative;
  
  }
  .reusecore__drawer {
    li {
    
    }
  }
  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 100vw !important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      div[class^='LearnDropdown_'],
      div[class^='CompanyDropdown__CompanyDropdownEl']{
        display: block !important;
        width: auto !important;
       
      }
       div[class^='LearnDropdown_'] {
         h3 {
          margin-top: 40px;
        }
        li a {
          color: #01c88b;
        }
       }
      
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        ul {
          margin: 0px;
          svg {
            position: relative;
            left: -30px;
          }
        }
        li{
          width: auto !important;
          min-width: inherit !important;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: #343d48;
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: ${themeGet('colors.secondary', '#eb4d4b')};
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: ${themeGet('colors.secondary', '#eb4d4b')};
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: ${themeGet('colors.secondary', '#eb4d4b')};
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button {
        width: 100%;
        a {
          font-size: 1.2em;
        }
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: ${themeGet('colors.secondary', '#eb4d4b')};
        transform: rotate(45deg);
        display: block;
      }
    }
  }

  /* Modal default style */
  button.modalCloseBtn {
    color: ${themeGet('colors.white', '#ffffff')} !important;

    &.alt {
      background-color: ${themeGet('colors.primary', '#01c88b')} !important;
      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;
    }   
  }
`;

export const ContentWrapper = styled.main`
  position: relative;
  overflow: hidden;
  a:-webkit-any-link {
    text-decoration: none;
  }
  
  &:not(.contained) .sticky-outer-wrapper {
    li ${NavbarItem} button {
        color: #222;
    }
    :not(.sticky-nav-active) .nav-sub {
      background: transparent !important;
    }
    nav.nav-sub {
      background: #f2f2f2;
      transition: 0.5s;
      top: 0px;
      transition: top 0.2s;
      position: relative;   
      left: 0px;
      right: 0px;
    }
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
  }
  
  &.absolute-menu .sticky-outer-wrapper {
    position: absolute;
    left: 0px;
    right: 0px;
  }
  
  .manage {
    &.menu {    
      background:${themeGet('colorStyles.products.manage.color')};
    }
    &:not(article){
        background: ${themeGet('colorStyles.products.manage.background')};
    }
  }  
  .coop {
  .btn-primary {
          ${themeGet('colorStyles.products.coop.primary')};
      }
    .btn-secondary {
       ${themeGet('colorStyles.products.coop.secondary')};
    }
    &:not(article){
        background: ${themeGet('colorStyles.products.coop.background')};;
    }
    &.main_navbar {    
      background: ${themeGet('colorStyles.products.coop.color')};
    }
  } 
  
  .channels {
  
    &:not(article){
        background: ${themeGet('colorStyles.products.channels.background')};;
    }
    &.main_navbar {    
      background: ${themeGet('colorStyles.products.channels.color')};
    }
  }  
  
  .website {    
    &:not(article){
      background:   ${themeGet('colorStyles.products.website.background')};
    }
    .bg-tertiary {
      display: inherit;    
    }
    &.main_navbar {    
      background: ${themeGet('colorStyles.products.website.color')};
    }
  }
  
  .supply {    
      &:not(article){
         // background: ${themeGet('colorStyles.products.supply.background')};
      }
      .bg-tertiary {
        display: inherit;    
      }
      &.main_navbar {    
        // background: ${themeGet('colorStyles.products.supply.color')};
      }
      .btn-primary {
          ${themeGet('colorStyles.products.supply.primaryWithBg')};
      }
      &.forcePrimaryBg {
        background: ${themeGet('colorStyles.products.supply.background')};
        h1, h2,h3,h4,h5,h6 {
          color: white;
        }
      }
  }
  
  
  .sticky-outer-wrapper:not(.sticky-nav-active)  nav.light {
        &.bg-dark-alpha.main_navbar{
          background: rgba(0,0,0,0.1);
        }
        &.nav-sub {
          background: transparent;
          transition: background 0s;
          border-bottom: 1px solid rgba(0,0,0,0.3);        
          transition: top 0.7s;
          position: relative;
          top: -150px;   
          transition: 0s;
        }
       
        ul.breadcrumb li {
          color: white !important;
        }
        input::placeholder {
          color: white;        
        }
        .input-text-wrap.is-search::after {
          color: white;  
        }
        ul.breadcrumb li a  {
          color: white !important;
        }
        ul.breadcrumb li + li::before {
            padding: 0 6px;
            color: #f2f2f2;
            content: "/\\A0";
        }
        li ${NavbarItem} button {
          color: white !important;
        }
        ${IconLock} {
          filter: invert(1);
        }
      
        a.btn-primary {
          background: transparent;
          border: 2px solid rgba(255,255,255,0.2);
          color: #fff;
          &:hover {
            border: 2px solid rgba(255,255,255,0.3);
            background: rgba(255,255,255,0.2);
          }
        }
        ${LoginLink}, ${CtaSection} {
          color: white !important;
        }
        .logo {
          filter: brightness(0) invert(1);
        }
        
      }
    }
  
  
  
  .sticky-nav-active {
    .main_navbar {
      background: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      padding: 15px 0;
    }
  }

  .main_navbar {
    z-index: 2;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 15px 0;
    .animated_navbar {
      
      @media (min-width: 1220px) {
        margin-left: 120px;
      }
       @media (max-width: 990px) {
        display: none;
      }
    }
    .main_menu {
      margin-right: 40px;
      li {
        display: inline-block;
        padding-left: 13px;
        padding-right: 13px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: ${themeGet('colors.secondary', '#eb4d4b')};
          }
        }
        a {
          padding: 5px;
          font-size: 16px;
          font-weight: 400;
          color: #343d48;
          transition: 0.15s ease-in-out;
          &:hover {
            color: ${themeGet('colors.secondary', '#eb4d4b')};
          }
        }
      }
       @media (max-width: 990px) {
        display: none;
      }
     
    }
    .navbar_button {
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
  }

  .trial-section {
    background: linear-gradient(to bottom, #fafbff 0%, #f7f8fd 100%);

    .button_group {
      text-align: center;
    }
  }

  @media (max-width: 990px) {
    .glide__slide--active .pricing_table {
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
      border: 0;
    }
  }
`;

export const ButtonGroup = styled.div``;
