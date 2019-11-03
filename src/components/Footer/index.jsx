import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-lg footer-container">
          <div className="footer-logo" />
          <ul>
            <li>
              <a href="https://www.rentivo.com/team" title="About">Team</a>
            </li>
            <li>
                Company no. 07646198
            </li>
            <li>
              Copyright {(new Date().getFullYear())} Rentivo Group Ltd
            </li>
            <li>
              All Rights Reserved
            </li>
            <li>
              <a href="https://www.rentivo.com/" title="rentivo.com">Rentivo.com</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
