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
import ChannelsWrapper from './style';
import RehypeReact from "rehype-react";
import CodeGroup from '../../../componentsMarkdown/CodeGroup';
import TextLoop from "react-text-loop";
import Lottie from 'react-lottie';
import Card from 'reusecore/src/elements/Card';
import ListGrid from 'reusecore/src/elements/ListGrid';
import IconCheck from '-!babel-loader!svg-react-loader?classIdPrefix=manage!svg/enhancement/check_sm.svg';
import { useStaticQuery, graphql } from 'gatsby';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    TextLoop: TextLoop
  },
}).Compiler;
// Glide js options

const HeroChannelConnections = ({

}) => {

  const Data = useStaticQuery(graphql`
    query {
      airbnb : contentfulAsset(file: {fileName: {glob: "Airbnb_Logo*"}}) {
        id
        file {
          fileName
          url
        }        
      }
      homeaway : contentfulAsset(file: {fileName: {glob: "HomeAway_Logo*"}}) {
        id
        file {
          fileName
          url
        }
      }
      expedia : contentfulAsset(file: {fileName: {glob: "expedia-vector-logo*"}}) {
        id
        file {
          fileName
          url
        }
      }
      hometogo : contentfulAsset(file: {fileName: {eq: "hometogo.svg"}}) {
        id
        file {
          fileName
          url
        }
      }
      booking : contentfulAsset(file: {fileName: {glob: "Booking.com_logo*"}}) {
        id
        file {
          fileName
          url
        }
      }
      
    }
  `);
  console.log("WHATS THIS", Data);
  return (
    <ChannelsWrapper>
      <div className="illustration small-11 medium-11 large-6 align-right text-center">
        <ul>
          <li className="animate box">
            <img
                src={ Data.airbnb.file.url }
                alt="airbnb logo" />
          </li>

          <li className="animate box2">
            <img
                src={ Data.hometogo.file.url }
                alt="hometogo logo" />
          </li>

          <li className="animate box3">
            <img
                src={ Data.homeaway.file.url }
                alt="homeaway logo" />
          </li>

          <li className="animate box4">
            <img
                src={ Data.expedia.file.url }
                alt="expedia logo" />
          </li>

          <li className="animate box5">
            <img
                src={ Data.booking.file.url }
                alt="booking.com logo" />
          </li>

          <li className="animate box6 small">
          </li>

          <li className="animate box7 small">
          </li>

          <li className="animate box8 small">
          </li>

          <li className="animate box9 small">
          </li>

          <li className="animate box10 small">
          </li>

          <li className="animate box11 small">
          </li>
        </ul>
      </div>
    </ChannelsWrapper>
  );
};


export default HeroChannelConnections;
