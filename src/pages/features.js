import React, { Fragment } from 'react';
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
import {graphql} from "gatsby";
import HeroSection from "../containers/Rentivo/HeroSection";
import _ from "lodash";
import PRODUCTS from "../constants/products";
const Section = styled('section')`
  position: relative;
  padding-top: 0px; 
  hr {
    border-top: none;
    border-bottom: 1px solid #eee;
  }
`;

const WhiteSectionWrapper = styled.section`
  padding: 80px 0;

`;

const CardNumbers = styled(Card)`
  padding: 30px;
  background: white;
  margin-bottom: 20px;
`

const FeatureColumn = styled(Col)`
  display: flex;
  flex-wrap: wrap;
  
`
const FeatureColWrapper = styled(Col)`
  background: white;
  box-shadow: inset 2px 2px 2px rgba(0,0,0,0.1);
`

export default (props) => {

  // TODO FUNCTION FOR SORTING....
  const sortGroups = (productGroups) => {

    const groupsEdgesWithOrder = productGroups.map(({edges}) => {
      const order = PRODUCTS[edges[0].node.parentPage.name] ? PRODUCTS[edges[0].node.parentPage.name].order : null;
      return { edges : {...edges}, order };
    });

    const groupEdgesSorted = _.sortBy(groupsEdgesWithOrder, ['order']);
    return groupEdgesSorted;
  };


  const  featurePagesSorted = sortGroups(props.data.allContentfulPage.products);
  const FeaturesBlocks = featurePagesSorted.map( ( product, index) => {

    let HeroSections = <HeroSection forceHeroPrimaryBg={true} key={product.edges[0].node.parentPage.heroFeaturette.id} {...product.edges[0].node.parentPage.heroFeaturette } />
    const categories = _.groupBy( product.edges, ({node}) => {
      return node?.category?.title ? node?.category?.title : 'Overview';
    });

    const Features = Object.entries( categories ).map( ([title, links], catIndex) => {
      const catLinks = links.map(({node : el}) => {
        const {
          id,
          slug,
          name : textNode,
        } = el;
        let classes = `feature-header ${el.slug}`;

        if (this?.state?.activeNavItem?.includes( `/features/${el.slug}` )) {
          classes += ' active';
        }

        return <li key={id}><a className={classes} href={`/features/${slug}`}>{textNode}</a></li>;
      });
      const colKey =  `${index}_${catIndex}_${product.edges[0].node.parentPage.heroFeaturette.id}`;
      return <Col key={ colKey } xs={12} md={6} xl={4}><h5>{title}</h5><hr /><ul>{catLinks}</ul></Col>;

    });
    return <Row key={index}>
        <Col xs={12} md={12} xl={12}>
          { HeroSections }
        </Col>
        <FeatureColWrapper xlOffset={1} xs={12} md={12} xl={10}>
          <Heading fontWeight={600} mt={'50px'} textAlign={'center'} as={'h2'} content={product.edges[0].node.parentPage.name + ' Features'} />
          <FeatureColumn>
            { Features }
          </FeatureColumn>
        </FeatureColWrapper>
      </Row>;

    //
    // return (<Row>
    //   <Col>
    //     {HeroSections}
    //   </Col>
    //   <Col>
    //     { Features }
    //   </Col>
    // </Row>)

  });

  return (
      <MarketingLayout  location={props.location}>

            <Section>
              <Container width={'720px'}>
                  <Heading fontWeight={600} textAlign={'center'} as={'h1'} content={'Our Product Features'} />
                  <Heading fontWeight={400}  textAlign={'center'}  as={'h3'} content={'The key Rentivo features broken down by feature type.'} />
              </Container>

              <Container>
                {FeaturesBlocks}
              </Container>

            </Section>
      </MarketingLayout>
  );
};


export const query = graphql`
  query FeaturesQuery {
    allContentfulPage {
      parentNames:distinct(field: parentPage___name)
      parentIds :distinct(field: parentPage___id)
      products : group(field: parentPage___id) {
        edges {
          node {
            id
            name
            slug
            category {
              id
              title
            }
            parentPage {
              id
              name
              slug
              heroFeaturette {
                ...Hero
              }
            }
          }
        }
      }
    }
  }
`