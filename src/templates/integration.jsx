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

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    gist: Gist,
    'call-out-link': CalloutLink,
    'call-out': Callout,
    'code-group': CodeGroup,
  },
}).Compiler;


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

class IntegrationTemplate extends React.Component {
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
    const integrationNode = data.integration;
    const { faq : faqGroups}  = data;
    const asideLinks = this.getLinks();
    return (
      <MarketingLayout location={location} subNav={true}>
          <SEO postNode={integrationNode} postType="integration" />
          { asideLinks.length > 0
              ? (<AsideMenu asideLinks={this.getLinks()} />)
              : null
          }

            <HeroSection
                hero
                className={'hero'}
                leadingLabelHeader={ integrationNode.onboardingSchedule ? 'Onboarding Schedule' : null }
                leadingLabelText={ integrationNode.onboardingSchedule }
                logo={integrationNode.logo}
                {...integrationNode.heroFeaturette}
            />


            <SummarySection>
              <Container width={'720px'}>
                { integrationNode.logo &&  integrationNode.logo.fluid &&  integrationNode.logo.fluid.src ? <Image
                    fluid={ integrationNode.logo}
                    alt="Product"
                /> :  integrationNode.logo &&  integrationNode.logo.file ? <ContentfulAsset className={'featureLogo'} data={ integrationNode.logo}/> : null}
                <Text content={integrationNode.webAddress}/>
                <SummaryContent
                    dangerouslySetInnerHTML={{ __html: integrationNode.summary.childMarkdownRemark.html }}
                />
              </Container>
            </SummarySection>



            { integrationNode.featurettes.map( (feature, index) => (
                ( typeof feature['__typename'] === 'undefined' || feature['__typename'] === 'ContentfulFeaturette' ) &&  <HeroSection key={index} {...feature} />
            ))}


        { integrationNode.faq.length > 0 && <FaqList  data={integrationNode.faq}   /> }

        <SummarySection>
          <Container  width={'820px'}>
            <DemoForm/>
          </Container>
        </SummarySection>


      </MarketingLayout>
    );
  }
}

export default IntegrationTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  
  
  query IntegrationByID($id: String!) {
    integration: contentfulIntegration(id: {eq: $id}) {
      id
      name
      slug
      onboardingSchedule
      minimumUnits
      partnerCost  
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