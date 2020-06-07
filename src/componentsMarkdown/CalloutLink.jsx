import React, {Fragment} from 'react';
import config from '../../data/SiteConfig';
import {renderMarkdown, renderPlaintext} from "../utils/renderer";
import {Link} from "gatsby";

class CalloutLink extends React.Component {
  componentDidMount() {
    this.dataLayer = window.dataLayer || [];
  }

  handleClick = () => {
    this.dataLayer.push({
      event: 'customEvent',
      eventCategory: 'Callout',
      eventAction: 'Click',
      eventValue: `${this.props.link}`,
    });
  }

  render() {
    // check for empty CalloutLink
    if (!this.props.children) {
      return null;
    }
    console.log('link markdown', this.props.children);
    const linkText = this.props.linktext || 'Read More';

    return (
      <div className="callout-link">
        <div className="callout-link__copy">
          <div>
            {this.props.children.map((el,index) => { return <Fragment key={index}> { renderMarkdown(el) }</Fragment> })}
          </div>
          { this.props.link.startsWith('/') ?
              <Link to={this.props.link}
                    onClick={this.handleClick}> { linkText } →</Link>
              :
                <a
                  href={this.props.link}
                  target={this.props.link.includes('rentivo') ? '_self' : '_blank' }
                  onClick={this.handleClick}
                >
                  { linkText } →
                </a>
          }
        </div>
        <div className="callout-link__img" style={{ backgroundImage: `url(${config.envPrefix + this.props.img})` }} />
      </div>
    );
  }
}

export default CalloutLink;
