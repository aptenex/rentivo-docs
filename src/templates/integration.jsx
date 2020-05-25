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
import {HotIntegration, RetiringIntegration, SoftLaunchIntegration, TagList, TagFilter } from '../containers/Rentivo/rentivo.style';
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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faRocketLaunch} from '@fortawesome/pro-duotone-svg-icons'
import {render} from "../utils/renderer";

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

const BackNav = styled(Link)`
  background: #f2f2f2;
  line-height: 38px;
  padding: 20px;
  display: block;
  color: #1d6683;
  font-size: 1.4em;
  font-weight:500;
  text-align: center;
`;
const WhiteWrapper = styled('div')`
background: white;
`
const WhiteContainer = styled(Container)`
  background: white;
  padding-top: 50px;
  .hero {
  padding-top: 30px;
  padding-bottom: 0px;
  min-height: inherit;
  }
  [class^='heroSectionstyle']{
    padding-top: 20px;
    padding-bottom: 0px;
  }
`

const SummaryContent = styled('div')`
  p {
      font-size: 24px;
      line-height: 2.5rem;
    }
`;

const HowItWorksContent = styled('div')`
  p {
      
  }
`;


const IconGroup = styled('div')`
  display: flex;
  flex-direction: row;
  height: 120px;
  width: auto;
  img { max-width: 180px;}
  
`;
const CardWrapper = styled(Card)`
    padding:  15px 30px;
    border-radius: 10px;
    border: 3px dotted #ccc;
    margin-bottom: 20px;
    margin: 0 auto;
    max-width: 320px;
    box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.12);
    text-align: left;
    background: #f2f2f2;
    
    display: inline-block;
    width: auto;
    align-items: center;
    justify-content: center;
    position: relative;
    ${IconGroup} > div:first-child {
      border-right: 1px solid #ccc;
    }
    svg, .imgWrapper {
    min-height: 60px;
    max-width: 300px;
    }
    h4 {
      font-size: 18px;
    }
    //.iconBlock__wrapper,
    //.imgWrapper {
    //  width: 100%; 
    //}
  `;

const ConnectorJoinImage = styled('img')`
top: -15px;
margin: 0 auto;
position: relative;
z-index: 1;
transform: rotate(90deg) translateX(35px) translateY(-20px);
`;
const ConnectorImage = styled('img')`
    position: relative;
    top: 8px;
    left: 23%;
    margin-bottom: -120px;
    z-index: 1;
`;

const StyledTable = styled('table')`
  background: white;
  box-shadow: 12px 12px 0px 8px #01b47d2e;
  border-color: #e2e2e2;
  border-radius: 0 8px 8px 2px;
 tr {
  line-height: 30px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-color: #e2e2e2;
  
 }
 td {
  border-color: #e2e2e2;
  padding-left: 20px;
 }
 th {
  text-align: left;
  font-weight: 600;
  border-right-color:#e2e2e2; 
  box-shadow: 3px 0px 6px 0px rgba(0,0,0,0.06);
 }
`;

const StyledTagList = styled('ul')`
  margin-top: 30px;
  padding-left: 0px;
  z-index: 4;data:image/png;base64,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
  position: relative;
  margin-left: 0px;
   li {
   display: inline;
   margin-right: 10px;
   border-radius: 15px;
   font-weight: 700;
    background-color: #F2F2F2;
    border-color: transparent;
    color: #222;
    padding: 10px 20px;
    svg {
      position: relative;
      top: 3px;
      margin-left: 5px;
    }
  }
`;


const TableOfKeyStats = ({integration, className}) => {

  return <StyledTable className={className}>
    {integration.phoneNumber && <tr>
      <th>Phone Number</th>
      <td>{integration.phoneNumber}</td>
    </tr>}
    {integration.parentOrganization && <tr>
      <th>Parent Organization</th>
      <td>{integration.parentOrganization}</td>
    </tr>}
    {integration.headquarters && <tr>
      <th>Headquarters</th>
      <td>{integration.headquarters}</td>
    </tr>}
    {integration.founded && <tr>
      <th>Founded Units</th>
      <td>{integration.founded}</td>
    </tr>}
    {integration.destinations && <tr>
      <th>Destinations</th>
      <td>{integration.destinations}</td>
    </tr>}
    {integration.minimumUnits && <tr>
      <th>Minimum Units</th>
      <td>{integration.minimumUnits}</td>
    </tr>}
    {integration.onboardingSchedule && <tr>
      <th>Onboarding Schedule</th>
      <td>{integration.onboardingSchedule}</td>
    </tr>}
    {integration.pricingModel && <tr>
      <th>Pricing Model</th>
      <td>{integration.pricingModel.join(', ')}</td>
    </tr>}
    {integration.partnerCost && <tr>
      <th>Partner Cost</th>
      <td>{integration.partnerCost}</td>
    </tr>}
    {integration.commissionModel && <tr>
      <th>Commission Model</th>
      <td>{integration.commissionModel}</td>
    </tr>}
    {integration.whatsSupported && <tr>
      <th>What's Supported</th>
      <td>{integration.whatsSupported}</td>
    </tr>}
    {integration.integrationRequirements && <tr>
      <th>Integration Requirements</th>
      <td>{integration.integrationRequirements}</td>
    </tr>}

  </StyledTable>
};

