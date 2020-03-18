  import React from "react"
import styled from "styled-components"
import { Icon, DropdownSection, Heading } from "./Components"
import { ThemeProvider } from 'styled-components';
import ContentfulAsset from '../../../../containers/Rentivo/ContentfulAsset';
import { StaticQuery, graphql, Link } from "gatsby"
import { getMenuProducts } from './hooks/home';




const ProductsDropdownEl = styled.div`
  
  max-width: 100vw !important; 
  display: flex;
  margin: -20px;
  position: relative;
  flex-direction: column; 
  ul, li {
    margin: 0;
    padding: 0px;
    h3 {
      margin-bottom: -6px;
    }
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

    </ProductsDropdownEl>
  )
}
