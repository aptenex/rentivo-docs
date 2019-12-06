import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Img from 'gatsby-image';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import HrefLink from 'reusecore/src/elements/Link';
import Link from 'gatsby-link';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import Particles from '../Particle';
import {fontFamily, fontWeight, letterSpacing, lineHeight, textAlign, themeGet} from 'styled-system';
import colors from 'common/src/theme/rentivo/colors';
import styled from "styled-components"
import { base, themed } from 'reusecore/src/elements/base';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import CalloutWrapper from 'components/CalloutWrapper';

import BannerWrapper, {
  LeadingLabel,
  BannerObject,
} from './heroSection.style';

// Glide js options

const HeroSection = ({
  row,
  col,
  title,
  backgroundParticles,
  description,
  content,
  template,
  callout : { childMarkdownRemark : { ...callout } },
  leadingLabelHeader,
  leadingLabelText,
  callToAction,
  image, // is an array
  backgroundHeroImage,
  leadingLabelHeaderStyle,
  leadingLabelTextStyle,
  outlineBtnStyle,
  btnStyle,
  btnWrapperStyle
}) => {


  const Image = styled(Img)(
      {


      },
      base,
      themed('Image')
  );

  const CtaHref = styled(HrefLink)`
    &.btn {
      padding-top: 14px;
      padding-bottom: 14px;
      font-weight: bold;
      font-size: 1.1em;
    }
  `;
  const CtaLink = styled(Link)`
    &.btn {
      padding-top: 14px;
      padding-bottom: 14px;
      font-weight: bold;
      font-size: 1.1em;
    }
  `;

  const glideOptions = {
    type: 'carousel',
    autoplay: 8000,
    perView: 1,
  };

  const TEMPLATE = {
    CONTENT_IMAGE : '[Content 1/2, Image 1/2]',
    IMAGE_CONTENT : '[Image 1/2, Content 1/2]',
    HERO_C1_I1 : '[Content 1/2] [Image 1/2] (Hero)',
  };
  //
  //
  //
  const ButtonGroup = () => (
    <Fragment>
      { callToAction && callToAction.to &&
        <CtaLink className="btn btn-primary outlined" to={callToAction.to} >
          {callToAction.text}
        </CtaLink>
      }
      { callToAction && callToAction.url &&
        <CtaHref className="btn btn-primary" to={callToAction.url} >
          {callToAction.text}
        </CtaHref>
      }
    </Fragment>
  );
  console.log("3124213123123123",callout);
  const UnderlayWrapper = styled('div')``;

  const HeroImageColumn = (props) => (
        <BannerObject {...props}>

            <UnderlayWrapper className='underlay-wrapper'>
              { backgroundHeroImage && <Image className={'image-underlay'} {...backgroundHeroImage} /> }
            </UnderlayWrapper>
            <div className="heroImageCarouselWrapper">
              <GlideCarousel
                  options={glideOptions}
                  buttonWrapperStyle={btnWrapperStyle}
                  nextButton={
                    <Button
                        icon={<i className="flaticon-next" />}
                        variant="textButton"
                        aria-label="next"
                        {...btnStyle}
                    />
                  }
                  prevButton={
                    <Button
                        icon={<i className="flaticon-left-arrow" />}
                        variant="textButton"
                        aria-label="prev"
                        {...btnStyle}
                    />
                  }
              >
                <Fragment>
                  {image.map((node, index) => (
                      <GlideSlide key={node.id}>
                        <Fragment>
                          <Image
                              fluid={node.fluid}
                              alt="Product"
                          />
                        </Fragment>
                      </GlideSlide>
                  ))}
                </Fragment>
              </GlideCarousel>


            </div>
        </BannerObject>
  );

  return (
    <BannerWrapper>

      { backgroundParticles == 'Default' ? <Particles /> : null }

      <Container>
        <Box className={"row-wrapper " + ( template === TEMPLATE.IMAGE_CONTENT ? 'template_image_content' : '')} {...row}>
          { template === TEMPLATE.IMAGE_CONTENT && <HeroImageColumn /> }
          <Box className="col-wrapper" {...col} >
            { leadingLabelHeader &&
              <LeadingLabel>
                <Text content={leadingLabelHeader} {...leadingLabelHeaderStyle} />
                { leadingLabelText && <Text content={leadingLabelText} {...leadingLabelTextStyle} /> }
              </LeadingLabel>
            }
            <FeatureBlock
              title={
                <Heading content={title} />
              }
              description={
                <Text {...description} dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }} />
              }
              button={<ButtonGroup />}
            />

            <CalloutWrapper data={callout} />



          </Box>
          { template === TEMPLATE.CONTENT_IMAGE && <HeroImageColumn /> }
        </Box>




      </Container>

      { (template === TEMPLATE.HERO_C1_I1 || !template) && <HeroImageColumn className={'heroImage'} /> }


    </BannerWrapper>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  image: PropTypes.array,
  contentStyle: PropTypes.object,
  leadingLabelHeader: PropTypes.string,
  leadingLabelText: PropTypes.string,
  leadingLabelHeaderStyle: PropTypes.object,
  leadingLabelTextStyle: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
  btnWrapperStyle: PropTypes.object,
};

HeroSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '100%', '100%', '45%'],
  },
  title: {
    fontSize: ['22px', '34px', '30px', '55px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0',
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#01c88b',
    ml: '18px',
  },
  leadingLabelHeaderStyle: {
    fontSize: '14px',
    color: colors.primary,
    mb: 0,
    as: 'span',
    mr: '0.4em',
    fontWeight: 700,
  },
  leadingLabelTextStyle: {
    fontSize: ['13px', '14px'],
    color: '#0f2137',
    mb: 0,
    as: 'span',
    fontWeight: 500,
  },
  // glide slider nav controls style
  btnWrapperStyle: {
    position: 'absolute',
    bottom: '62px',
    left: '12px',
  },
  // next / prev btn style
  btnStyle: {
    minWidth: 'auto',
    minHeight: 'auto',
    mr: '13px',
    fontSize: '16px',
    color: '#343d484d',
  },
};

export default HeroSection;