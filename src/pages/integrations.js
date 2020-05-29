import React, {useState, useEffect, Fragment, Component, useLayoutEffect} from 'react';
import Sticky from 'react-stickynode';
import {ThemeProvider} from 'styled-components';
import {rentivoTheme} from 'common/src/theme/rentivo';
import {ResetCSS} from 'common/src/assets/css/style';

import {
  GlobalStyle,
  ContentWrapper,
  HotIntegration,
  RetiringIntegration,
  SoftLaunchIntegration,
  TagList,
  TagFilter
} from '../containers/Rentivo/rentivo.style';
import Navbar from '../containers/Rentivo/Navbar';
import BannerSection from '../containers/Rentivo/BannerSection';
import CalendlySection from '../containers/Rentivo/CalendlySection';
import ProductSection from '../containers/Rentivo/FeatureGallery';
import VisitorSection from '../containers/Rentivo/VisitorSection';
import ServiceSection from '../containers/Rentivo/ServiceSection';
import FaqSection from '../containers/Rentivo/FaqSection';
import Footer from '../containers/Rentivo/Footer';
import PricingSection from '../containers/Rentivo/PricingSection';
import TrialSection from '../containers/Rentivo/TrialSection';
import TimelineSection from '../containers/Rentivo/TimelineSection';
import TestimonialCards from '../containers/Rentivo/TestimonialCards';
import TestimonialSection from '../containers/Rentivo/TestimonialSection';
import PartnerSection from '../containers/Rentivo/PartnerSection';
import IntegrationFlipchart from '../containers/Rentivo/IntegrationFlipchart';
import {DrawerProvider} from 'common/src/contexts/DrawerContext';
import SEO from '../components/seo';
import {useProductHome} from "../containers/Rentivo/FeatureGallery/hooks/home";
import {useFAQGroupsOnHome} from "../containers/Rentivo/FaqSection/hooks/home";
import {getMenuProducts} from '../containers/Rentivo/DesktopNav/DropdownContents/hooks/home';
import MarketingLayout from "../components/MarketingLayout";
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Card from 'reusecore/src/elements/Card';
import ListGrid from 'reusecore/src/elements/ListGrid';
import Container from 'common/src/components/UI/Container';
import styled from 'styled-components';
import TeamAtDeskImage from '../components/Images/TeamAtDesk';
import SoftwareDeveloperImage from '../components/Images/SoftwareDeveloper';
import Row from 'components/Flex/Row'
import Col from 'components/Flex/Col'
import Image from "gatsby-image";
import {Link, graphql} from "gatsby";
import ContentfulAsset from 'containers/Rentivo/ContentfulAsset';
import {useScript} from '../components/useScript';
import Lottie from 'react-lottie';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight, faPepperHot, faRocketLaunch} from '@fortawesome/pro-duotone-svg-icons'
import ReactTooltip from "react-tooltip";

const Section = styled('section')`
  position: relative;  
`;
const FeatuetteSection = styled('section')`
  position: relative;
  padding-top: 0px;
  padding-bottom: 30px; 

`;

const ContainerTop = styled(Container)`
  z-index: 10;
position: relative;
margin-bottom: -40px;

`;

const WhiteSectionWrapper = styled.section`
  padding: 80px 0;
`;

const CardIntegration = styled(Card)`
  padding: 30px;
  background: white;
  position: relative;
  margin-bottom: 20px;
  text-align: center;
  .featureLogo {
    float: left;
    margin-bottom: 5px;
  }

  h2 {
    font-size: 1rem;
    color: #ccc;
  }
  svg {
    max-height: 50px !important;
    width: inherit !important;
  }
 
  &.rentals-united, &.supercontrol,&.lovecottages,&.cottages-com  {
    .featureLogo, .imgWrapper, .gatsby-image-wrapper {
      min-width: 150px;
    }
  }
  &.eats-and-retreats {
   .featureLogo, .imgWrapper, .gatsby-image-wrapper {
      min-width: 150px;
    }
  }
    &.bookingsync {
    svg {
    min-height: 24px;
    }
    }
  &.sykes-holiday-cottages {
    svg {
    min-height: 20px;
    }
  }
`;

const IntegrationImage = styled(Image)`
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
`;
const LearnMoreLink = styled(Link)`
text-align: right;
float:right;
margin-bottom: 20px;
 position: relative;
 &:hover { 
 text-decoration: underline !important;
 }
 svg {
  opacity: 0;
  transition: all .5s ease-in-out;
  transform: scale(5);
  position: absolute;
    right: 40px;
    bottom: 80px;
 }
 &:hover {
    svg {
      opacity: 0.14;
      transform: scale(12);
      
   }
 }
`

const Summary = styled('p')`
  
  clear: both;
  text-align: left;
`;


const StyledSoftLaunchIntegration = styled(SoftLaunchIntegration)`
  padding: 20px;
  margin: -20px;
  float: right;
  position: absolute;
  right: 30px;  
`;
const StyledHotIntegration = styled(HotIntegration)``;
const StyledRetiringIntegration = styled(RetiringIntegration)``;



const LottieWrapper = styled(Container)`
svg {
  margin-top: -5vh;
}
`;

