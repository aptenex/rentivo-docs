import React from 'react';
import { Link } from 'gatsby';
import './CalloutWrapper.scss';
import RehypeReact from 'rehype-react';
import Text from 'reusecore/src/elements/Text';
import styled from 'styled-components';
import Check from '-!babel-loader!svg-react-loader?classIdPrefix=coding!./svg/icon-check-green.svg';

const Item = styled('p')`
  margin-left: 10px;
  flex-grow: 1;
`;

const Callout = (props) => {
  // check for empty callout
  if (!props.children) {
    return null;
  }

  const classes = `callout callout--${props.type}`;

  return (
      <div className={classes}>
        <div>
          <Check />
        </div>
        <Item>
          {props.children.map(el => el)}
        </Item>
      </div>
  );
}

Callout.defaultProps = {
  type: 'success',
};


const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    'callout' :  Callout
  },
}).Compiler;

const CalloutWrapper = ({data}) =>

  (
      <div className="callout-wrapper">
        {renderAst(data.htmlAst)}
      </div>
  );




export default CalloutWrapper;
