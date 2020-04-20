import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import HrefLink from 'reusecore/src/elements/Link';
import Link from 'gatsby-link';
import Container from 'common/src/components/UI/Container';
import styled from "styled-components"
import {base, themed} from 'reusecore/src/elements/base';
import Row from 'components/Flex/Row'
import Col from 'components/Flex/Col'
import HeroWrapper from './heroSection.style';
import RehypeReact from "rehype-react";
import TextLoop from "react-text-loop";
import Lottie from 'react-lottie';
import Card from 'reusecore/src/elements/Card';
import ListGrid from 'reusecore/src/elements/ListGrid';
import IconCheck from '-!babel-loader!svg-react-loader?classIdPrefix=manage!svg/enhancement/check_sm.svg';
import {getColWidth} from "../../../constants/uiWidths";
import HeroChannelConnections from "../HeroChannelConnections";
import renderAst from "../../../utils/renderer";


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

const ButtonGroup = (props) => (
    <Fragment>
      { props.callToAction && props.callToAction.to &&
      <CtaLink className="btn btn-primary outlined" to={props.callToAction.to} >
        {props.callToAction.text}
      </CtaLink>
      }
      { props.callToAction && props.callToAction.url &&
      <CtaHref className="btn btn-primary" to={props.callToAction.url} >
        {props.callToAction.text}
      </CtaHref>
      }

      { props.secondaryCallToAction && props.secondaryCallToAction.to &&
      <CtaLink className="btn btn-secondary outlined" to={props.secondaryCallToAction.to} >
        {props.secondaryCallToAction.text}
      </CtaLink>
      }
      { props.secondaryCallToAction && props.secondaryCallToAction.url &&
      <CtaHref className="btn btn-secondary" to={props.secondaryCallToAction.url} >
        {props.secondaryCallToAction.text}
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
    color: themed('Rentivo.coilor');
    background: #f2f2f2;
    svg {      
      width: 42px;
      margin-right: 15px;
      margin-top: 14px;
    }
    h4 {
      font-size: 18px;
      line-height: 30px;
    }
  `
const UnderlayWrapper = styled('div')``;
const Tagline = styled(Text)``;
const Components = {
  HeroChannelConnections  : HeroChannelConnections
};

const HeroSection = ({
  title,
  backgroundParticles,
  description,
  hero,
  bodyClasses,
  component,
  className,
  as,
  columnWidths,
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
  forceHeroPrimaryBg,
  logo,
  backgroundHeroImage,
  leadingLabelHeaderStyle,
  leadingLabelTextStyle,
  outlineBtnStyle,
  btnStyle,
  btnWrapperStyle
}) => {

  const CustomComponent = Components[component];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: (lottieJson && lottieJson.file) ? lottieJson.file.url : null,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const addAllClasses = hero ? ['hero'] : [];
  if (className) {
    addAllClasses.push(className);
  }
  if(forceHeroPrimaryBg){
    addAllClasses.push('forcePrimaryBg');
  }

  return (
      <HeroWrapper className={addAllClasses.join(' ')}>
        <div className="contained-bg">
          <div className="bg-settings bg-1" />
          <div className="bg-settings bg-2" />
          <div className="bg-settings bg-3" />
        </div>
        <Container>

          <Row middle="xs">
            <Col {...getColWidth(columnWidths, 0)}>
              <Container width={'960px'}>
                {/*https://gist.github.com/Kalyse/922cb05b7c9e08e43e39f73538169d77*/}
                <Heading as={as || 'h2'} {...title} >{title}</Heading>
                {textLoopAst && textLoopAst.internal && renderAst(JSON.parse(textLoopAst.internal.content))}
                <Tagline className={'tagline'}>{tagline}</Tagline>
                <ButtonGroup callToAction={callToAction} secondaryCallToAction={secondaryCallToAction}/>
              </Container>

            </Col>
            <Col  {...getColWidth(columnWidths, 0)} >

              {features && <ListGrid
                  data={features}
                  columnWidth={[1, 1 / 2, 1 / 2, 1 / 3]} //{[1, 1/2, 1/4]} responsive
                  component={(feature) => (
                      <CardNumbers content={feature.title} key={feature.id}>
                        <IconCheck/>
                        <div>
                          <Heading fontWeight={600} as={'h4'} textAlign={'left'} content={feature.title}/>
                          <Text>{feature.description && feature.description.description}</Text>
                        </div>
                      </CardNumbers>
                  )}
              />}

              { CustomComponent && <CustomComponent /> }

              {lottieJson && <Lottie options={defaultOptions}
                                     height={400}
                                     width={400}
              />}
            </Col>


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
    fontSize: ['22px', '34px', '30px', '35px'],
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
