import React from 'react';
import { Link } from 'gatsby';
import './FooterCallout.scss';

const FooterCallout = () =>
  (
      <div className="footer-callout">
        <div className="footer-callout-pattern"/>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="is-size-h1 color-white">For Developers</h2>
              <p className="color-slate-10">Our development documentation is currently under active development.</p>
              <Link className="btn btn-white" to="/for-developers/">View Developer Docs</Link>
            </div>
            <div className="col-md-6">
              <div className="card card--glossary">
                <h3 className="card__title">Our Features</h3>
                <p className="glossary-link"><Link to="/manage">Property Management Software</Link></p>
                <p className="glossary-link"><Link to="/direct-booking-website">Direct Website</Link></p>
                <p className="glossary-link"><Link to="/supply">Supply</Link>
                </p>
                <p className="glossary-link"><Link to="/channel-management">Channel Management</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );




export default FooterCallout;
