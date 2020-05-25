import React, {Fragment, useState} from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Container from 'common/src/components/UI/Container';
import sortBy from "lodash/sortBy"
import Link from 'gatsby-link';
import _ from 'lodash';
import truncate from 'truncate';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/src/components/Accordion';
import { render, renderPlaintext } from '../../../utils/renderer';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import UndrawJourney from '-!babel-loader!svg-react-loader?classIdPrefix=manage!img/svg/undraw/undraw_navigator_a479.svg';
import AssociatedPagesWrapper from './style';
import BlobC from '-!babel-loader!svg-react-loader?classIdPrefix=manage!img/svg/blob/blob_carol.svg';
import { BlobWrapperA, BlobWrapperB,BlobWrapperC } from '../rentivo.style';
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faHandHeart, faExternalLinkAlt, faParachuteBox} from '@fortawesome/pro-duotone-svg-icons'
import { getFullPath } from '../../../constants/pageSlugPrefixes';
import PageTypeLabel from '../../../containers/Rentivo/PageTypeLabel';
const PageAccordion = styled(Accordion)`
    width: 100%;
    > div {
      width: 100%;
    }
  `;


const ContainerR = styled(Container)`
position: relative;
z-index: 2;
`

const Card = styled(Box)`
  background: white;
   border: 1px solid #eee;
  padding: 20px 40px;
  border-radius: 4px;
  box-shadow: 0 18px 16px -15px rgba(0,0,0,0.1);
`

const AssociatedPages = ({
  pages,
  sectionHeader,
  sectionTitle,
  sectionTitleWrapper,    
  sectionSubTitle,
  titleStyle,
  descriptionStyle,
  buttonWrapper,
  button,
}) => {
  console.log("THE PAGES", pages);
  const TOC = (json) => {

    const headers = _.filter(  _.flatten(json?.content), item => /^heading/.test(item?.nodeType)  );
    const H = _.map(headers, (item,index) => {
      return <Heading key={index} as={'h5'}>{item.content[0].value}</Heading>;
    });
    return <Fragment>{ H }</Fragment>;
  };

  return (
    <AssociatedPagesWrapper id="associated_pages_section">
      <BlobWrapperA>
        <BlobC />
      </BlobWrapperA>
      <ContainerR>

        <Box {...sectionHeader}>

          <Text {...sectionSubTitle} />
          <Text {...sectionTitle} />
          <PageAccordion>
            <Fragment>
            { _.uniq(pages).map((page, index) => (
              <AccordionItem expanded={true} key={index}>
                <Fragment>
                  <AccordionTitle>
                    <Fragment>
                      <Link to={getFullPath( page )}>
                        <Heading {...titleStyle}>

                          <PageTypeLabel type={page.type} />
                          <FontAwesomeIcon icon={faExternalLinkAlt}/>
                          {page.name}
                        </Heading>
                      </Link>
                      {( page.type === 'How To' || page.type === 'Knowledge Base') &&
                        <IconWrapper>

                          <OpenIcon>
                            <Icon icon={minus} size={18}/>
                          </OpenIcon>
                          <CloseIcon>
                            <Icon icon={plus} size={18}/>
                          </CloseIcon>

                        </IconWrapper>
                      }

                    </Fragment>
                  </AccordionTitle>
                  <AccordionBody>
                    <Fragment>

                      <Card>
                        <Text fontSize={'1.2em;'}>Table of Contents</Text>
                        { TOC(page?.body?.json)}


                          { page?.summary?.childMarkdownRemark ?  renderPlaintext(page?.summary.childMarkdownRemark.htmlAst) :
                            page?.body && truncate( renderPlaintext(page?.body?.json), 320)
                          }


                        <Link to={getFullPath( page )}>
                            <FontAwesomeIcon icon={faExternalLinkAlt}/>
                            &nbsp;&nbsp; Read full page

                        </Link>
                      </Card>
                    </Fragment>
                  </AccordionBody>
                </Fragment>
              </AccordionItem>
            ))}
            </Fragment>
          </PageAccordion>

        </Box>
      </ContainerR>


    </AssociatedPagesWrapper>
  );
};

// AssociatedPages style props
AssociatedPages.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  sectionTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  nameStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  listContentStyle: PropTypes.object,
};

// AssociatedPages default style
AssociatedPages.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // sub section default style
  sectionSubTitle: {
    content: 'Associated Guides and How To Instructionals',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#01c88b',
    mb: '5px',
  },
  // section title default style
  sectionTitle: {
    content: 'We are here to help, maybe one of these pages will help',
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // accordion title default style
  titleStyle: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  sectionTitleWrapper: {
    mb: ['50px', '75px'],
  },
  sectionText: {
    content: 'PRICING PLAN',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#01c88b',
    mb: '10px',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: '15px',
    pl: '15px',
  },
  nameStyle: {
    fontSize: ['20px', '20px', '22px', '22px', '22px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '12px',
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primary',
    width: '222px',
    maxWidth: '100%',
  },
  buttonFillStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primaryWithBg',
    width: '200px',
    maxWidth: '100%',
  },
  listContentStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    mb: '0',
  },
  // accordion description default style
  descriptionStyle: {
    fontSize: '15px',
    color: '#5d646d',
    lineHeight: '1.75',
    mb: '0',
    fontWeight: '400',
  }
};

export default AssociatedPages;
