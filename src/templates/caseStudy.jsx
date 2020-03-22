import React, {Fragment} from 'react';
import { graphql } from 'gatsby';
import RehypeReact from 'rehype-react';
import _ from 'lodash';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO';
import AsideMenu from '../components/AsideMenu';
import withSubNav from '../components/NavSub';
import FeatuetteSection from '../containers/Rentivo/FeaturetteSection';
import TestimonialItem from '../containers/Rentivo/TestimonialItem';
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
import { Link } from 'gatsby';
import SubNav from '../components/NavSub';
import HeroSection from '../containers/Rentivo/HeroSection';
import Row from 'components/Flex/Row'
import Col from 'components/Flex/Col'
import Card from 'reusecore/src/elements/Card';
import LogoImage from 'common/src/assets/image/rentivo-logo.png';
import Box from 'reusecore/src/elements/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faDownload } from '@fortawesome/pro-duotone-svg-icons'

const CardWrapper = styled(Card)`
    padding: 30px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    text-align: left;
    background: rgba(0,0,0,0.1);
    border:1px solid rgba(255,255,255,0.3);
    box-shadow: 2px 4px 0px 2px rgba(2,2,2,0.1);
    border-radius: 2px;
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
    img {
      filter: brightness(0) invert(1);
    }
  `

const BackgroundHeroNoTopGutter = styled('div')`
    min-height: 450px;
`;
const HeroWrapper = styled('div')`
  > section {
    padding-bottom: 20px !important;
  }
  > .gatsby-image-wrapper {
    position: static !important;
  }
  filter: brightness(0.92);
  padding-top: 280px; 
  position: relative;

  border-bottom: 1px solid #222;
  color: rgba(247, 249, 250, 0.75);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .tagline { 
    color: rgba(247, 249, 250, 0.75);
  }
  &:after {
    position: absolute;
    content: '.';
    display: block;
    width: 100%;
    top: 0px;
    bottom: 0px;
    height: 100%;
    background: rgba(0,0,0,0.2);
    z-index: 1;
  }
  
`;

const CaseHeroSection = styled('section')`
  color: rgba(247, 249, 250, 0.95) !important;
  h1,h2 {
    color: rgba(247, 249, 250, 0.75) !important;
  }
  z-index: 2;
  padding-bottom: 80px;
`;

const CaseStudyBody = styled('section')`
  margin-top: 100px;
  .intro::first-letter, .intro p:nth-of-type(1)::first-letter {
      color: #2a3039;
      float: left;
      font-size: 58px;
      height: 50px;
      line-height: 50px;
      padding: 6px 6px 0 0;
  }

`

const Intro = styled('section')`
  &::first-letter, &p:nth-of-type(1)::first-letter {
      color: #2a3039;
      float: left;
      font-size: 58px;
      height: 50px;
      line-height: 50px;
      padding: 6px 6px 0 0;
  }
  font-size: 19px;
  line-height: 1.6;

`

const SideContent = styled('div')`
  ul {
    position: relative;
    margin-bottom: 10px;
  }
  ul li {
    margin-bottom: 4px;
    line-height: 1.6;
    font-size: 1.2em;
  }
  ul li:before {
      background-color: #c5d2d8;
      border-radius: 50%;
      content: '';
      height: 5px;
      left: 0;
      position: absolute;      
      transform: translateY(110%);
      width: 5px;
  }

`


const Requirements = function({title, content}) {
 return content && (
   <SideContent>
    <h3>{title}</h3>
     <div>
       {renderAst(content.childMarkdownRemark.htmlAst)}
     </div>
   </SideContent>
 ) ;

};

const DownloadLink = styled('a')`
  margin-top: 20px;
  border: 1px solid #333;
  padding: 20px;
  clear:both;
  display: block;
  border-radius: 2px;
      font-weight: 600;
    color: #536171;
    border: 1px solid #a9b9c0;
    text-align: center;
`;

const StudyLink = styled('a')`
  margin-left: 20px;
`;

const renderAst = new RehypeReact({
  createElement: React.createElement,
}).Compiler;

