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
import CalloutWrapper from 'components/CalloutWrapper';
import Row from 'components/Flex/Row'
import Col from 'components/Flex/Col'
import classNames from 'components/Flex/classNames';
import ContentfulAsset from 'containers/Rentivo/ContentfulAsset';
import HubspotForm from 'react-hubspot-form';
import HeroWrapper from './heroSection.style';
import RehypeReact from "rehype-react";
import CodeGroup from '../../../componentsMarkdown/CodeGroup';
import TextLoop from "react-text-loop";
import Lottie from 'react-lottie';
import Card from 'reusecore/src/elements/Card';
import ListGrid from 'reusecore/src/elements/ListGrid';
import IconCheck from '-!babel-loader!svg-react-loader?classIdPrefix=manage!svg/enhancement/check_sm.svg';


const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    TextLoop: TextLoop
  },
}).Compiler;
// Glide js options


const HeroSection = ({
  title,
  backgroundParticles,
  description,
  hero,
  as,
  textLoopAst,
  tagline,
  content,
  template,
  lottieJson,
  features,
  oversize : oversizeHero,
  reverse,
  callout,
  leadingLabelHeader,
  leadingLabelText,
  primaryCallToAction : callToAction,
  secondaryCallToAction,
  logo,
  image, // is an array
  backgroundHeroImage,
  leadingLabelHeaderStyle,
  leadingLabelTextStyle,
  outlineBtnStyle,
  btnStyle,
  btnWrapperStyle
}) => {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: (lottieJson && lottieJson.file) ? lottieJson.file.url : null,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const CtaHref = styled(HrefLink)`
    &.btn {
      padding-top: 14px;
      padding-bottom: 14px;
      font-weight: bold;
      font-size: 1.1em;
      margin-right: 10px;
    }
  `;
  const CtaLink = styled(Link)`
    &.btn {
      padding-top: 14px;
      padding-bottom: 14px;
      font-weight: bold;
      font-size: 1.1em;
      margin-right: 10px;
    }
  `;

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
       
        { secondaryCallToAction && secondaryCallToAction.to &&
          <CtaLink className="btn btn-secondary outlined" to={secondaryCallToAction.to} >
            {secondaryCallToAction.text}
          </CtaLink>
        }
        { secondaryCallToAction && secondaryCallToAction.url &&
          <CtaHref className="btn btn-secondary" to={secondaryCallToAction.url} >
            {secondaryCallToAction.text}
          </CtaHref>
        }


      </Fragment>
  );
  const CardNumbers = styled(Card)`
    padding: 30px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    text-align: left;
    background: #f2f2f2;
    svg {      
      width: 42px;
      margin-right: 15px;
    }
    h4 {
      font-size: 18px;
    }
  `
  const UnderlayWrapper = styled('div')``;
  const Tagline = styled(Text)``;
  return (
    <HeroWrapper className={ hero ? 'hero ' : null }>

      <Container>

        <Row top="xs" >
            <Col xs={12} >
              <Container  width={'960px'}>
                {/*https://gist.github.com/Kalyse/922cb05b7c9e08e43e39f73538169d77*/}
                <Heading as={as || 'h2'} {...title} >{title}</Heading>
                { textLoopAst && textLoopAst.internal && renderAst( JSON.parse( textLoopAst.internal.content ) ) }
                <Tagline className={'tagline'}>{tagline}</Tagline>
                <ButtonGroup />
              </Container>


            </Col>

          {features && <ListGrid
              data={features}
              columnWidth={[1, 1/2, 1/2,1 / 3]} //{[1, 1/2, 1/4]} responsive
              component={( feature) => (
                  <CardNumbers key={feature.id}>
                    <IconCheck />
                    <div>
                      <Heading fontWeight={600} as={'h4'}  textAlign={'left'}  content={feature.title} />
                      <Text>{feature.description && feature.description.description}</Text>
                    </div>
                  </CardNumbers>
              )}
          /> }

          { lottieJson && <Lottie options={defaultOptions}
                    height={400}
                    width={400}
            /> }


        </Row>
      </Container>

    </HeroWrapper>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string,
  as : PropTypes.string,
  tagline : PropTypes.string,
  btnStyle: PropTypes.object,
  hero: PropTypes.bool,
  description: PropTypes.object,
  image: PropTypes.array,
  features: PropTypes.array,
  contentStyle: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
  btnWrapperStyle: PropTypes.object,
};

HeroSection.defaultProps = {
  hero: false, // determines if this is a hero class...
  reverse: false,
  as: 'h2',
  title: {
    fontSize: ['22px', '34px', '30px', '635px'],
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
