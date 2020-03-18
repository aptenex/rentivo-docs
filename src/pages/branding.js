import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import Image from 'gatsby-image';
import { ThemeProvider } from 'styled-components';
import { rentivoTheme } from 'common/src/theme/rentivo';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Rentivo/rentivo.style';
import Navbar from '../containers/Rentivo/Navbar';
import BannerSection from '../containers/Rentivo/BannerSection';
import CalendlySection from '../containers/Rentivo/CalendlySection';
import FeatureSection from '../containers/Rentivo/FeatureSection';
import ProductSection from '../containers/Rentivo/ProductSection';
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
import { useProductHome } from "../containers/Rentivo/ProductSection/hooks/home";
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight, faCloudDownload} from '@fortawesome/pro-duotone-svg-icons'
const Section = styled('section')`
  position: relative;
  padding-top: 220px; 
`;
import LogoImage from 'common/src/assets/image/rentivo-logo.png';

const WhiteSectionWrapper = styled.section`
  padding: 80px 0;

`;

const CardNumbers = styled(Card)`
  padding: 30px;
  background: white;
  margin-bottom: 20px;
`

const PrimaryColor = styled('div')`
width: 100%;
height: 400px;
padding: 40px 20px;
margin-bottom: 50px;
color: white;
font-size: 2rem;
background:#29c88e;
 ul {
  li {
  font-size: 1.4rem;
  margin-bottom: 10px;
   list-style: none;
  }
 }
`;
const DownloadLogoLink = styled('a')`
  
  position: relative;
  top: 30px;
  padding: 20px;
  background: white;
  border-radius: 3px;
  svg {
     margin-left: 20px;
  }
  &:hover {
    text-decoration: underline !important;
  }
`

const Logo = styled('img')``;

export default (props) => {
  const menuProducts = getMenuProducts();
  const productCategory = useProductHome();
  const faqGroups = useFAQGroupsOnHome();
  return (
      <MarketingLayout>

            <Section>
              <Container width={'720px'}>
                  <Heading fontWeight={600} textAlign={'center'} as={'h1'} content={'Media and Branding'} />
                  <Heading fontWeight={400}  textAlign={'center'}  as={'h3'} content={'Rentivo is a technology company providing software as a service to the holiday rental industry.'} />

              </Container>

              <Container width={'1220px'} className={'mt6 pb4'}>
                  <Row top="xs">
                    <Col xs={12} md={12} xl={6} >
                        <Heading fontWeight={300} as={'h1'}content={'Rentivo Color and Branding'} />
                        <Text>Rentivo has a very simple branding color scheme. When using Rentivo, the colors attached are the primary colors for the Rentivo Group.</Text>
                        <PrimaryColor>
                          <ul>
                            <li><span>Hex:</span> <span>#29c88e</span></li>
                            <li>RGBA: 41,200,142,1</li>
                            <li>HSLA: 158, 66%, 47%, 1</li>
                          </ul>

                        </PrimaryColor>
                    </Col>
                    <Col xs={12} md={12} xl={6} >
                      <Logo src={LogoImage} />
                      <DownloadLogoLink href={LogoImage} download>
                        Download as PNG (18.0KB 866x323 pixels)
                        <FontAwesomeIcon icon={faCloudDownload} />
                      </DownloadLogoLink>



                    </Col>
                  </Row>
                  <Row top="xs">
                    <Col xs={12} md={12} xl={6} >

                      <Heading fontWeight={300} as={'h1'} content={'Getting In Contact'} />
                      <Text>For general media/press contacts you can email our friendly management team at <a href="mailto:hello@rentivo.com">hello@rentivo.com</a></Text>

                    </Col>
                  </Row>
              </Container>
            </Section>
            <WhiteSectionWrapper>
              <Container width={'1220px'} className={'mt6'}>
                      <Row top="xs">
                        <Col xs={12} md={12} xl={12} >


                        </Col>
                        <Col xs={12} md={12} xl={6} >
                        </Col>
                      </Row>
                    </Container>



            </WhiteSectionWrapper>



            <FaqSection  data={faqGroups} groups={"General,Billing"} active={"General"}  />

      </MarketingLayout>
  );
};
