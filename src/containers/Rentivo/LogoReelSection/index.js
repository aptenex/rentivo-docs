import React from 'react';
import {Heading} from "containers/Rentivo/DesktopNav/DropdownContents/Components";
import styled from 'styled-components';
import ContentfulAsset from 'containers/Rentivo/ContentfulAsset';

const LogoGrid = styled('div')`
   display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
  > div {
    background: white;
    padding: 1rem;
    display: grid;
    place-items: center;
    &::before {
      // for apsect ratio
      content: "";
      display: block;
      padding-bottom: 100%;
      grid-area: 1 / 2 / 2 / 2;
    }
    img {
      width: 100%;
      // height: 100%;
      // object-fit: contain;
      grid-area: 1 / 1 / 2 / 2;
    }
  }
`;

const LogoReelSection = ({logos, title}) => {

  return (
      <>
        <Heading>{title}</Heading>
        <LogoGrid>
        {logos.map(logo => {
          if(logo?.fixed?.src) {
            return <div><img key={logo.id} src={logo.fixed.src}/></div>;
          }
          return <ContentfulAsset data={logo} />;
        })}
        </LogoGrid>
      </>
  )

};

export default LogoReelSection;