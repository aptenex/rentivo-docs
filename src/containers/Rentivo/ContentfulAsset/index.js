import React, {Component} from 'react'
// import * as Icons from './index'

import styled from "styled-components"
import Image from 'reusecore/src/elements/Image';
import Img from 'gatsby-image';

// The purpose here is to be able to load an SVG, fluid, etc... dependant on what the contentfulAsset returns.
class Main extends Component {

  render() {

    // Add all classs to an array
    const addAllClasses = ['iconBlock__wrapper'];

    // className prop checking
    if (this.props.className) {
      addAllClasses.push(this.props.className);
    }

    const Wrapper = styled('div')`
      min-width: 96px;
      margin-right: 15px;    
      svg {
        height: 100%;
        width: 100%;
      }
    `;


    const contentfulAsset = this.props.data;

    console.log(contentfulAsset, "$################");
    let asset;
    if(contentfulAsset.svg){
      asset = <Wrapper className={'svgWrapper'} dangerouslySetInnerHTML={{ __html: contentfulAsset.svg.content}} />
    } else {
      asset = <Wrapper className={'imgWrapper'} ><Img {...contentfulAsset} alt={`product image`} /></Wrapper>
    }


    const {content} = this.props
    return (
          <Wrapper className={addAllClasses.join(' ')}>
            {asset}
          </Wrapper>
    )
  }
}

export default Main