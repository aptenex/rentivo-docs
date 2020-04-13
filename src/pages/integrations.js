import React, { useState, useEffect, Fragment, Component } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { rentivoTheme } from 'common/src/theme/rentivo';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Rentivo/rentivo.style';
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
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import SEO from '../components/seo';
import { useProductHome } from "../containers/Rentivo/FeatureGallery/hooks/home";
import { useFAQGroupsOnHome } from "../containers/Rentivo/FaqSection/hooks/home";
import { getMenuProducts} from '../containers/Rentivo/DesktopNav/DropdownContents/hooks/home';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/pro-duotone-svg-icons'

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
  img, svg {
    max-width: 180px;
  }
`

const IntegrationImage = styled(Image)`
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
`
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


const TagFilter = styled('ul')`
  font-size: 1.3em;
  display: inline-flex;
  max-width: 100%;
  margin: 0px;
  padding: 0px;  
  vertical-align: bottom;
  margin-bottom: 20px;
  
  li {
    border-radius: 3px;
    background: white;
    padding: 15px 30px;
    border: 1px solid #01b47d;
    margin-right: 20px;
    align-items: center;
    justify-content: center;
    &:hover {
      border: 1px solid #01b47d;      
      background: #e4fff7;
      cursor: pointer;
    }
    &.active {
      background: #01b47d;
      color: white;
      font-weight: 600;
      &:hover {
       
      }
    }    
  }
  
   @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    li { margin-bottom: 3px;}    
   }
`;

const TagList = styled(TagFilter)`
  font-size: 0.9em;
  display: inline-flex;  
  text-align: left;
    clear:both;
    float:left;
    margin-bottom: 10px;
  li {    
    padding: 7px 12px;
    border: 1px solid #01b47d;    ;
    border-radius: 20px;
  }
   @media (max-width: 768px) {
      flex-direction: row;
      width: auto;
      li { margin-bottom: 3px;}    
   }
`;

const LottieWrapper = styled(Container)`
svg {
  margin-top: -5vh;
}
`;

export default ({data : { tags : { distinct : tags } } , data : { allContentfulIntegration : { edges : integrations } } }, props) => {
  const faqGroups = useFAQGroupsOnHome();


  const [ filteredIntegrations, setFilteredIntegrations ] = useState( integrations );
  const [ activeTag, setActiveTag ] = useState( null );
  const handleTagClickEvent = (tag) => {
      if(!tag) {
        setFilteredIntegrations(integrations);
        setActiveTag(tag);
      } else {
        const f = integrations.filter((p) => p.node.tags && p.node.tags.includes(tag));
        setFilteredIntegrations(f);
        setActiveTag(tag);
      }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: "https://assets10.lottiefiles.com/packages/lf20_kojxlZ.json",
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
      <MarketingLayout location={props.location}>

            <FeatuetteSection>
              <ContainerTop width={'720px'} >
                  <Heading fontWeight={600} textAlign={'center'} as={'h1'} content={'Our Software Integrations'} />
                  <Heading fontWeight={400}  textAlign={'center'}  as={'h3'} content={'We are constantly adding new integrations. Here is who we already connect with.'} />

              </ContainerTop>
              <LottieWrapper width={'1420px'}>
                <Lottie options={defaultOptions}
                                        height={'40vh'}
                                        width={'60vw'}
                />
              </LottieWrapper>
            </FeatuetteSection>
            <Section>

              <Container >
                <TagFilter>
                  <li className={ activeTag === null ?  "active" : null  } onClick={() => handleTagClickEvent(null)} key={'all-integrations'}>All Integrations</li>
                {tags.map( (tag, index) => (
                    <li className={ activeTag === tag ?  "active" : null  } onClick={() => handleTagClickEvent(tag)} key={index}>{tag}</li>
                ))}
                </TagFilter>

                <ListGrid
                    data={filteredIntegrations}
                    columnWidth={[1, 1/2, 1/2, 1/3]} //{[1, 1/2, 1/4]} responsive
                    component={({node}) => (
                        <CardIntegration>


                          { ( node.slug &&  <Link to={'integrations/' + node.slug }>
                                              <ContentfulAsset className={'featureLogo'} data={node.logo}/>
                                            </Link> ) ||
                                            <ContentfulAsset className={'featureLogo'} data={node.logo}/> }

                          <Heading fontWeight={400} as={'h2'}  textAlign={'right'}  content={node.name} />


                          <TagList>
                            {node.tags && node.tags.map( (tag, index) => (
                                <li className={ activeTag == tag ?  "active" : null  } onClick={() => handleTagClickEvent(tag)} key={index}>{tag}</li>
                            ))}
                          </TagList>
                          { node.summary && <Summary>{node.summary.summary}</Summary> }

                          {node.slug &&
                          <LearnMoreLink to={'integrations/' + node.slug }>
                              Learn more
                              <FontAwesomeIcon icon={faChevronRight} />
                          </LearnMoreLink> }
                        </CardIntegration>
                    )}
                />
              </Container>

            </Section>

            <FaqSection  data={faqGroups} groups={"General,Billing"} active={"General"}  />

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
          logo {
            id
            fixed(height: 75) {
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