const StyledTableOfKeyStats = styled(TableOfKeyStats)`
 tr {
  background: red;
  line-height: 50px;  
 } 
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
            <Text textAlign={'center'} fontSize={['22px', '25px', '22px', '26px']} as={'h5'}
                  className={'tagline'}>{integrationNode.tagline}</Text>
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
                      style={{height: '60px'}}
                      src={LogoImage}
                      title="Rentivo"
                  />
                </CardWrapper>
              </Col>

              <ConnectorImage src={ConnectorTopLeftBottomRight}/>

            </Row>
          </Container>
          <WhiteWrapper>
            <Container>
              <Row top="xs">
                <Col xs={12} sm={4} lg={3}>
                  <BackNav to={'/integrations'}>
                    <FontAwesomeIcon icon={faChevronLeft}/> All Integrations
                  </BackNav>
                </Col>
                <Col xs={12} sm={8} lg={9}>
                    <StyledTagList>
                      {integrationNode.tags && integrationNode.tags.map((tag, index) => (
                          <li key={index}>{tag}</li>
                      ))}
                      { integrationNode.status && integrationNode.status ==='Soft Launched' && <li><SoftLaunchIntegration data-multiline="true" data-tip="We have completed our technical integration for this integration and we are currently soft launching this integration with existing Rentivo customers. Please contact your Rentivo Success manager for more information.">Soft Launch <FontAwesomeIcon icon={faRocketLaunch}/></SoftLaunchIntegration></li> }
                    </StyledTagList>

                </Col>
              </Row>
            </Container>
            <WhiteContainer>

              <Row top="xs">
                <Col xs={12} sm={4} lg={3}>
                  {integrationNode?.logo?.fluid?.src ? <Image
                      fluid={integrationNode.logo}
                      style={{width: '80%'}}
                      alt="Product"
                  /> : integrationNode?.logo?.file ?
                      <ContentfulAsset className={'featureLogo'} data={integrationNode.logo}/> : null}
                  <Text content={integrationNode.webAddress}/>
                  <SummaryContent>{ render(integrationNode?.summary?.childMarkdownRemark?.htmlAst) }</SummaryContent>

                </Col>
                <Col xs={12} sm={8} lg={9}>
                  {integrationNode?.howItWorks?.childMarkdownRemark?.htmlAst &&
                  <HowItWorksContent>
                    <Heading as={'h3'}>How It Works</Heading>
                      { render(integrationNode?.howItWorks?.childMarkdownRemark?.htmlAst) }
                    </HowItWorksContent>
                  }
                  {integrationNode?.heroFeaturette?.internal.type === 'ContentfulFeaturette' &&
                  <FeaturetteSection
                      hero
                      className={'hero'}
                      leadingLabelHeader={integrationNode.onboardingSchedule ? 'Onboarding Schedule' : null}
                      leadingLabelText={integrationNode.onboardingSchedule}
                      logo={null}
                      {...integrationNode.heroFeaturette}
                  />
                  }

                  {integrationNode?.featurettes && integrationNode?.featurettes.map((feature, index) => (
                      (
                          feature?.internal?.type === 'ContentfulFeaturette' &&
                          <FeatuetteSection key={index} {...feature} />
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
                    <Container>
                      {integrationNode?.logo?.fluid?.src ? <Image
                          fluid={integrationNode.logo}
                          style={{width: '100%'}}
                          alt="Product"
                      /> : integrationNode?.logo?.file ?
                          <ContentfulAsset className={'featureLogo'} data={integrationNode.logo}/> : null}

                      <TableOfKeyStats integration={integrationNode}/>
                    </Container>
                  </SummarySection>


                  {integrationNode.faq && integrationNode.faq.length > 0 && <FaqList data={integrationNode.faq}/>}

                  <SummarySection>
                    <Container width={'820px'}>
                      <DemoForm/>
                    </Container>
                  </SummarySection>
                </Col>
              </Row>
            </WhiteContainer>
          </WhiteWrapper>


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
      tags
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
        fixed(height: 60, background: "rgb:000000") {
          ...GatsbyContentfulFixed
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
      howItWorks {
        childMarkdownRemark {
          id
          html
          rawMarkdownBody
          htmlAst
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