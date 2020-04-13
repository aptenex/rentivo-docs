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
import './product.scss';
import FeatuetteSection from '../containers/Rentivo/FeaturetteSection';
import HeroSection from '../containers/Rentivo/HeroSection';
import HeroChannelConnections from '../containers/Rentivo/HeroChannelConnections';
import Container from 'common/src/components/UI/Container';
import MarketingLayout from "../components/MarketingLayout";
import FaqSection from '../containers/Rentivo/FaqSection';
import ProductSection from '../containers/Rentivo/FeatureGallery';
import CaseStudySection from '../containers/Rentivo/CaseStudySection';
import mediumZoom from 'medium-zoom'
import styled, { withTheme } from 'styled-components';
import BlobA from '-!babel-loader!svg-react-loader?classIdPrefix=manage!img/svg/blob/blob_artur.svg';
import BlobB from '-!babel-loader!svg-react-loader?classIdPrefix=manage!img/svg/blob/blob_barbra.svg';
import BlobC from '-!babel-loader!svg-react-loader?classIdPrefix=manage!img/svg/blob/blob_carol.svg';
import FaqList from '../containers/Rentivo/FaqSection/List';
import ConditionalWrapper from "../containers/Rentivo/Contained";
import { BlobWrapperA, BlobWrapperB,BlobWrapperC } from '../containers/Rentivo/rentivo.style';

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
    let menuVariantClasses = productNode.heroFeaturette.menuVariant ?? [];
    menuVariantClasses = [ ...menuVariantClasses, ...(productNode.heroFeaturette.className ?? [])];

    const isMenuSticky = productNode.heroFeaturette.isMenuSticky !== null ? productNode.heroFeaturette.isMenuSticky : productNode.isMenuSticky || true;
    const hasSubNav = productNode.heroFeaturette.hasSubMenu !== null ? productNode.heroFeaturette.hasSubMenu : true;


    return  (
      <MarketingLayout isMenuSticky={isMenuSticky} location={location} menu={menuVariantClasses} articleClass={productNode.heroFeaturette?.className + ' ' + productNode.heroFeaturette?.bodyClasses} subNav={hasSubNav}>
        <SEO postNode={productNode} postType="product" />
        { asideLinks.length > 0
            ? (<AsideMenu asideLinks={this.getLinks()} />)
            : null
        }

        {!productNode?.heroFeaturette?.bodyClasses?.includes('contained') &&
          <BlobWrapperB>
            <BlobC/>
          </BlobWrapperB>
        }

        { productNode.heroFeaturette.internal.type === 'ContentfulHero' &&
        <ConditionalWrapper
            condition={productNode?.heroFeaturette?.bodyClasses?.includes('contained')}
            wrapper={children => <Container>{children}</Container>}>
          <HeroSection {...productNode.heroFeaturette }/>
        </ConditionalWrapper>
        }
        { productNode.heroFeaturette.internal.type === 'ContentfulFeaturette' &&
          <FeatuetteSection   {...productNode.heroFeaturette } />
        }

        { productNode.featurettes.map( (feature, index) => (
            (
              feature.internal.type === 'ContentfulFeaturette'  &&  <FeatuetteSection  key={index} {...feature} />
              || feature.internal.type === 'ContentfulFeatureGallery' &&  <ProductSection columnWidth={eval(feature.columnWidth)} key={index} data={feature} />
              || feature.internal.type === 'ContentfulHero' &&   <HeroSection key={index} {...feature }/>
              || feature.internal.type === 'ContentfulFaq' &&   <FaqList key={index} sectionTitle={{
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

        {
          <CaseStudySection caseStudies={productNode.caseStudies} />
        }

        {/*{ <FaqSection  data={ useFAQGroupsOnCategories(groups) }  groups={"Product"} active={"Product"}  /> }*/}

      </MarketingLayout>
    );
  }
}

export default withTheme( ProductTemplate );

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
      isMenuSticky
      heroFeaturette {        
        ...Hero
      }      
      featurettes {
        ...Featurette
        ...FeatureGallery
        ...Hero
        ...FAQ
      }
      caseStudies {
        slug
        logo {
          id          
          fixed(height: 40) {
            ...GatsbyContentfulFixed_tracedSVG
          }
          ... on ContentfulAsset {
            svg {
              content
              dataURI
              absolutePath
              relativePath
            }
            file {
              contentType
              url
              fileName
              contentType
              details {
                image {
                  width
                  height
                }
              }
            }
          }
        }
        title
        website
        summary
        studyBackground {
          fluid(maxWidth: 420, background: "rgb:000000") {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }

    
    
  }
  
`;

// fixed(width: 960, background: "rgb:000000") {
// ...GatsbyContentfulFixed_tracedSVG
// }