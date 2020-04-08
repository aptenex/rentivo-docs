import React, { useState, Fragment, Component } from 'react';
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
import './partners.css';
import ContentfulAsset from 'containers/Rentivo/ContentfulAsset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faExternalLinkAlt} from '@fortawesome/pro-duotone-svg-icons';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';
import {
  CaseStudySlideWrapper,
  CaseStudyBannerWrapper,
  CaseStudyItem,
  CaseStudyMeta,
  AuthorInfo,
  StudyBackground,
  CaseStudyBody,
  ImageLabel,
  LogoImage,
  AuthorImage,
  AccentFocusHighlightBar
} from "../containers/Rentivo/CaseStudySection/caseStudy.style";

const Section = styled('section')`
  position: relative;
  padding-bottom: 30px;
   
`;

const WhiteSectionWrapper = styled.section`
  padding: 80px 0;
`;

const CardCustomer = styled(Card)`
  padding: 30px;
  background: white;
  margin-bottom: 20px;
  h2 {
    font-size: 1rem;
    color: #AAA;
  }
`

const PartnerImage = styled(Image)`
margin: 0 auto;
margin-bottom: 20px;
text-align: center;
`
const LearnMore = styled(Text)`
text-align: right;
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
`;

const CustomerLink = styled('a')`
float:right;
margin-bottom: 10px;
margin-top: -15px;
color: #666;
`;

const TagList = styled(TagFilter)`
  font-size: 0.9em;
  display: inline-flex;  
  text-align: left;
    clear:both;
    margin-bottom: 10px;
    margin-top: 5px;
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

export default injectIntl( ({data : { tags : { distinct : tags } } , data : { allContentfulCaseStudy : { edges : customers } } }, props) => {

  const [ filteredCustomers, setFilteredCustomers ] = useState( customers );
  const [ activeTag, setActiveTag ] = useState( null );
  const handleTagClickEvent = (tag) => {
      if(!tag) {
        setFilteredCustomers(customers);
        setActiveTag(tag);
      } else {
        const f =customers.filter((p) => p.node.product.map( x => x.name ).includes(tag));
        setFilteredCustomers(f);
        setActiveTag(tag);
      }
  }

  return (
      <MarketingLayout>

        <Section>
          <Container width={'720px'}>
              <Heading fontWeight={600} textAlign={'center'} as={'h1'} content={'Our Customers'} />
              <Heading fontWeight={400}  textAlign={'center'}  as={'h3'} content={'See case studies of how companies are using Rentivo to build their business.'} />

          </Container>
        </Section>
        <Section>


        <Container>
            <TagFilter>
              <li className={ activeTag === null ?  "active" : null  } onClick={() => handleTagClickEvent(null)} key={'all-customers'}>All Case Studies</li>
              {tags.map( (tag, index) => (
                  <li className={ tag.toLowerCase().replace(' ', '-') + ' ' + (activeTag === tag ?  "active" : null)  } onClick={() => handleTagClickEvent(tag)} key={index}>{tag}</li>
              ))}
            </TagFilter>
              {filteredCustomers &&
                <ListGrid
                  data={filteredCustomers}
                  columnWidth={[1, 1 / 2, 1 / 3]} //{[1, 1/2, 1/4]} responsive
                  component={({node : study}) => (


                      <CaseStudyItem>
                        <CaseStudyBannerWrapper to={"/customers/" + study.slug}>
                          <ImageLabel>Case Study</ImageLabel>
                          <LogoImage
                              {...study.logo}
                              alt={study.title + ` case study`}
                          />
                          <StudyBackground
                              {...study.studyBackground}
                              alt={study.title + ` case study`}
                          />

                        </CaseStudyBannerWrapper>
                        <CaseStudyBody>
                          <AccentFocusHighlightBar />
                          <Heading as="h3" content={study.title} />
                          <Text content={study.summary} />
                          <CaseStudyMeta>
                            <Link to={"/customers/" + study.slug}>Read Case Study</Link>
                          </CaseStudyMeta>
                        </CaseStudyBody>
                      </CaseStudyItem>


                  )}
                />
              }
           </Container>
        </Section>


      </MarketingLayout>
  );
});

export const query = graphql`
  query CustomersQuery {
    tags: allContentfulCaseStudy  {
      distinct(field: product___name)
    }
    allContentfulCaseStudy {
      edges {
        node {
          id
          slug
          product {
            name
          }
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
  }
`