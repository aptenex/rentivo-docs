import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import Particles from '../Particle';
import { themeGet } from 'styled-system';
import colors from 'common/src/theme/rentivo/colors';
import styled from "styled-components"
import Row from 'components/Flex/Row'
import Col from 'components/Flex/Col'
import BannerWrapper, {
  DiscountLabel,
  BannerObject,
} from './demoSection.style';
import Arrow from 'common/src/assets/image/rentivo/banner/arrow-200-top-right.png';
import BannerObject1 from 'common/src/assets/image/saas/banner/bannerObject1.png';
import DemoForm from '../DemoForm';
import MarcSignatureImage from 'components/Images/MarcSignature';

const SummarySection = styled('section')`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;
  img,svg {
    max-width: 420px;
    width: 420px;
    margin-bottom: 50px;
  }
   
`;

const SummaryContent = styled('div')`
  p {
      font-size: 30px;
      line-height: 2.5rem;
    }
`;

const DemoSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
}) => {

  const ArrowImage = styled(Image)`
    max-width: 130%;
    margin-top: 0px;
    float: right;
    opacity: 0.3;
     @media (max-width:1440px) {
        transform: rotate(90deg) translateY(91px);
        float: none;
        margin: 0 auto;
        opacity: 0.1;
        margin-top: -130px;
    }
  `;

  const HeroImage = styled(Image)`
    width: 130%;
    max-width: 130%;
    margin-top: 80px;
  `;

  const ButtonGroup = () => (
    <Fragment>
      <Button title="FREE DEMO" {...btnStyle} />
      <Button
        className="outlined"
        title="EXPLORE MORE"
        variant="outlined"
        {...outlineBtnStyle}
      />
    </Fragment>
  );

  const OnlineNow = () => (
    <div style={{color:'green'}}>Online now</div>
  );
  return (
    <BannerWrapper id="banner_section">
      <Container>
        <Row top="xs">
          <Col xs={12} md={12} xl={6} >

            <DiscountLabel>
              <Text content="Customer Success" {...discountAmount} />
              <Text content="demo request" {...discountText} />
            </DiscountLabel>



            <FeatureBlock
                title={
                  <Heading
                      content="Let's connect "
                      {...title}
                  />
                }
                description={
                  <Text
                      content="Please let us know how we can help you with your growth objectives. Are you interested in jumping right into a 15 minute call with our customer success team? We can discuss your project and understand how best our products can meet your businesses growth objectives."
                      {...description}
                  />
                }

                />
              <div className={'mt5'}>
              <MarcSignatureImage />
              <OnlineNow />
              </div>
              <ArrowImage src={Arrow} alt="Arrow Pointing to Demo" />
          </Col>

          <Col xl={6}>
            <SummarySection>
              <Container  width={'820px'}>
                <DemoForm/>
              </Container>
            </SummarySection>
          </Col>
        </Row>
      </Container>
    </BannerWrapper>
  );
};

DemoSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

DemoSection.defaultProps = {
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
    width: [1, '70%', '50%', '45%'],
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
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#01c88b',
    ml: '18px',
  },
  discountAmount: {
    fontSize: '14px',
    color: colors.primary,
    mb: 0,
    as: 'span',
    mr: '0.4em',
    fontWeight: 700,
  },
  discountText: {
    fontSize: ['13px', '14px'],
    color: '#0f2137',
    mb: 0,
    as: 'span',
    fontWeight: 500,
  },
};

export default DemoSection;
