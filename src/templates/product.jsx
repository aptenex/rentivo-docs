import React from 'react';
import { graphql } from 'gatsby';
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
import HeroSection from '../containers/Rentivo/HeroSection';
import MarketingLayout from "../components/MarketingLayout";
import FaqSection from '../containers/Rentivo/FaqSection';
import mediumZoom from 'medium-zoom'


import styled from 'styled-components';


import BlobA from '-!babel-loader!svg-react-loader?classIdPrefix=manage!img/svg/blob/blob_artur.svg';
import BlobB from '-!babel-loader!svg-react-loader?classIdPrefix=manage!img/svg/blob/blob_barbra.svg';
import BlobC from '-!babel-loader!svg-react-loader?classIdPrefix=manage!img/svg/blob/blob_carol.svg';
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

  getRepoLink() {
    const { data } = this.props;
    const {
      permalink,
    } = data.product.fields;

    const absPath = data.product.fileAbsolutePath;
    const filename = absPath.substring(absPath.lastIndexOf('/') + 1);
    const fileSlug = filename.replace('.md', '');
    const path = permalink.replace(`${fileSlug}/`, '');
    const gitHubURL = config.gitHubMarkdownPath + path + filename;

    return gitHubURL;
  }

  render() {
    const { data, location } = this.props;

    const productNode = data.product;
    const { faq : faqGroups}  = data;
    const asideLinks = this.getLinks();
    return (
      <MarketingLayout location={location} subNav={true}>
          <SEO postNode={productNode} postType="product" />
          { asideLinks.length > 0
              ? (<AsideMenu asideLinks={this.getLinks()} />)
              : null
          }

            <HeroSection
                hero
                className={'hero'}
                leadingLabelHeader={'Free Onboarding'}
                leadingLabelText={'and demo trial'}
                {...productNode.heroFeaturette}
            />
            <BlobWrapperB>
              <BlobC/>
            </BlobWrapperB>
            { productNode.featurettes.map( (feature, index) => (
                ( typeof feature['__typename'] === 'undefined' || feature['__typename'] === 'ContentfulFeaturette' ) &&  <HeroSection key={index} {...feature} />
            ))}


        {/*{ faqGroups.group.length > 0 && <FaqSection  data={faqGroups} groups={"Product"} active={"Product"}  /> }*/}

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
      name
      slug      
      heroFeaturette {
        ...Featurette
      }
      featurettes {
        ...Featurette
      }     
    }

    
    
  }
  
`;

// fixed(width: 960, background: "rgb:000000") {
// ...GatsbyContentfulFixed_tracedSVG
// }