export default ({ location, data: { tags: {distinct: tags} }, data: { allContentfulIntegration: {edges: integrations} } }) => {
  const faqGroups = useFAQGroupsOnHome();

  const [filteredIntegrations, setFilteredIntegrations] = useState(integrations);
  const [activeTag, setActiveTag] = useState(null);

  const handleTagClickEvent = (tag) => {
    if (!tag) {
      setFilteredIntegrations(integrations);
      setActiveTag(tag);
      window.location.hash = '';
    } else {
      const f = integrations.filter((p) => p.node.tags && p.node.tags.map((i) => _.kebabCase(i).toLowerCase()).includes(tag));
      setFilteredIntegrations(f);
      setActiveTag(tag);
      window.location.hash = tag;
    }

  };
  useEffect(() => {
    // Update the document title using the browser API
    handleTagClickEvent(location.hash.replace('#',''))
  }, []);




  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: "https://assets10.lottiefiles.com/packages/lf20_kojxlZ.json",
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
      <MarketingLayout location={location}>

        <FeatuetteSection>
          <ContainerTop width={'720px'}>
            <Heading fontWeight={600} textAlign={'center'} as={'h1'} content={'Our Software Integrations'}/>
            <Heading fontWeight={400} textAlign={'center'} as={'h3'}
                     content={'We are constantly adding new integrations. Here is who we already connect with.'}/>

          </ContainerTop>
          <LottieWrapper width={'1420px'}>
            <Lottie options={defaultOptions}
                    height={'40vh'}
                    width={'60vw'}
            />
          </LottieWrapper>
        </FeatuetteSection>
        <Section>

          <Container>
            <TagFilter>
              <li className={activeTag === null ? "active" : null} onClick={() => handleTagClickEvent(null)}
                  key={'all-integrations'}>All Integrations
              </li>
              {tags.map((tag, index) => (
                  <li className={activeTag === _.kebabCase(tag.toLowerCase()) ? "active" : null} onClick={() => handleTagClickEvent(_.kebabCase(tag.toLowerCase()))}
                      key={_.kebabCase(tag.toLowerCase())}>{tag}</li>
              ))}
            </TagFilter>

            <ListGrid
                data={filteredIntegrations}
                columnWidth={[1, 1 / 2, 1 / 2, 1 / 3]} //{[1, 1/2, 1/4]} responsive
                component={({node}) => (
                    <CardIntegration className={node.slug} key={node.slug}>


                      {(node.slug && <Link to={'integrations/' + node.slug}>
                        <ContentfulAsset className={'featureLogo'} data={node.logo}/>
                      </Link>) ||
                      <ContentfulAsset className={'featureLogo'} data={node.logo}/>}

                      <Heading fontWeight={400} as={'h2'} textAlign={'right'} content={node.name}/>

                      {node.status && node.status === 'Retiring Integration' &&
                      <StyledRetiringIntegration style={{float: 'right'}} data-multiline="true"
                                                 data-tip="Due to service being removed from the market, this integration is being retired<br />If you are looking for a comparable product, please get in contact to help with a migration.">{node.status}</StyledRetiringIntegration>}
                      {node.status && node.status === 'Hot' &&
                      <StyledHotIntegration style={{float: 'right'}} data-multiline="true"
                                            data-tip="This connection is hot. Our customers love this integration and is one of the most popular integrations we support."><FontAwesomeIcon
                          icon={faPepperHot}/><FontAwesomeIcon icon={faPepperHot}/><FontAwesomeIcon icon={faPepperHot}/></StyledHotIntegration>}
                      {node.status && node.status === 'Soft Launched' &&
                      <StyledSoftLaunchIntegration style={{float: 'right'}} data-multiline="true"
                                                   data-tip="We have completed our technical development for this integration and we are currently soft launching this integration with existing Rentivo customers. Please contact your Rentivo Success manager for more information.">Soft
                        Launch <FontAwesomeIcon icon={faRocketLaunch}/></StyledSoftLaunchIntegration>}

                      <TagList>
                        {node.tags && node.tags.map((tag, index) => (
                            <li className={activeTag === _.kebabCase(tag.toLowerCase()) ? "active" : null} onClick={() => handleTagClickEvent(_.kebabCase(tag.toLowerCase()))}
                                key={_.kebabCase(tag.toLowerCase())}>{tag}</li>
                        ))}
                      </TagList>
                      {node.summary && <Summary>{node.summary.summary}</Summary>}

                      {node.slug &&
                      <LearnMoreLink to={'integrations/' + node.slug}>
                        Learn more
                        <FontAwesomeIcon icon={faChevronRight}/>
                      </LearnMoreLink>}
                    </CardIntegration>
                )}
            />
          </Container>

        </Section>

        <FaqSection data={faqGroups} groups={"General,Billing"} active={"General"}/>

      </MarketingLayout>
  );
};

export const query = graphql`
  query IntegrationsQuery {
    tags: allContentfulIntegration {
      distinct(field: tags)
    }
    allContentfulIntegration {
      edges {
        node {
          id
          slug
          name
          tags
          status
          logo {
            id
            fluid(maxHeight: 50) {
              ...GatsbyContentfulFluid_tracedSVG
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
            id
            summary
          }
          webAddress

        }
      }
    }
  }
`