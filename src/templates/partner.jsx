import React, {Fragment} from 'react';
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
import FaqList from '../containers/Rentivo/FaqSection/List';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import styled from 'styled-components';
import Container from 'common/src/components/UI/Container';
import Image from 'gatsby-image';
import ContentfulAsset from 'containers/Rentivo/ContentfulAsset';
import DemoForm from 'containers/Rentivo/DemoForm';
import HubspotForm from "react-hubspot-form";
import { Link } from 'gatsby';
import SubNav from '../components/NavSub';


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

const BackToPartners = styled(Link)`
margin-bottom: 20px;
`

class PartnerTemplate extends React.Component {
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
    const props = this.props;
    const { data, location } = this.props;
    const partnerNode = data.partner;
    const { faq : faqGroups}  = data;
    const asideLinks = this.getLinks();
    return (

      <MarketingLayout location={location} subNav={true}>
          <SEO postNode={partnerNode} postType="partners" />
          { asideLinks.length > 0
              ? (<AsideMenu asideLinks={this.getLinks()} />)
              : null
          }

          { partnerNode.heroFeaturette &&
            <HeroSection
                hero
                className={'hero'}
                leadingLabelHeader={null}
                leadingLabelText={null}
                logo={partnerNode.logo}
                {...partnerNode.heroFeaturette}
            />
          }


        <SummarySection>

          <Container width={'720px'}>
            <BackToPartners to={'partners'}>Back to Partners</BackToPartners>

            {partnerNode.logo && partnerNode.logo.fluid && partnerNode.logo.fluid.src ? <Image
                fluid={partnerNode.logo}
                alt="Product"
            /> : partnerNode.logo && partnerNode.logo.file ? <ContentfulAsset className={'featureLogo'} data={partnerNode.logo}/> : null}
            {partnerNode.webAddress && <Text content={partnerNode.webAddress}/> }
            {partnerNode.summary &&partnerNode.summary.childMarkdownRemark && <SummaryContent
                dangerouslySetInnerHTML={{ __html:partnerNode.summary.childMarkdownRemark.html }}
            /> }
          </Container>
        </SummarySection>



        {partnerNode.featurettes &&partnerNode.featurettes.map( (feature, index) => (
            ( typeof feature['__typename'] === 'undefined' || feature['__typename'] === 'ContentfulFeaturette' ) &&  <HeroSection key={index} {...feature} />
        ))}


        { partnerNode.faq && partnerNode.faq.length > 0 && <FaqList  data={partnerNode.faq}   /> }

        <SummarySection>
          <Container  width={'820px'}>
            <DemoForm/>
          </Container>
        </SummarySection>



      </MarketingLayout>
    );
  }
}

export default PartnerTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  
  
  query PartnerByID($id: String!) {
    
    partner: contentfulPartner(id: {eq: $id}) {
      id
      name
      slug
      tags
      webAddress
      faq {
        id
        answer {
          id
          childMarkdownRemark {
            html
            htmlAst
          }
        }
        group
        question
      }
      logo  {
        id
        fluid(maxWidth: 1240, background: "rgb:000000") {
          ...GatsbyContentfulFluid
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
      summary {
        childMarkdownRemark {
          id
          html
          rawMarkdownBody
          htmlAst
        }
      }
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