import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';
import NavbarItem from "./DesktopNav/Navbar/NavbarItem";
import Navbar from "./Navbar";
import {LoginLink, Cta, CtaSection, IconLock} from "./Navbar/Navbar.style";
import Logo from 'reusecore/src/elements/UI/Logo';

export const GlobalStyle = createGlobalStyle`
  
  body{
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
  }

  section {
    position: relative;
  }
  
   

  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
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
  
  .sticky-outer-wrapper.menu {
    :not(.sticky-nav-active) .nav-sub {
      background: transparent !important;
    }
    .nav-sub {
      background: #f2f2f2;
      transition: 0.5s;
      top: 0px;
      transition: top 0.2s;
      position: relative;   
      left: 0px;
      right: 0px;
    }
    
    &.light:not(.sticky-nav-active) {
      
      background: rgba(0,0,0,0.1);
      .nav-sub {
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
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
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
