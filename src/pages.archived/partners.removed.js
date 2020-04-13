import React, { useState, Fragment, Component } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { rentivoTheme } from 'common/src/theme/rentivo';
import { ResetCSS } from 'common/src/assets/css/style';
import FaqSection from '../containers/Rentivo/FaqSection/index';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { useProductHome } from "../containers/Rentivo/FeatureGallery/hooks/home";
import { useFAQGroupsOnHome } from "../containers/Rentivo/FaqSection/hooks/home";
import { getMenuProducts} from '../containers/Rentivo/DesktopNav/DropdownContents/hooks/home';
import MarketingLayout from "../components/MarketingLayout/index";
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Card from 'reusecore/src/elements/Card';
import ListGrid from 'reusecore/src/elements/ListGrid';
import Container from 'common/src/components/UI/Container';
import styled from 'styled-components';
import Image from "gatsby-image";
import {Link, graphql} from "gatsby";
import '../pages/partners.css';
import ContentfulAsset from 'containers/Rentivo/ContentfulAsset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faExternalLinkAlt} from '@fortawesome/pro-duotone-svg-icons';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

const Section = styled('section')`
  position: relative;
  padding-bottom: 30px;
   
`;

const WhiteSectionWrapper = styled.section`
  padding: 80px 0;
`;

const CardPartner = styled(Card)`
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

const PartnerLink = styled('a')`
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

export default injectIntl( ({data : { tags : { distinct : tags } } , data : { allContentfulPartner : { edges : partners } } }, props) => {
  const menuProducts = getMenuProducts();
  const productCategory = useProductHome();
  const faqGroups = useFAQGroupsOnHome();


  const [ filteredPartners, setFilteredPartners ] = useState( partners );
  const [ activeTag, setActiveTag ] = useState( null );
  const handleTagClickEvent = (tag) => {
      if(!tag) {
        setFilteredPartners(partners);
        setActiveTag(tag);
      } else {
        const f = partners.filter((p) => p.node.tags.includes(tag));
        setFilteredPartners(f);
        setActiveTag(tag);
      }
  }

  return (
      <MarketingLayout>

        <Section>
          <Container width={'720px'}>
              <Heading fontWeight={600} textAlign={'center'} as={'h1'} content={'Our Industry Partners'} />
              <Heading fontWeight={400}  textAlign={'center'}  as={'h3'} content={'We believe that a holiday rental companies growth is strengthened through partnerships and keeping great company with likeminded peers. That is why we have some fantastic partners we collaborate, integrate or share knowledge with on a daily basis.'} />

          </Container>
        </Section>
        <Section>

        <Container>
            <TagFilter>
              <li className={ activeTag === null ?  "active" : null  } onClick={() => handleTagClickEvent(null)} key={'all-partners'}>All Partners</li>
              {tags.map( (tag, index) => (
                  <li className={ activeTag === tag ?  "active" : null  } onClick={() => handleTagClickEvent(tag)} key={index}>{tag}</li>
              ))}
            </TagFilter>
              {filteredPartners &&
                <ListGrid
                  data={filteredPartners}
                  columnWidth={[1, 1 / 2, 1 / 3]} //{[1, 1/2, 1/4]} responsive
                  component={({node}) => (
                      <CardPartner>
                        <Heading fontWeight={400} as={'h2'}  textAlign={'right'}  content={node.name} />
                        { node.slug ? <div /> : <div><PartnerLink rel={"nofollow"} href={node.webAddress} target={"_blank"} >
                          Website
                          <span> </span><FontAwesomeIcon icon={faExternalLinkAlt} />
                        </PartnerLink>
                        </div>}

                        { node.logo && ( node.slug &&
                            <Link to={'partners/' + node.slug }>
                              <ContentfulAsset className={'featureLogo'} data={node.logo}/>
                            </Link> ) ||
                          node.logo && <ContentfulAsset className={'featureLogo'} data={node.logo}/>
                        }



                        <TagList>
                          {node.tags && node.tags.map( (tag, index) => (
                              <li className={ activeTag === tag ?  "active" : null  } onClick={() => handleTagClickEvent(tag)} key={index}>{tag}</li>
                          ))}
                        </TagList>


                        {node.summary && <Summary>{node.summary.summary}</Summary> }
                        {node.heroFeaturette &&
                        <LearnMore><Link to={'partners/' + node.slug}>Learn more</Link></LearnMore>}
                      </CardPartner>
                  )}
                />
              }
           </Container>

        </Section>

        <FaqSection  data={faqGroups} groups={"General,Billing"} active={"General"}  />

      </MarketingLayout>
  );
});

export const query = graphql`
  query PartnersQuery {
    tags: allContentfulPartner {
      distinct(field: tags)
    }
    allContentfulPartner {
      edges {
        node {
          id
          slug
          name
          heroFeaturette {
            id
          }
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