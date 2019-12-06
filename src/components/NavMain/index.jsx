import React, { Component } from 'react';
import { Link } from 'gatsby';
import LINKS from '../../constants/pageLinks';
import { AuthCtx } from '../withUser';
import './NavMain.scss';
import LogoImage from 'common/src/assets/image/rentivo-logo.png';
import Logo from 'reusecore/src/elements/UI/Logo';
import styled from "styled-components"
import {  IconLock as Lock } from 'containers/Rentivo/Icons';
const Img = styled('img')`

`;

const IconLock = styled(Lock)`
    height: 12px;
    line-height: 22px;
    float:left;
    position: relative;
    
    opacity: 0.7;
    margin-right: 8px;
  `

class NavMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  }

  closeMenu() {
    this.setState({ showMenu: false });
  }

  render() {
    const {
      showMenu,
    } = this.state;

    const menuState = showMenu ? 'in' : '';

    return (
      <nav className="nav-main">

        <Link className="nav-main__logo" onClick={this.closeMenu} to="/">
          <Img
              href="/"
              src={LogoImage}
              title="Rentivo"
          />
          <span className="nav-main__help-center">Knowledge Center</span>
        </Link>

        <button
          type="button"
          className={`nav-main__toggle js-menu-toggle ${menuState}`}
          onClick={this.toggleMenu}
        >
          <span className="nav-main__menu">Menu</span>
          <span className="nav-main__menu__closer" />
        </button>

        <div className={`nav-main__mobile ${menuState}`}>

          <div className="nav-left">
              <div className="nav-item">
                  <a className="nav-main__plain" onClick={this.closeMenu} href={'/'}>
                      Products
                  </a>
              </div>

            <div className="nav-item">
              <Link className="nav-main__plain" onClick={this.closeMenu} to={LINKS.FOR_DEVELOPERS}>
                Developers
              </Link>
            </div>

            {/*<div className="nav-item">*/}
              {/*<a className="nav-main__plain" onClick={this.closeMenu} href={LINKS.STATUS}>*/}
                {/*Status*/}
              {/*</a>*/}
            {/*</div>*/}

            <div className="nav-item">
              <Link className="nav-main__plain" onClick={this.closeMenu} to={LINKS.RELEASE_NOTES}>
                Release Notes
              </Link>
            </div>

          </div>

          <div className="nav-right">

            <div className="nav-item">
              <AuthCtx.Consumer>
                {({ user }) => (
                  user ? (
                    <a className="nav-secondary__dashboard" href={LINKS.APP}>Dashboard</a>
                  ) : (
                    <a className="nav-secondary__link" href={LINKS.APP}>
                      <IconLock />
                      Sign In
                    </a>
                  )
                )}
              </AuthCtx.Consumer>
            </div>

            <div className="nav-item nav-item--btn">
                <a className="nav-main__login" onClick={this.closeMenu} href={LINKS.SUPPORT}>
                    Create Support Ticket
                </a>
              {/*<a className="nav-main__login" href={LINKS.PRICING}>*/}
                {/*Start Free*/}
              {/*</a>*/}
            </div>

          </div>

        </div>
      </nav>
    );
  }
}

export default NavMain;
