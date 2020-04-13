import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import NavbarWrapper from 'reusecore/src/elements/Navbar';
import Drawer from 'reusecore/src/elements/Drawer';
import Logo from 'reusecore/src/elements/UI/Logo';
import Box from 'reusecore/src/elements/Box';
import Button from 'reusecore/src/elements/Button';
import HamburgMenu from 'common/src/components/HamburgMenu';
import Container from 'common/src/components/UI/Container';
import { DrawerContext } from 'common/src/contexts/DrawerContext';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import AnimatedNavbar from "../DesktopNav/AnimatedNavbar"
import LogoImage from 'common/src/assets/image/rentivo-logo.png';
import styled from "styled-components"
import { IconLockMan, IconLock as Lock } from '../Icons';
import { CtaSection, LoginLink, IconLock, Cta } from './Navbar.style';
import Link from 'gatsby-link';
import MobileNav from "../MobileNav";

const Navbar = ({ navbarStyle, className, logoStyle, row, menuWrapper }) => {
  const addAllClasses = ['main_navbar'];
  if (className) {
    addAllClasses.push(className);
  }

  const Data = useStaticQuery(graphql`
    query {
      rentivoJson {
        MENU_ITEMS {
          label
          path
          offset
        }
      }
    }
  `);

  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper className={addAllClasses.join(' ')} {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Logo
            className={'logo'}
            href="/"
            logoSrc={LogoImage}
            title="Rentivo"
            logoStyle={logoStyle}
          />

          <Box {...menuWrapper}>
            <div  className="animated_navbar">
              <AnimatedNavbar  duration={ 300 } />
            </div>
            {!location?.pathname.includes('demo-request') && <CtaSection>
              <Cta href="#1" className="navbar_drawer_button">
                <Link className={'btn btn-primary'} to="/demo-request"
                      title="Get connected with Rentivo and start a conversation">Demo Request</Link>
              </Cta>
              <LoginLink href="https://manage.rentivo.com/login">
                Sign In
              </LoginLink>
              <IconLock/>
            </CtaSection>
            }
            <Drawer
              width="500px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#eb4d4b" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <MobileNav
                className="mobile_menu"
                drawerClose={true}
                offset={-100}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: [
      'space-between',
      'space-between',
      'space-between',
      'flex-start',
    ],
    width: '100%',
  },
  logoStyle: {
    maxWidth: '130px',
    mr: [0, 0, 0, '50px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: `${1}`,
  },
  menuWrapper: {
    flexBox: true,
    width: '100%',
    alignItems: 'center',
  },
};

export default Navbar;
