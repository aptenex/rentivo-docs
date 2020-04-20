import React, {Fragment} from 'react';
import { graphql } from 'gatsby';
import RehypeReact from 'rehype-react';
import _ from 'lodash';
import SEO from '../components/SEO';
import './syntax-highlighting.scss';
import './doc.scss';
import MarketingLayout from "../components/MarketingLayout";
import styled from 'styled-components';
import Container from 'common/src/components/UI/Container';
import { Link } from 'gatsby';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import AsideCategoryMenu from '../containers/Rentivo/AsideCategoryMenu';
import Row from 'components/Flex/Row'
import Col from 'components/Flex/Col'
import ProductIcons from '../containers/Rentivo/ProductIcons';
import ProductDefinitions from '../containers/Rentivo/ProductIcons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft } from '@fortawesome/pro-duotone-svg-icons'
import Text from "../reusecore/src/elements/Text";



const ReferenceProduct = styled(Link)`
  display: flex;
  background: white;
  border: 1px solid #BBB;
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
  padding: 10px;
  margin-bottom: 15px;
  p svg {
  margin-right: 10px;
  }
  .iconBlock__wrapper {
    font-size: 3rem;
    opacity: 0.4;
  } 
   
`
const ProductDescriptionSection = styled('div')`
  text-align: left;
`

class FeatureTemplate extends React.Component {
  getCategoryLinks() {
    const { data : { sideLinks : { edges : links } } } = this.props;
    return _.groupBy( links, ({node}) => {
      return node?.category?.title;
    });
  }

  render() {
    const { data, location, pageContext } = this.props;
    const featureNode = data.feature;

    const { faq : faqGroups}  = data;
    const categoryLinks = this.getCategoryLinks();
    const options = { };
    const Body = documentToReactComponents(featureNode?.body?.json, options);

    return (

      <MarketingLayout location={location} subNav={true}>
          <SEO postNode={featureNode} postType="feature" />

          <Container>
            <Row top="xs">
              <Col xs={12} md={5} xl={3} >

                <ReferenceProduct to={`/${featureNode.parentPage.slug}`}>
                  { ProductDefinitions[featureNode.parentPage.slug] &&
                    <>
                      <ProductIcons type={featureNode.parentPage.slug} />
                      <ProductDescriptionSection>
                        <h4>{ featureNode.parentPage.name }</h4>
                        <Text mb={0} fontSize={'0.9em;'}>
                          <FontAwesomeIcon icon={faChevronLeft}/>
                          Back to Product
                        </Text>
                      </ProductDescriptionSection>
                    </>
                  }
                </ReferenceProduct>

                { Object.keys( categoryLinks).length > 0
                    ? (<AsideCategoryMenu activeNavSlug={location.pathname} asideCategories={categoryLinks} />)
                    : null
                }
              </Col>
              <Col xs={12} md={7} xl={9} >
                { Body }
              </Col>
            </Row>

          </Container>

      </MarketingLayout>
    );
  }
}

export default FeatureTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  
  query FeatureByID($id: String!, $parentId: String ) {
    sideLinks : allContentfulPage( filter: { type: { eq : "Feature Page"}, parentPage: { id: {  eq : $parentId} }}){
      edges {
        node {
          id
          slug
          name
          category {
            id
            title
          }
        }
      }
    }
    feature: contentfulPage(id: {eq: $id}) {
      ...Page
    }
    
  }
  
`;

// fixed(width: 960, background: "rgb:000000") {
// ...GatsbyContentfulFixed_tracedSVG
// }