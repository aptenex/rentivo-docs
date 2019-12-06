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

const Navbar = ({ navbarStyle, logoStyle, row, menuWrapper }) => {
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

  const CtaSection = styled('div')`    
    flex-grow:1;    
    a {
       
    }
  `;

  const IconLock = styled(Lock)`
    height: 12px;
    line-height: 22px;
    margin-top: 18px;
    float:right;
    opacity: 0.7;
    margin-right: 8px;
  `

  const LoginLink = styled('a')`
    float:right;    
    padding: 1rem 1.5rem 0rem 0rem;
    button {
      float: right;
    }    
  `;


  const Cta = styled('a')`
    float:right;    
    button {
      float: right;
    }
    
  `;

  const AnimatedNavbarExtended = styled(AnimatedNavbar)`
      display: none !important;
      background: red;
  `;

  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Logo
            href="#"
            logoSrc={LogoImage}
            title="Rentivo"
            logoStyle={logoStyle}
          />

          <Box {...menuWrapper}>
            <div  className="animated_navbar">
              <AnimatedNavbarExtended  duration={ 300 } />
            </div>
            <CtaSection>

              <Cta href="#1" className="navbar_drawer_button">
                <Button title="DEMO REQUEST" />
              </Cta>


              <LoginLink href="#1">
                Sign In
              </LoginLink>
              <IconLock/>


            </CtaSection>

            {/*<ScrollSpyMenu*/}
              {/*className="main_menu"*/}
              {/*menuItems={Data.rentivoJson.MENU_ITEMS}*/}
              {/*offset={-70}*/}
            {/*/>*/}
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#eb4d4b" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={Data.rentivoJson.MENU_ITEMS}
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
    className: 'hosting_navbar',
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
