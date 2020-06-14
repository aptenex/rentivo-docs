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
import ContentSection from '../containers/Rentivo/ContentSection';
import ProductDefinitions from '../containers/Rentivo/ProductIcons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft } from '@fortawesome/pro-duotone-svg-icons'
import Text from "../reusecore/src/elements/Text";
import Heading from "../reusecore/src/elements/Heading";
import Box from "../reusecore/src/elements/Box";
import { renderPage } from '../utils/renderer';
import FeatuetteSection from "../containers/Rentivo/FeaturetteSection";
import ProductSection from "../containers/Rentivo/FeatureGallery";
import HeroSection from "../containers/Rentivo/HeroSection";
import FaqList from "../containers/Rentivo/FaqSection/List";
import FaqSection from '../containers/Rentivo/FaqSection';

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

const StyledContentSection = styled(ContentSection)`
   
`;

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

    const Body = renderPage( featureNode, options );
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
                {featureNode?.pageTitle && <Heading as="h1" content={featureNode.pageTitle} /> }
                <StyledContentSection>{ Body }</StyledContentSection>

                { featureNode?.featurettes && featureNode?.featurettes.map( (feature, index) => (
                    (
                        feature.internal.type === 'ContentfulFaq' && feature.items && <FaqList key={index}  showHeaders={false} sectionTitle={{
                          content: feature.question,
                          textAlign: 'center',
                          fontSize: ['20px', '24px'],
                          fontWeight: '400',
                          color: '#0f2137',
                          letterSpacing: '-0.025em',

                          mb: '0',
                        }} data={feature.items} />
                    )
                ))
                }

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