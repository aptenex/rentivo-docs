import React from "react"
import styled from "styled-components"
import { Icon, DropdownSection, Heading } from "./Components"
import { ThemeProvider } from 'styled-components';
// import IconManage from '-!babel-loader!svg-react-loader?classIdPrefix=manage!./svg/wireless_touch_home_smart_home.svg';
// import IconDistribute from '-!babel-loader!svg-react-loader?classIdPrefix=distribution!./svg/cloud_distribution.svg';
// import IconEngine from '-!babel-loader!svg-react-loader?classIdPrefix=store!./svg/store.svg';
// import IconGrow from '-!babel-loader!svg-react-loader?classIdPrefix=care!./svg/global_care.svg';
// import IconAPI from '-!babel-loader!svg-react-loader?classIdPrefix=coding!./svg/browser_coding.svg';
// import IconDMO from '-!babel-loader!svg-react-loader?classIdPrefix=dmo!./svg/global_care.svg';
import ContentfulAsset from '../../../../containers/Rentivo/ContentfulAsset';
import { IconManage, IconGrow, IconEngine, IconAPI, IconDMO, IconDistribute } from '../../Icons';
import { StaticQuery, graphql, Link } from "gatsby"
// const IconManage = styled.div``;
// import  IconManage from '../../../../../static/img/svg/fire_flame_safety_heat.svg'
// const IconDistribute = styled.div``;
// const IconEngine = styled.div``;
// const IconGrow = styled.div``;
// const IconAPI = styled.div``;
// const IconDMO = styled.div``;
import { getMenuProducts } from './hooks/home';




const ProductsDropdownEl = styled.div`
  
  max-width: 100vw !important; 
  display: flex;
  margin: -20px; 
  ul, li {
    margin: 0;
    padding: 0px;
  }
  @media (min-width:1349px) {
    max-width: 70rem !important;
  }
  
  
  @media (max-width:1349px) {
    position: relative;
    flex-direction: column;
    width: 100vw;
    transform: translateX(0%)
  }
`


const Col = styled.div`
  padding: 0px;
  margin: 0px;
  @media (max-width: 768px) {    
    width: 100vw;
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
  padding: 10px;
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
margin-top: 10px;
font-weight: bold;
 display: flex;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  &:hover {
    background: #dbf1ff42
    background: rgba(0,0,0,0.02);
    ;
  }

`


export default () => {
  const { allContentfulProduct, allContentfulIntegration } = getMenuProducts();
  // console.log(allContentfulProduct,"##$#434", allContentfulIntegration);
  return (
    <ProductsDropdownEl>
      <Col>
        <DropdownSection data-first-dropdown-section>
          {/*<SectionHeader>Products</SectionHeader>*/}
          <ProductsSection>
            { allContentfulProduct.edges.map( ( {node}, index) => (
              <li key={index}>
                <ProductLink to={ node.slug}>
                  <div>
                    <ProductIcon>
                      <ContentfulAsset data={node.icon}/>
                    </ProductIcon>
                  </div>
                  <div>
                    <Heading color="blue">{ node.name }</Heading>
                    <Text> { node.summary }</Text>
                  </div>
                </ProductLink>

              </li>
            ))}
            {/*<li>*/}
              {/*<div>*/}
                {/*<Logo >*/}
                  {/*<IconManage/>*/}
                {/*</Logo>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<Heading color="blue">Manage</Heading>*/}
                {/*<p>A complete end-to-end solution for short-term property management</p>*/}
              {/*</div>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<div>*/}
                {/*<Logo >*/}
                  {/*<IconDistribute/>*/}
                {/*</Logo>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<Heading color="blue">Channel Distribution</Heading>*/}
                {/*<p>Reach and automate Airbnb, HomeAway, Booking.com (and more)</p>*/}
              {/*</div>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<div>*/}
                {/*<Logo >*/}
                  {/*<IconEngine/>*/}
                {/*</Logo>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<Heading color="blue">Booking Engine</Heading>*/}
                {/*<p>Create your own booking marketplace for direct opportunities</p>*/}
              {/*</div>*/}
            {/*</li>*/}

            {/*<li>*/}
              {/*<div>*/}
                {/*<Logo >*/}
                  {/*<IconGrow/>*/}
                {/*</Logo>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<Heading color="blue">Grow and Acquire</Heading>*/}
                {/*<p>A complete end-to-end solution for short-term property management</p>*/}
              {/*</div>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<div>*/}
                {/*<Logo >*/}
                  {/*<IconAPI/>*/}
                {/*</Logo>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<Heading color="blue">APIs as a Service</Heading>*/}
                {/*<p>Reach and automate Airbnb, HomeAway, Booking.com (and more)</p>*/}
              {/*</div>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<div>*/}
                {/*<Logo >*/}
                  {/*<IconDMO/>*/}
                {/*</Logo>*/}
              {/*</div>*/}
              {/*<div>*/}
                {/*<Heading color="blue">DMO</Heading>*/}
                {/*<p>Create a destination marketing website for your organisation.</p>*/}
              {/*</div>*/}
            {/*</li>*/}

          </ProductsSection>
          <DemoRequest>
            <Heading >
              <a href="/demo-request">
                 Demo Request
              </a>
            </Heading>
          </DemoRequest>
        </DropdownSection>


      </Col>
      <Integrations>
        <DropdownSection data-first-dropdown-section>
          <SectionHeader>Integrations</SectionHeader>
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
            <li><AllIntegrations to={'/integrations'}>View All Integrations</AllIntegrations></li>

          </ProductsSection>
        </DropdownSection>

      </Integrations>
    </ProductsDropdownEl>
  )
}
