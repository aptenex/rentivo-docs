import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
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
const Section = styled('section')`
  position: relative;
  padding-top: 220px; 
`;


const WhiteSectionWrapper = styled.section`
  padding: 80px 0;

`;

const CardNumbers = styled(Card)`
  padding: 30px;
  background: white;
  margin-bottom: 20px;
`

export default (props) => {
  const menuProducts = getMenuProducts();
  const productCategory = useProductHome();
  const faqGroups = useFAQGroupsOnHome();
  return (
      <MarketingLayout>

            <Section>
              <Container width={'720px'}>
                  <Heading fontWeight={600} textAlign={'center'} as={'h1'} content={'About Us'} />
                  <Heading fontWeight={400}  textAlign={'center'}  as={'h3'} content={'We are a mature tech company with strong opinions, expert knowledge of all things rentals and a mindset focused on pushing new ground in the travel industry.'} />

              </Container>
              <Container width={'920px'}>
                <TeamAtDeskImage/>
              </Container>

              <Container width={'1220px'} className={'mt6 pb4'}>
                  <Row top="xs">
                    <Col xs={12} md={12} xl={6} >
                        <Heading fontWeight={300} as={'h1'}content={'We are building solutions that solve real problems for short term rental managers.'} />
                        <Text>Staying ahead of the current trends, market opportunities and new products which are constantly targetting property managers can be a full time job just in itself. We've worked tirelessly since 2012 to grow Rentivo into a global brand which provides expert software in (nearly) all continents.</Text>
                        <Text>We want to reassure you, that you are not taking risks by putting your time effort and trust in to Rentivo, when we've already worked with thousands (if not hundreds) of real life businesses and people just like you.</Text>
                    </Col>
                    <Col xs={12} md={12} xl={6} >
                      <SoftwareDeveloperImage/>
                    </Col>
                  </Row>
              </Container>
            </Section>
            <WhiteSectionWrapper>
              <Container width={'1220px'} className={'mt6'}>
                      <Row top="xs">
                        <Col xs={12} md={12} xl={12} >
                          <Heading fontWeight={400} as={'h2'}  textAlign={'center'}  content={'Numbers matter, here are the ones we get asked the most.'} />
                          <Text>We want to reassure you, that you are not taking risks by putting your time effort and trust in to Rentivo, when we've already worked with thousands (if not hundreds) of real life businesses and people just like you.</Text>



                          <ListGrid
                              data={[
                                { heading : '2012',
                                  text: 'When we first appeared on the rental scene and deployed our first line of code, and got our first customer.'
                                },
                                { heading : '4000+',
                                  text: 'Paying customers have used us since we first released our first product'
                                },
                                { heading : '2016 Airbnb Partner',
                                  text: 'We were one of the first partners companies connected to Airbnb API partnership programme in 2016'
                                },
                                { heading : '20 Technology Partners',
                                  text: 'We work closely with many suppliers, marketplaces, and software partners.'
                                },
                                { heading : '267 Investors',
                                  text: 'We successfully raised 340k+ from crowd investment in 2016.'
                                },
                                { heading : '96% Same-day resolution',
                                  text: 'We successfully answer and resolve all of our support queue tickets on the same day.'
                                },
                                { heading : '176k+ Properties',
                                  text: 'Our software processes 176k+ properties from our customers, suppliers, managers and other software partners.'
                                },
                                { heading : '14 Currencies',
                                  text: 'Our customers process payments in 14 different currencies.'
                                },
                                { heading : '£1m Daily/booking volume',
                                  text: 'Our software manages availability  updates for bookings worth approximately £1m every single day'
                                },
                                { heading : '13 Staff',
                                  text: 'Our small team deliver big projects and work from three different countries and two offices'
                                },
                                { heading : '1200+ websites',
                                  text: 'Our customers have created 1k+ websites for their direct bookable properties'
                                },
                                { heading : 'Working at Scale with 14k+ properties',
                                  text: 'Our largest single customer provides direct bookings for 14k+ properties.'
                                }
                              ]}
                              columnWidth={1 / 3} //{[1, 1/2, 1/4]} responsive
                              component={({heading,text}) => (
                                  <CardNumbers>
                                    <Heading fontWeight={400} as={'h2'}  textAlign={'center'}  content={heading} />
                                    <Text>{text}</Text>
                                  </CardNumbers>
                              )}
                          />




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
