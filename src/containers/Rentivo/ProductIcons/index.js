import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartNetwork, faParachuteBox, faBrowser, faCalendarEdit  } from '@fortawesome/pro-duotone-svg-icons'
import styled from "styled-components"
import Products from './icons';

export default (props) => {
    // Add all classs to an array
    const addAllClasses = ['iconBlock__wrapper'];

    // className prop checking
    if (props?.className) {
      addAllClasses.push(props.className);
    }

    const Wrapper = styled('div')`      
      margin-right: 15px;    
      svg {
        height: 100%;
        width: 100%;
      }
    `;
    const {type, content} = props
    const ProductIcon = Products[type];
    return (
        <Wrapper className={addAllClasses.join(' ')} >
          { ProductIcon }
        </Wrapper>
    )

}
