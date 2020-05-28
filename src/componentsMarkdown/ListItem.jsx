import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink, faCircleNotch, faCheckCircle, faCheck} from "@fortawesome/pro-regular-svg-icons";
import {AnchorLink} from "gatsby-plugin-anchor-links";


const Item = styled('li')`
background: #fafafa;
padding: 12px;
border-radius: 3px;
margin-bottom: 5px;
font-weight: 700;
color: #222;
display: flex;
 align-items: center;
`;

const WrappedIcon = styled('span')`
  background: white;
  border-radius: 8px;
  padding: 6px 8px;
  text-align: center;
  height: 32px;
  width: 32px;
  border: 1px solid rgb(230, 230, 230);
  margin-right: 20px;
  display: inline-block;
  
`

export default function ListItem(props) {
  // check for empty callout
  if (!props.children) {
    return null;
  }

  const classes = `item item--${props.type}`;

  return (
    <Item className={classes}>
      <WrappedIcon>
        <FontAwesomeIcon style={{ display: 'inline-block' }} icon={faCheckCircle} />
      </WrappedIcon>
      {props.children.map(el => el)}
    </Item>
  );
}

ListItem.defaultProps = {
  type: 'info',
};
