import React, {Fragment} from 'react';
import { graphql } from 'gatsby';
import RehypeReact from 'rehype-react';
import _ from 'lodash';
import SEO from '../components/SEO';
import AsideMenu from '../components/AsideMenu';
import CalloutLink from '../componentsMarkdown/CalloutLink';
import Callout from '../componentsMarkdown/Callout';
import Gist from '../componentsMarkdown/Gist';
import CodeGroup from '../componentsMarkdown/CodeGroup';
import './syntax-highlighting.scss';
import './doc.scss';
import MarketingLayout from "../components/MarketingLayout";
import Heading from 'reusecore/src/elements/Heading';
import styled from 'styled-components';
import Container from 'common/src/components/UI/Container';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import AsideCategoryMenu from '../containers/Rentivo/AsideCategoryMenu';
import Row from 'components/Flex/Row'
import Col from 'components/Flex/Col'
import ProductIcons from '../containers/Rentivo/ProductIcons';
import ProductDefinitions from '../containers/Rentivo/ProductIcons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft } from '@fortawesome/pro-duotone-svg-icons'
import Text from "../reusecore/src/elements/Text";

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    gist: Gist,
    'call-out-link': CalloutLink,
    'call-out': Callout,
    'code-group': CodeGroup,
  },
}).Compiler;



const Section = styled('section')`
  position: relative;
  padding-top: 180px;
`;
const SummarySection = styled('section')`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  img,svg {
    max-width: 420px;
    width: 420px;
    margin-bottom: 50px;
  }
   
`;

const SummaryContent = styled('div')`
  p {
      font-size: 30px;
      line-height: 2.5rem;
    }
`;

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

const BackToPartners = styled(Link)`
  margin-bottom: 20px;
`

class FeatureTemplate extends React.Component {
  getCategoryLinks() {
    const { data : { sideLinks : { edges : links } } } = this.props;
    const categories = _.groupBy( links, ({node}) => {
      return node?.category?.title;
    });
    return categories;
  }

  render() {
    const props = this.props;
    const { data, location, pageContext } = this.props;
    console.log(data, location, ",@@@@@@@@@@@@@@@@@@sdalasjdkajdkajsd", pageContext);
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
    sideLinks : allContentfulPage( filter: {  parentPage: { id: {  eq : $parentId} }}){
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
      id
      slug
      name
      node_locale
      parentPage {
        ... on ContentfulProduct {
          id
          name
          slug
        }
      }
      body {
        json
      }
      seoTitle
    }
    
  }
  
`;

// fixed(width: 960, background: "rgb:000000") {
// ...GatsbyContentfulFixed_tracedSVG
// }