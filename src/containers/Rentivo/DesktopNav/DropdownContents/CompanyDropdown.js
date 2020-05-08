import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import { getMenuProducts } from './hooks/home';
import ContentfulAsset from '../../../../containers/Rentivo/ContentfulAsset';

import {
  Heading,
  HeadingLink,
  LinkList,
  DropdownSection,
  Icon
} from "./Components"
// import IconTogether from  '-!babel-loader!svg-react-loader?classIdPrefix=dmo!svg/doodles/rockets_people_person_avatar.svg';

const CompanyDropdownEl = styled.div`
  width: 40rem;
  display: flex; 
`


const Col = styled.div`
 flex-grow: 1;
 min-width: 15rem;
 padding: 20px;
`

// const IconRocket = styled(IconTogether)`
//   height: 180px;
//   float:right;
//   margin-top: -30px;
// `;

const WhyCallout = styled(Col)`
  background: #f2f2f2;
  //margin: -40px -40px -40px 20px;
  //padding: 40px 0px 20px 40px;
  position: relative;
  flex-grow: 1;
  min-width: 20rem;  
  

`
const CalloutText = styled('p')`
  
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;
  letter-spacing: 1px;
`
const CalloutHeader = styled(CalloutText)`
  font-size: 24px;  
`
const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 40px;
  }
 
`



const Integrations = styled(Col)`
  background: #f2f2f2;
  margin: 0px -40px -40px 20px;
  position: relative;
  min-width: 12rem;
   ul, li {
    margin: 0;
    padding: 0px;
  }
  svg {
    position: relative;
    top: 6px;
    left: 12px;
  }
`

const SectionHeader = styled.h4`  
  height: 38px;
  margin-bottom: 20px;
`

const ProductIcon = styled.div`
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

const IntegrationIcon = styled(ProductIcon)`
   width: 24px;
  height: 24px;
  margin-right: 30px;
  border-radius: 100%;
  
  > div {
    width: 32px;
    svg {
      width: 24px;
      height: 24px;  
    }
  }
`;

const ProductLink = styled(Link)`
  display: flex;
  padding: 3px 0px 2px 0px;
  width: 100%;
  border-radius: 4px;
  &:hover {
    background: #dbf1ff42
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
  li {
    display: flex;
    min-width: 680px;
    width: 100%;
    div p {
      margin-top: 0;
      margin-bottom: 0rem;
    }
  }
  
`

const Text = styled.p`
  color: #546b81
  font-weight: bold;
`;

const DemoRequest = styled.div`
    display:flex;
    
    justify-content: center;
    align-items: center;
    margin-top: var(--spacer);
    padding-top: var(--spacer);
    margin-top: 25px;
  h3 {
    margin-bottom: 0;
  }
`

const AllIntegrations = styled(Link)`
font-weight: 400;
 
 font-size: 1em;
 padding: 10px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 20px;
  &:hover {
    background: #dbf1ff42;
    background: rgba(0,0,0,0.02);
    ;
  }

`


const CompanyDropdown = () => {
  const { allContentfulProduct, allContentfulIntegration } = getMenuProducts();
  return (
    <CompanyDropdownEl>
      <Col>
        <DropdownSection data-first-dropdown-section>
          <h3>Why Rentivo</h3>
          <ul>
            <HeadingLink>
              <Link to="/about">
                <Icon /> About Rentivo
              </Link>
            </HeadingLink>
            {/* REMOVED DUE TO OVERLAP WITH INTEGRATIONS */}
            {/*<HeadingLink>*/}
              {/*<Link to="/partners">*/}
                {/*<Icon /> Our Partners*/}
              {/*</Link>*/}
            {/*</HeadingLink>*/}
            <HeadingLink>
              <Link to="/integrations">
                <Icon /> Our Integrations
              </Link>
            </HeadingLink>
            <HeadingLink>
              <a href="/customers">
                <Icon /> Customers
              </a>
            </HeadingLink>

          </ul>
        </DropdownSection>
      </Col>
      <WhyCallout>
          {/*<IconRocket />*/}
          <CalloutHeader>Our Integrations</CalloutHeader>
          <CalloutText>Find out why Rentivo is the preferred choice</CalloutText>
          <Integrations>
            <DropdownSection data-first-dropdown-section>
              <ProductsSection>
                { allContentfulIntegration.edges.map( ( {node}, index) => (
                    <li key={index}>
                      <ProductLink to={'integrations/' + node.slug}>
                        <div>
                          <IntegrationIcon>
                            <ContentfulAsset data={node.tileIcon}/>
                          </IntegrationIcon>
                        </div>
                        <div>
                          <Heading >{ node.name }</Heading>
                        </div>
                      </ProductLink>

                    </li>
                ))}
                <li>
                  <AllIntegrations to={'/integrations'}>View All Integrations</AllIntegrations>
                </li>

              </ProductsSection>

            </DropdownSection>

          </Integrations>
      </WhyCallout>

    </CompanyDropdownEl>
  )
}

export default CompanyDropdown