class CaseStudyTemplate extends React.Component {
  getLinks() {
    const { data } = this.props;
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

  render() {
    const props = this.props;
    const { data, location } = this.props;
    const caseStudyNode = data.caseStudy;
    const { faq : faqGroups}  = data;
    const asideLinks = this.getLinks();
    return (

      <MarketingLayout location={location} articleClass={'top'} menu={'light'} subNav={true}>
          <SEO postNode={caseStudyNode} postType="caseStudy" />
          { asideLinks.length > 0
              ? (<AsideMenu asideLinks={this.getLinks()} />)
              : null
          }
        <BackgroundHeroNoTopGutter>
          <HeroWrapper>
            <Image {...caseStudyNode.studyBackground} />
            <CaseHeroSection>
              <Container>
                <Row top="xs" >
                  <Col xs={12} >
                    <Container  width={'960px'}>
                      <Box>
                        <Container  width={'280px'}>
                          <Row top="xs" >
                            <Col xs={12} >
                              <CardWrapper>
                                {caseStudyNode.logo && <ContentfulAsset data={caseStudyNode.logo} /> }
                              </CardWrapper>
                            </Col>

                          </Row>
                        </Container>
                        <Heading fontWeight={500}  textAlign={'center'}  as={"h1"} fontSize={['16px', '16px', '16px', '20px', '20px']}>Case Study: {caseStudyNode.title}</Heading>
                        <Text textAlign={'center'}   lineHeight={'1.5'} fontSize={['36px', '36px', '40px', '40px', '40px']}>{caseStudyNode.summary}</Text>
                      </Box>
                    </Container>
                  </Col>
                </Row>
              </Container>

            </CaseHeroSection>
          </HeroWrapper>
        </BackgroundHeroNoTopGutter>

        <Container>
          <CaseStudyBody>
            <Row top="xs" >
              <Col  md={12} xl={9} >
                { caseStudyNode.intro && <Intro>
                    <Text as={'div'}> {renderAst(caseStudyNode.intro.childMarkdownRemark.htmlAst)}</Text>
                  </Intro>
                }

                { caseStudyNode.testimonial && <TestimonialItem node={ caseStudyNode.testimonial[0] }/> }

                { caseStudyNode.content &&
                  <Text as={'div'}> {renderAst(caseStudyNode.content.childMarkdownRemark.htmlAst)}</Text>
                }



              </Col>

              <Col  md={12} xl={3} >
                <Requirements title={'Requirements'} content={ caseStudyNode.requirements } />
                <Requirements title={'Results'} content={ caseStudyNode.results } />
                {caseStudyNode.logo && <ContentfulAsset data={caseStudyNode.logo} /> }
                {caseStudyNode.website && <Text>
                  <FontAwesomeIcon icon={faExternalLinkAlt}/>
                  <StudyLink target={'_blank'} href={caseStudyNode.website}>{caseStudyNode.website}</StudyLink>


                  { caseStudyNode.downloadStudy && <DownloadLink download target={'_self'} href={caseStudyNode.downloadStudy.file.url }>Download PDF <FontAwesomeIcon icon={faDownload}/> </DownloadLink> }
                </Text> }


              </Col>
            </Row>
          </CaseStudyBody>
        </Container>


      </MarketingLayout>
    );
  }
}

export default CaseStudyTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  
  
  query CaseStudyByID($id: String!) {
    
    caseStudy: contentfulCaseStudy(id: {eq: $id}) {
      id
      slug
      intro {
        childMarkdownRemark {
          html
          htmlAst
        }
      }
      content {
        childMarkdownRemark {
          html
          htmlAst
        }
      }
      requirements {
        childMarkdownRemark {
          html
          htmlAst
        }
      }
      downloadStudy {
        id
        file {
          url
        }
      }
      testimonial {
        id
        role
        tagline
        name
        comment {
          childMarkdownRemark {
            id
            html
            rawMarkdownBody
          }
        }
        avatar {
          fluid(maxWidth: 180, background: "rgb:000000") {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
      results {
        childMarkdownRemark {
          html
          htmlAst
        }
      }
      logo {
        id
        fixed(width: 170) {
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
        fluid(maxWidth: 1900, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }   
    }

   
    
  }
  
`;

// fixed(width: 960, background: "rgb:000000") {
// ...GatsbyContentfulFixed_tracedSVG
// }