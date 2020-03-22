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
import BannerWrapper, {
  DiscountLabel,
  BannerObject,
} from './bannerSection.style';

import BannerObject1 from 'common/src/assets/image/saas/banner/bannerObject1.png';
import BannerHeroImage from 'common/src/assets/image/rentivo/banner/software_bg.png';
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
  intl
}) => {


  const HeroImage = styled(Image)`
    width: 130%;
    max-width: 130%;
    margin-top: 10px;
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
  return (
    <BannerWrapper id="banner_section">
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <DiscountLabel>
              <Text content="Easy Onboarding" {...discountAmount} />
              <Text content="and free demo" {...discountText} />
            </DiscountLabel>
            <FeatureBlock
              title={
                <Heading
                  content={intl.formatMessage({id: "index_landing_hero_title"})}
                  {...title}
                />
              }
              description={
                <Text
                  content="We provide an end-to-end software solution which simplifies every aspect of managing a holiday rental business. Get more bookings, with less work and expand your marketing reach with our one click channel distribution."
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
      <BannerObject>
        <div className="objectWrapper">
          <Image src={BannerObject1} alt="BannerObject1" />
          <div className="dashboardWrapper">
            <HeroImage src={BannerHeroImage} alt="BannerHeroImage" />
          </div>
        </div>
      </BannerObject>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
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

export default injectIntl(BannerSection);
