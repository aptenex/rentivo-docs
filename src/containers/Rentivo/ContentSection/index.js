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
  Wrapper
} from './style';

const ContentSection = ({
 children
}) => {

  return (<Wrapper>
      {children}
    </Wrapper>
  );
};

export default injectIntl(ContentSection);
