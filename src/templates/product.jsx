import React, {Fragment} from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import RehypeReact from 'rehype-react';
import _ from 'lodash';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO';
import AsideMenu from '../components/AsideMenu';
import CalloutLink from '../componentsMarkdown/CalloutLink';
import Callout from '../componentsMarkdown/Callout';
import Rating from '../components/Rating';
import Gist from '../componentsMarkdown/Gist';
import CodeGroup from '../componentsMarkdown/CodeGroup';
import withSubNav from '../components/NavSub';
import Layout from '../components/DocsLayout';
import './syntax-highlighting.scss';
import './doc.scss';
import FeatuetteSection from '../containers/Rentivo/FeaturetteSection';
import HeroSection from '../containers/Rentivo/HeroSection';
import MarketingLayout from "../components/MarketingLayout";
import FaqSection from '../containers/Rentivo/FaqSection';
import ProductSection from '../containers/Rentivo/ProductSection';
import mediumZoom from 'medium-zoom'
import styled from 'styled-components';
import BlobA from '-!babel-loader!svg-react-loader?classIdPrefix=manage!img/svg/blob/blob_artur.svg';
import BlobB from '-!babel-loader!svg-react-loader?classIdPrefix=manage!img/svg/blob/blob_barbra.svg';
import BlobC from '-!babel-loader!svg-react-loader?classIdPrefix=manage!img/svg/blob/blob_carol.svg';
import FaqList from '../containers/Rentivo/FaqSection/List';


const BlobWrapperA = styled.div`
  position: absolute;
  left: -40%;
`;
const BlobWrapperB = styled.div`
  position: absolute;
  right: 40%;
`;
const BlobWrapperC = styled.div`
  position: absolute;
  left: -40%;
`;


const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    gist: Gist,
    'call-out-link': CalloutLink,
    'call-out': Callout,
    'code-group': CodeGroup,
  },
}).Compiler;

class ProductTemplate extends React.Component {
  getLinks() {
    const { data } = this.props;
    return [];
    const headers = data.product.htmlAst.children.filter(el => el.type === 'element' && _.includes(['h2', 'h3'], el.tagName));
    return headers.map((header) => {
      const link = {};
      link.tagName = header.tagName;
      link.textNode = header.children[1] ? header.children[1].value : '';
      link.id = header.properties.id;
      return link;
    });
  }

  render() {
    const { data, location } = this.props;
    const productNode = data.product;
    const { faqGroups : groups }  = productNode;
    const asideLinks = this.getLinks();

    return (
      <MarketingLayout location={location} subNav={true}>
          <SEO postNode={productNode} postType="product" />
          { asideLinks.length > 0
              ? (<AsideMenu asideLinks={this.getLinks()} />)
              : null
          }

          <BlobWrapperB>
            <BlobC/>
          </BlobWrapperB>

          { productNode.heroFeaturette.internal.type === 'ContentfulHero' &&
            <HeroSection {...productNode.heroFeaturette }></HeroSection>
          }
          { productNode.heroFeaturette.internal.type === 'ContentfulFeaturette' &&
            <FeatuetteSection   {...productNode.heroFeaturette } />
          }

          { productNode.featurettes.map( (feature, index) => (
              (
                feature.internal.type === 'ContentfulFeaturette'  &&  <FeatuetteSection  key={index} {...feature} />
                || feature.internal.type === 'ContentfulFeatureGallery' &&  <ProductSection columnWidth={feature.columnWidth} key={index} data={feature} />
                || feature.internal.type === 'ContentfulHero' &&   <HeroSection {...feature }></HeroSection>
                || feature.internal.type === 'ContentfulFaq' &&   <FaqList sectionTitle={{
                  content: feature.question,
                  textAlign: 'center',
                  fontSize: ['20px', '24px'],
                  fontWeight: '400',
                  color: '#0f2137',
                  letterSpacing: '-0.025em',
                  mb: '0',
                }} data={feature.items} />
              )
            ))}

          {/*{ <FaqSection  data={ useFAQGroupsOnCategories(groups) }  groups={"Product"} active={"Product"}  /> }*/}



      </MarketingLayout>
    );
  }
}

export default ProductTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  
  
  query ProductByID($id: String!) {
    
    product: contentfulProduct(id: {eq: $id}) {
      id
      summary
      seoTitle
      seoDescription
      name
      slug
      heroFeaturette {        
        ...Hero
      }
      featurettes {
        ...Featurette
        ...FeatureGallery
        ...Hero
        ...FAQ
      }     
    }

    
    
  }
  
`;

// fixed(width: 960, background: "rgb:000000") {
// ...GatsbyContentfulFixed_tracedSVG
// }