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
import {faChevronLeft, faExclamationCircle, faRocketLaunch, faSadTear } from '@fortawesome/pro-duotone-svg-icons'
import {render} from "../utils/renderer";
import ReactTooltip from "react-tooltip";
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
  svg,.featureLogo {
    max-width: 420px;
    width: 420px;
    margin-bottom: 30px;
  }
  table svg {
    margin-bottom: 0px;
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
  [class^='HeroSection__CtaLink'] {
    margin-bottom: 10px;
    position: relative;
    top: -30px;
  }
  
  .container-wrapper {
    padding: 0px;
  }
  
`

const SummaryContent = styled('div')`
border-radius: .5rem;
  p {
      font-size: 20px;
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
   @media (max-width: 990px) {
    display: none;
   }
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
  z-index: 4;  
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

  return (integration.minumumUnits || integration.pricingModel || integration.partnerCost || integration.whatsSupported)  &&  <StyledTable className={className}><tbody>
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
      <th>Partner Cost <FontAwesomeIcon data-multiline="true" data-tip={`This is the cost charged by ${integration.name} and not a Rentivo cost. All costs are approximations based on last checked fees and are provided for convenience purposes and are not gaurantees.`} icon={ faExclamationCircle }/></th>
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
  </tbody>
  </StyledTable>
};

const StyledTableOfKeyStats = styled(TableOfKeyStats)`
 tr {
  background: red;
  line-height: 50px;
  svg {
    margin-bottom: 0px;
  }  
 } 
`;

const StyledLogosContainer = styled(Container)`
  margin-top: 40px;
  margin-bottom: 8px;
`;

const SummaryCol = styled(Col)`
   @media (max-width: 1220px) {
    img,svg {
      display: none;
    }
    }
`;

class IntegrationTemplate extends React.Component {

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
    console.log('what is integration node', integrationNode);
    return (
        <MarketingLayout location={location} subNav={true}>
          <SEO postNode={integrationNode} postType="integration"/>

          {
            integrationNode?.heroFeaturette?.internal.type === 'ContentfulHero' &&
            <HeroSection {...integrationNode.heroFeaturette} />
          }

          <Container width={'1024px'}>
            <Heading fontWeight={400} textAlign={'center'} as={'h1'}>{integrationNode.title}</Heading>
            <Text textAlign={'center'} lineHeight={['32px', '35px', '32px', '36px']} fontSize={['22px', '25px', '22px', '26px']} as={'h5'}>{integrationNode.tagline}</Text>
          </Container>

          <StyledLogosContainer width={'720px'} >
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
          </StyledLogosContainer>
          <WhiteWrapper>
            <Container>
              <Row top="xs">
                <Col xs={12} sm={4} lg={6} xl={3}>
                  <BackNav to={'/integrations'}>
                    <FontAwesomeIcon icon={faChevronLeft}/> All Integrations
                  </BackNav>
                </Col>
                <Col xs={12} sm={8} lg={6} xl={9}>
                    <StyledTagList>
                      {integrationNode.tags && integrationNode.tags.map((tag, index) => (
                          <li key={index}>{tag}</li>
                      ))}
                      { integrationNode.status && integrationNode.status ==='Soft Launched' && <li><SoftLaunchIntegration data-multiline="true" data-tip="We have completed our technical development for this integration and we are currently soft launching this integration with existing Rentivo customers. Please contact your Rentivo Success manager for more information.">Soft Launch <FontAwesomeIcon icon={faRocketLaunch}/></SoftLaunchIntegration></li> }
                    </StyledTagList>

                </Col>
              </Row>
            </Container>
            <WhiteContainer>

              <Row top="xs">
                <SummaryCol xs={12} sm={12} lg={4} xl={3}>
                  {integrationNode?.logo?.fluid?.src ? <Image
                      fluid={integrationNode.logo}
                      style={{width: '80%', maxWidth: '300px'}}
                      alt="Product"
                  /> : integrationNode?.logo?.file ?
                      <ContentfulAsset className={'featureLogo'}  style={{width: '80%', maxWidth: '300px'}} data={integrationNode.logo}/> : null}
                  <Text content={integrationNode.webAddress}/>
                  <SummaryContent>{ render(integrationNode?.summary?.childMarkdownRemark?.htmlAst) }</SummaryContent>

                </SummaryCol>
                <Col xs={12} sm={12} lg={8} xl={9}>
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
                      {integrationNode?.logo?.fluid?.src ? <Image
                          fluid={integrationNode.logo}
                          style={{width: '100%'}}
                          alt="Product"
                      /> : integrationNode?.logo?.file ?
                          <ContentfulAsset className={'featureLogo'} data={integrationNode.logo}/> : null}

                      <TableOfKeyStats integration={integrationNode}/>
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