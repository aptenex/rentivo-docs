import React, {Fragment} from 'react';
import {graphql, Link} from 'gatsby';
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
import FeaturetteSection from '../containers/Rentivo/FeaturetteSection';
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
import Row from 'components/Flex/Row'
import Col from 'components/Flex/Col'
import Card from 'reusecore/src/elements/Card';
import LogoImage from 'common/src/assets/image/rentivo-logo.png';
import {ConnectorTopLeftBottomRight, ConnectorTopJoinBottom} from '../containers/Rentivo/Icons';
import FeatuetteSection from '../containers/Rentivo/FeaturetteSection';
import FaqSection from '../containers/Rentivo/FaqSection';
import ProductSection from '../containers/Rentivo/FeatureGallery';


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

const CardWrapper = styled(Card)`
    padding: 30px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    text-align: left;
    background: #f2f2f2;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    svg {      
      width: 42px;
      margin-right: 15px;
    }
    h4 {
      font-size: 18px;
    }
    .iconBlock__wrapper,
    .imgWrapper {
      width: 100%; 
    }
  `

const ConnectorJoinImage = styled('img')`
top: -15px;
margin: 0 auto;
position: relative;
z-index: 1;
transform: rotate(90deg) translateX(35px) translateY(-20px);
`;
const ConnectorImage = styled('img')`
position: relative;
top: -25px;
left: 23%;
margin-bottom: -120px;
z-index:-1;
`;


class IntegrationTemplate extends React.Component {
  getLinks() {
    const {data} = this.props;
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

  getImage(logo) {

    if (logo && logo.fluid && logo.fluid.src) {
      return logo.fluid;
    }
    return logo.svg;
  }

  getRepoLink() {
    const {data} = this.props;
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
    const {data, location} = this.props;
    const integrationNode = data.integration;
    const {faq: faqGroups} = data;
    const asideLinks = this.getLinks();

    const TableOfKeyStats = ({integration}) => {
      return <table>
        { integration.phoneNumber && <tr><td>Phone Number</td><td>{integration.phoneNumber}</td></tr> }
        { integration.parentOrganization && <tr><td>Parent Organization</td><td>{integration.parentOrganization}</td></tr> }
        { integration.headquarters && <tr><td>Headquarters</td><td>{integration.headquarters}</td></tr> }
        { integration.founded && <tr><td>Founded Units</td><td>{integration.founded}</td></tr> }
        { integration.destinations && <tr><td>Destinations</td><td>{integration.destinations}</td></tr> }
        { integration.minimumUnits && <tr><td>Minimum Units</td><td>{integration.minimumUnits}</td></tr> }
        { integration.onboardingSchedule && <tr><td>Onboarding Schedule</td><td>{integration.onboardingSchedule}</td></tr> }
        { integration.pricingModel && <tr><td>Pricing Model</td><td>{integration.pricingModel.join(', ')}</td></tr> }
        { integration.partnerCost && <tr><td>Partner Cost</td><td>{integration.partnerCost}</td></tr> }
        { integration.commissionModel && <tr><td>Commission Model</td><td>{integration.commissionModel}</td></tr> }
        { integration.whatsSupported && <tr><td>What's Supported</td><td>{integration.whatsSupported}</td></tr> }
        { integration.integrationRequirements && <tr><td>Integration Requirements</td><td>{integration.integrationRequirements}</td></tr> }

      </table>
    };

    return (
        <MarketingLayout location={location} subNav={true}>
          <SEO postNode={integrationNode} postType="integration"/>
          {asideLinks.length > 0
              ? (<AsideMenu asideLinks={this.getLinks()}/>)
              : null
          }


          {
            integrationNode?.heroFeaturette?.internal.type === 'ContentfulHero' &&
            <HeroSection {...integrationNode.heroFeaturette} />
          }

          <Container width={'1024px'}>
            <Heading fontWeight={400} textAlign={'center'} as={'h1'}>{integrationNode.title}</Heading>
            <Text textAlign={'center'} className={'tagline'}>{integrationNode.tagline}</Text>
          </Container>
          <Container width={'720px'}>
            <Row top="xs">
              <Col xs={6}>
                <CardWrapper>
                  {integrationNode.logo && <ContentfulAsset data={integrationNode.logo}/>}
                </CardWrapper>
              </Col>
              <Col xs={6}>
                <CardWrapper>
                  <img
                      src={LogoImage}
                      title="Rentivo"
                  />
                </CardWrapper>
              </Col>

              <ConnectorImage src={ConnectorTopLeftBottomRight}/>

            </Row>
          </Container>


          {integrationNode?.heroFeaturette?.internal.type === 'ContentfulFeaturette' &&
          <FeaturetteSection
              hero
              className={'hero'}
              leadingLabelHeader={integrationNode.onboardingSchedule ? 'Onboarding Schedule' : null}
              leadingLabelText={integrationNode.onboardingSchedule}
              logo={integrationNode.logo}
              {...integrationNode.heroFeaturette}
          />
          }

          {integrationNode?.featurettes && integrationNode?.featurettes.map((feature, index) => (
              (
                  feature?.internal?.type === 'ContentfulFeaturette' && <FeatuetteSection key={index} {...feature} />
                  || feature?.internal?.type === 'ContentfulFeatureGallery' &&
                  <ProductSection columnWidth={eval(feature.columnWidth)} key={index} data={feature}/>
                  || feature?.internal?.type === 'ContentfulHero' && <HeroSection {...feature} />
                  || feature?.internal?.type === 'ContentfulFaq' && <FaqList sectionTitle={{
                    content: feature.question,
                    textAlign: 'center',
                    fontSize: ['20px', '24px'],
                    fontWeight: '400',
                    color: '#0f2137',
                    letterSpacing: '-0.025em',
                    mb: '0',
                  }} data={feature.items}/>
              )
          ))}

          <SummarySection>
            <Container width={'720px'}>
              {integrationNode?.logo?.fluid?.src ? <Image
                  fluid={integrationNode.logo}
                  style={{width: '100%'}}
                  alt="Product"
              /> : integrationNode?.logo?.file ?
                  <ContentfulAsset className={'featureLogo'} data={integrationNode.logo}/> : null}
              <Text content={integrationNode.webAddress}/>
              <SummaryContent
                  dangerouslySetInnerHTML={{__html: integrationNode?.summary?.childMarkdownRemark?.html}}
              />
              <TableOfKeyStats integration={integrationNode} />
            </Container>
          </SummarySection>


          {integrationNode.faq && integrationNode.faq.length > 0 && <FaqList data={integrationNode.faq}/>}

          <SummarySection>
            <Container width={'820px'}>
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
      internal {
        type
      }
      id
      title
      tagline
      name
      slug
      seoTitle
      seoDescription
      phoneNumber
      parentOrganization
      headquarters
      destinations
      integrationRequirements
      whatsSupported
      founded
      pricingModel
      partnerCost
      commissionModel
      onboardingSchedule
      minimumUnits      
      webAddress
      status
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
        ...Hero
      }
    }



  }

`;

// fixed(width: 960, background: "rgb:000000") {
// ...GatsbyContentfulFixed_tracedSVG
// }