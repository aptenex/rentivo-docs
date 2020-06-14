import React, {Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Image from 'gatsby-image';
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
import Row from 'components/Flex/Row'
import Col from 'components/Flex/Col'
import classNames from 'components/Flex/classNames';
import ContentfulAsset from 'containers/Rentivo/ContentfulAsset';
import HubspotForm from 'react-hubspot-form';



import HeroWrapper, {
  LeadingLabel,
  BannerObject,
} from './featuretteSection.style';
import {render} from "../../../utils/renderer";

// Glide js options

const FeaturetteSection = ({
  title,
  backgroundParticles,
  description,
  hero,
  content,
  template,
  oversize : oversizeHero,
  reverse,
  callout,
  leadingLabelHeader,
  leadingLabelText,
  callToAction,
  logo,
  image, // is an array
  backgroundHeroImage,
  leadingLabelHeaderStyle,
  leadingLabelTextStyle,
  outlineBtnStyle,
  btnStyle,
  btnWrapperStyle
}) => {
  // console.log("!@#@!#@!#@!#", image);

  const [zoom, setZoom] = useState( { zoom : null } );

  const CtaHref = styled(HrefLink)`
    &.btn {
      padding-top: 14px;
      padding-bottom: 14px;
      font-weight: bold;
      font-size: 1.1em;
      margin-bottom: 20px;
    }
  `;
  const CtaLink = styled(Link)`
    &.btn {
      padding-top: 14px;
      padding-bottom: 14px;
      font-weight: bold;
      font-size: 1.1em;
      margin-bottom: 20px;
    }
  `;

  const glideOptions = {
    type: 'carousel',
    autoplay: 8000,
    perView: 1,
  };

  useEffect( () => {
    try {
      import('medium-zoom').then(mediumZoom => {
        // setZoom({zoom :  mediumZoom.default('img') });
        mediumZoom.default('.zoomable img', { scrollOffset: 0,
          margin: 40,
          container: {
            top: 204
          },
          background: '#01b47d'});
      })
    } catch (e) {
      console.log("Couldn't execute from ComponentDidMount:", e);
    }

    return () => {
      if(zoom.zoom){
        zoom.zoom.detach();
      }
    }
  });
  //
  //
  //

  const ButtonGroup = () => (
      <Fragment>
        { callToAction && callToAction.to && callToAction.to.length > 0 &&
          <CtaLink className="btn btn-primary outlined" to={callToAction.to} >
            {callToAction.text}
          </CtaLink>
        }
        { callToAction && callToAction.url &&
          <CtaHref target="_blank" className="btn btn-primary" href={callToAction.url} >
            {callToAction.text}
          </CtaHref>
        }
      </Fragment>
  );

  const UnderlayWrapper = styled('div')``;

  // // classNames('flexRow__column__imageOversized__right') +  ' ' + classNames('flexRow__column__imageOversized')
  const HeroImageColumn = (props) => (
      <Fragment>
        {image.length === 1 ? (
                <Fragment>
                  { image.map((node, index) => (
                        <Fragment key={node.id ? node.id : index}>
                          { oversizeHero && node.fluid ? <OversizeImage/> :
                          <ContentfulAsset
                              className={'zoomable'}
                              data={node}
                              fluid={node.fluid}
                              alt="Product"
                          /> }
                        </Fragment>
                  ))}
                </Fragment>

            ) :
            !oversizeHero && <HeroCarousel/>
        }
      </Fragment>
  );
  const OversizeImage = (props) => (
      <Fragment>
        { [image[0] ].map((node, index) => {
          return node.fluid.src ? <Image
            key={index}
            className={classNames(reverse ? 'flexRow__column__imageOversized__left' : 'flexRow__column__imageOversized__right')}
            fluid={node.fluid}
            alt="Product"
          /> : <ContentfulAsset key={node.id} data={node}/>
        } ) }
      </Fragment>
  );

  const DescriptionBlock = ({content}) => {

    console.log('whats', content);


    if(content && content?.childMarkdownRemark.htmlAst){
      return (<Fragment>
        { render(content.childMarkdownRemark.htmlAst) }
      </Fragment>);
    }

    if(content && content?.childMarkdownRemark.component){
      return (content?.childMarkdownRemark?.component);
    }

    if(content && content?.childMarkdownRemark.html){
      return (<div dangerouslySetInnerHTML={ { __html : content.childMarkdownRemark.html }} />);
    }
    return <></>;

  };
  const HeroCarousel = (props) => (

      <BannerObject {...props}>

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
      </BannerObject>
  );

  return (
    <HeroWrapper className={ hero ? 'hero ' : null }>

      <Container>

        <Row top="xs"  reverse={reverse}>
            <Col xs={12} md={12} xl={6} >
              { logo && logo.fluid && logo.fluid.src ? <Image
                  fluid={logo}
                  alt="Product"
              /> : logo && logo.file ? <ContentfulAsset className={'featureLogo'} data={logo}/> : null}

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
                    <DescriptionBlock content={content} />
                  }
                  button={<ButtonGroup />}
              />

              { callout && callout.childMarkdownRemark && (
                  callout.childMarkdownRemark.htmlAst ? <CalloutWrapper data={callout.childMarkdownRemark} /> :
                      callout.childMarkdownRemark.component )
              }

            </Col>
            <Col xs={12} md={12} xl={6}>
              <HeroImageColumn />
            </Col>
        </Row>
      </Container>

    </HeroWrapper>
  );
};

FeaturetteSection.propTypes = {
  title: PropTypes.string,
  btnStyle: PropTypes.object,
  hero: PropTypes.bool,
  description: PropTypes.object,
  image: PropTypes.array,
  contentStyle: PropTypes.object,
  leadingLabelHeader: PropTypes.string,
  leadingLabelText: PropTypes.string,
  leadingLabelHeaderStyle: PropTypes.object,
  leadingLabelTextStyle: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
  btnWrapperStyle: PropTypes.object,
  oversizeHero: PropTypes.bool,
  reverse: PropTypes.bool,
  logo: PropTypes.object
};

FeaturetteSection.defaultProps = {
  oversizeHero :false,
  logo: null,
  hero: false, // determines if this is a hero class...
  reverse: false,
  title: {
    fontSize: ['22px', '34px', '30px', '55px'],
    fontWeight: '400',
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
    fontWeight: 400,
  },
  leadingLabelTextStyle: {
    fontSize: ['13px', '14px'],
    color: '#0f2137',
    mb: 0,
    as: 'span',
    fontWeight: 400,
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

export default FeaturetteSection;
