import React from 'react';
import { Link } from 'gatsby';
import './CalloutWrapper.scss';
import RehypeReact from 'rehype-react';
import Text from 'reusecore/src/elements/Text';
import styled from 'styled-components';
import Check from '-!babel-loader!svg-react-loader?classIdPrefix=coding!./svg/icon-check-green.svg';
import Yes from '-!babel-loader!svg-react-loader?classIdPrefix=coding!./svg/yes.svg';

const Item = styled('span')`
  margin-left: 10px;
  flex-grow: 1;    
  line-height:1.5em;
`;
const CheckWrapper = styled('span')`
  margin-left: 10px;
  margin-top: -5px;
`;

const Callout = (props) => {
  // check for empty callout
  if (!props.children) {
    return null;
  }

  const classes = `callout callout--${props.type}`;

  return (
      <span className={classes}>
        <CheckWrapper>
          <Yes />
        </CheckWrapper>
        <Item>
          {props.children.map(el => el)}
        </Item>
      </span>
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
