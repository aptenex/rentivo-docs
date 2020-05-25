import React from "react"
import styled from "styled-components"
import {Icon, DropdownSection, Heading} from "./Components"
import {ThemeProvider} from 'styled-components';
import ContentfulAsset from '../../../../containers/Rentivo/ContentfulAsset';
import ProductIcons from '../../../../containers/Rentivo/ProductIcons';
import ProductDefinitions from '../../../../containers/Rentivo/ProductIcons/icons';
import {StaticQuery, graphql, Link} from "gatsby"
import {getMenuProducts} from './hooks/home';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChartNetwork, faParachuteBox, faBrowser, faCalendarEdit} from '@fortawesome/pro-duotone-svg-icons'
import {themeGet} from "styled-system";

const ProductsDropdownEl = styled.div`
  
  max-width: 85vw !important;
  width: 40rem; 
  display: flex;
  //margin: -20px;
  position: relative;
  flex-direction: column; 
  ul, li {    
    h3 {
      margin-bottom: -6px;
    }
  }
  
`


const Col = styled.div`

  @media (max-width: 768px) {    
    width: auto;
  }

`

const Integrations = styled(Col)`
  background: #f2f2f2;
  margin: -40px -40px -40px 20px;
  padding: 40px;
  position: relative;
  min-width: 20rem;
`

const SectionHeader = styled.h4`  
  height: 38px;
  margin-bottom: 20px;
`

const ProductIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 30px;
  border-radius: 100%;
  
  > div {
    width: 32px;
    svg {
      width: 48px;  
    }
  }
`

const ProductLink = styled(Link)`
  display: flex;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  &:hover {
    background: #dbf1ff42;
    background: rgba(0,0,0,0.02);
    ;
  }
`;

const SubProductsList = styled.ul`
  li {
    display: flex;
    margin-bottom: 1rem;
  }
  h3 {
    margin-right: 1rem;
    width: 3.2rem;
    display: block;
  }
  a {
    color: var(--dark-grey);
  }
  
`

const ProductsSection = styled.ul`
  margin: 20px;
  li {
    display: flex;
    
    width: 100%;
    position: relative;
    &[data-slug] {
      &:hover {
          &:before {
              content: '';
              display: block;
              width: 42px;
              height: 10px;
              border-radius: 5px;
              background-color: var(--primary);
              left: 0%;
              top: 94%;
              position: absolute;
              margin-top: -23px;
              z-index: -2;
              opacity: 0.05;
          }
          &:after {
              content: '';
            display: block;
            width: 37px;
            height: 9px;
            opacity: 0.1;
            border-radius: 7px;
            background-color: var(--primary);
            left: -1%;
            position: absolute;
            margin-top: 7px;
            z-index: -2;
            top: 63%;
          }
        }
      }
    &[data-slug=manage] {    
      --primary : ${themeGet('colorStyles.products.manage.color')};
      ${ProductIconWrapper} {
        color: ${themeGet('colorStyles.products.manage.color')};
      }      
    }
    &[data-slug=channel-management] {
     svg {
       position: relative;
       left: -6px;
       }
    --primary : ${themeGet('colorStyles.products.channels.color')};
      ${ProductIconWrapper} {    
        color: ${themeGet('colorStyles.products.channels.color')};
        color: #258bb4;
      }
    }
    &[data-slug=direct-booking-website] {
    --primary : ${themeGet('colorStyles.products.website.color')}; 
      ${ProductIconWrapper} {
        color: ${themeGet('colorStyles.products.website.color')};
      }
    }
    &[data-slug=supply] {
    --primary : ${themeGet('colorStyles.products.supply.color')};
      ${ProductIconWrapper} {    
        color: ${themeGet('colorStyles.products.supply.color')};
      }
    }
     &[data-slug=cooperative] {
     svg {
       position: relative;
       left: -5px;
       }
    --primary : ${themeGet('colorStyles.products.coop.color')};
      ${ProductIconWrapper} {    
        color: ${themeGet('colorStyles.products.coop.color')};
      }
    }
    svg[data-prefix=fad]{
      font-size: 2.4em;    
      margin-top: 10px;
    }
      
    div p {
      margin-top: 0;
      margin-bottom: 0rem;
    }
  }  
`

const Text = styled.p`
  color: #546b81;
  font-weight: bold;
`;

const DemoRequest = styled.div`
    display:flex;
    
    justify-content: center;
    align-items: center;
    margin-top: var(--spacer);
    padding-top: var(--spacer);
    margin-top: 25px;
    margin-bottom: 20px;
  h3 {
    margin-bottom: 0;
  }
`

const AllIntegrations = styled(Link)`
margin-top: 10px;
font-weight: bold;
 display: flex;
 font-size: 1.2em;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  &:hover {
    background: #dbf1ff42
    background: rgba(0,0,0,0.02);
    ;
  }

`

const Notice = styled('span')`
float: right;
font-size: 0.9em;
font-weight: 300;
color: #ccc;
border-radius: 10px;
color: #01c88b;
position: relative;
top: 10px;
`

export default () => {
  const {allContentfulProduct, allContentfulIntegration} = getMenuProducts();
  return (
      <ProductsDropdownEl>
        <Col>
          <DropdownSection data-first-dropdown-section>
            {/*<SectionHeader>Products</SectionHeader>*/}
            <ProductsSection>
              {allContentfulProduct.edges.map(({node}, index) => (
                  <li data-slug={node.slug} key={index}>
                    <ProductLink to={node.slug}>
                      <ProductIconWrapper>
                        {ProductDefinitions[node.slug] ?
                            <ProductIcons type={node.slug}/> : ''}
                      </ProductIconWrapper>
                      <div>
                        { node.name === "Manage" && <Notice>Flagship Product</Notice> }
                        <Heading color="primary">{node.name}</Heading>
                        <Text> {node.summary}</Text>
                      </div>
                    </ProductLink>

                  </li>
              ))}
            </ProductsSection>
            <DemoRequest>
              <Heading>
                <Link to="/demo-request">
                  Demo Request
                </Link>
              </Heading>
            </DemoRequest>
          </DropdownSection>


        </Col>

      </ProductsDropdownEl>
  )
}
