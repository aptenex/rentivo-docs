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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight, faCloudDownload} from '@fortawesome/pro-duotone-svg-icons'
const Section = styled('section')`
  position: relative;
  padding-top: 120px; 
`;
import LogoImage from 'common/src/assets/image/rentivo-logo.svg';

const WhiteSectionWrapper = styled.section`
  padding: 80px 0;

`;

const CardNumbers = styled(Card)`
  padding: 30px;
  background: white;
  margin-bottom: 20px;
`

const Color = styled('div')`
width: 100%;

padding: 20px 10px;
margin-bottom: 50px;
color: white;
background:#29c88e;
 ul {
  li {
  font-size: 1.1rem;
  margin-bottom: 10px;
   list-style: none;
  }
 }
`;
const PrimaryColor = styled(Color)`
  height: 400px;
  padding: 40px 20px;
   ul {
    li {
      font-size: 1.4rem;
      margin-bottom: 10px;
       list-style: none;
    }
 }
`;
const CoopProduct = styled(Color)`
  background: #f44869;
`;
const SupplyProduct = styled(Color)`
  background: #e5683a;
`;
const WebsiteProduct = styled(Color)`
  background: #403d93;
`;
const ChannelProduct = styled(Color)`
  background: #012837;
`;

const ProductRow = styled(Row)`
  
`;
const DownloadLogoLink = styled('a')`
  clear:both;
  position: relative;
  top: 40px;
  padding: 20px;
  background: white;
  border-radius: 3px;
      border: 1px solid #c9d0d8;
    box-shadow: 0 4px 2px 0 rgba(22,29,37,.05);
    color: #667587;
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
      <MarketingLayout location={props.location} >

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
                        Download as SVG (6kB)
                        <FontAwesomeIcon icon={faCloudDownload} />
                      </DownloadLogoLink>

                    </Col>
                    <Col xs={12} md={12} xl={6} >
                      <Heading fontWeight={300} as={'h1'}content={'Product Colors'} />
                      <Text>Rentivo also color schemes our products. Below is the color styles for each product.</Text>
                    </Col>
                  </Row>
                  <ProductRow top="xs">

                    <Col xs={12} md={3} xl={3} >
                      <WebsiteProduct>
                        <ul>
                          <li><Heading as={'h6'}>Booking Engine</Heading></li>
                          <li><span>Hex:</span> <span>#403d93</span></li>
                          <li>RGBA: 64, 61, 147, 1</li>
                          <li>HSLA: 242, 41%, 41%, 1</li>
                        </ul>

                      </WebsiteProduct>
                    </Col>
                    <Col xs={12} md={3} xl={3} >
                      <ChannelProduct>
                        <ul>
                          <li><Heading as={'h6'}>Channel Manager</Heading></li>
                          <li><span>Hex:</span> <span>#022736</span></li>
                          <li>RGBA: 2, 39, 54, 1</li>
                          <li>HSLA: 197, 93%, 11%, 1</li>
                        </ul>

                      </ChannelProduct>
                    </Col>
                    <Col xs={12} md={3} xl={3} >
                      <CoopProduct>
                        <ul>
                          <li><Heading as={'h6'}>Cooperative</Heading></li>
                          <li><span>Hex:</span> <span>#f44869</span></li>
                          <li>RGBA: 244, 72, 105,1</li>
                          <li>HSLA: 348, 89%, 62%, 1</li>
                        </ul>

                      </CoopProduct>
                    </Col>
                    <Col xs={12} md={3} xl={3} >
                      <SupplyProduct>
                        <ul>
                          <li><Heading as={'h6'}>Supply + API</Heading></li>
                          <li><span>Hex:</span> <span>#e5673a</span></li>
                          <li>RGBA: 229, 103, 58, 1</li>
                          <li>HSLA: 16, 77%, 56%, 1</li>
                        </ul>
                      </SupplyProduct>
                    </Col>
                  </ProductRow>
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
