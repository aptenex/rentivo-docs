import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Container from 'common/src/components/UI/Container';
import styled from 'styled-components';
import TestimonialSectionWrapper, {
  TextWrapper,
  ImageWrapper,
  RoundWrapper,
  ClientName,
} from './testimonialSection.style';

const Item = styled('div')`
  display: flex;
  > * {
    margin-right: 20px;
  }
`

const TestimonialItem = ({
  sectionSubTitle,
  btnWrapperStyle,
  commentStyle,
  nameStyle,
  btnStyle,
  designationStyle,
  node
}) => {


  return (
    <TestimonialSectionWrapper id="testimonial_section">
      <Container>
        <Text content="What they said" {...sectionSubTitle} />
        <Item>
          <TextWrapper>
            <i className="flaticon-quotes" />
            <Text content={node.comment.childMarkdownRemark.rawMarkdownBody} {...commentStyle} />
            <Item>
              <ImageWrapper>
                <RoundWrapper>
                  <Image
                      fluid={node.avatar.fluid}
                      alt="Client Image"
                  />
                </RoundWrapper>
              </ImageWrapper>
              <ClientName>
                <Heading content={node.name} {...nameStyle} />
                <Heading
                    content={node.role}
                    {...designationStyle}
                />
              </ClientName>
            </Item>

          </TextWrapper>
        </Item>

      </Container>
    </TestimonialSectionWrapper>
  );
};

// TestimonialSection style props
TestimonialItem.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  btnStyle: PropTypes.object,
  btnWrapperStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  commentStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  node : PropTypes.object
};

// TestimonialSection default style
TestimonialItem.defaultProps = {
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#01c88b',
    mb: '20px',
    ml: 'auto',
    mr: 'auto',
    pl: '12px',
    maxWidth: '954px',
  },
  // client comment style
  commentStyle: {
    color: '#0f2137',
    fontWeight: '400',
    fontSize: ['22px', '22px', '22px', '30px'],
    lineHeight: '1.72',
    mb: '47px',
  },
  // client name style
  nameStyle: {
    as: 'h3',
    color: '#343d48',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '30px',
    mb: 0,
  },
  // client designation style
  designationStyle: {
    as: 'h5',
    color: 'rgba(52, 61, 72, 0.8)',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '30px',
    mb: 0,
    ml: ['0', '10px'],
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

export default TestimonialItem;
