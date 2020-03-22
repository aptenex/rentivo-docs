import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLink} from '@fortawesome/pro-duotone-svg-icons'
import { AnchorLink } from "gatsby-plugin-anchor-links";


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
} from './caseStudy.style';

const CaseStudySection = ({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  reviewTitle,
  review,
  name,
  designation,
  caseStudies
}) => {

  const carouselOptions = {
    type: 'slider',
    autoplay: 0,
    perView: 1,
    gap: 30,
    animationDuration: 800,
    breakpoints: {
      2870: {
        perView: 3,
      },
      990: {
        perView: 2,
      },
    },
  };

  return (
    <>  { caseStudies &&
    <Box {...sectionWrapper} as="section" id="case_study_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="Case Studies from our Customers" />
          <AnchorLink to={"/direct-booking-website#case_study_section"}>
            <FontAwesomeIcon style={{ display: 'inline-block', float: 'right' }} icon={faLink} />
          </AnchorLink>
          <Heading {...secHeading} content="How Rentivo has delivered real solutions to our customers" />
        </Box>
        <CaseStudySlideWrapper>
          <GlideCarousel
              options={carouselOptions}
              carouselSelector="case_study__slider"
              controls={false}
              bullets={true}
              numberOfBullets={caseStudies.length}
          >
            <>
              {caseStudies.map((study, index) => (
                  <GlideSlide key={`case-study-slide-${index}`}>
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

                        <Heading as="h3" content={study.title} {...reviewTitle} />
                        <Text content={study.summary} {...review} />
                        <CaseStudyMeta>
                           <Link to={"/customers/" + study.slug}>Read Case Study</Link>
                        </CaseStudyMeta>
                      </CaseStudyBody>
                    </CaseStudyItem>
                  </GlideSlide>
              ))}
            </>
          </GlideCarousel>
        </CaseStudySlideWrapper>
      </Container>
    </Box> }
    </>
  );
};

CaseStudySection.propTypes = {
  sectionHeader: PropTypes.object,
  caseStudies: PropTypes.array
};

CaseStudySection.defaultProps = {
  sectionWrapper: {
    // pt: ['60px', '80px', '90px', '100px', '100px'],
    // pb: ['60px', '80px', '90px', '100px', '100px'],
  },
  secTitleWrapper: {
    mb: ['40px', '60px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
  reviewTitle: {
    fontSize: ['15px', '18px'],
    fontWeight: '700',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '13px',
  },
  review: {
    fontSize: ['16px', '16px'],
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.7',
    mb: 0,
  },
  name: {
    fontSize: ['14px', '16px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '8px',
  },
  designation: {
    fontSize: ['12px', '14px'],
    color: '#6f7a87',
    mb: 0,
  },
};

export default injectIntl(CaseStudySection);
