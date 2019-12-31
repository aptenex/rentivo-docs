import React, {useEffect} from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import ProductBlock from 'common/src/components/ProductBlock';
import Container from 'common/src/components/UI/Container';
import ProductSectionWrapper from './productSection.style';
import Image from 'gatsby-image';

const ProductSection = ({
  data,
  row,
  columnWidth,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle
}) => {

  const getCol = (() => {
    return {
      width: eval(columnWidth),
      borderRight: data.borderlessItems ? null :'1px solid #d2d2d2;',
      borderBottom: data.borderlessItems ? null : '1px solid #d2d2d2;'
    };
  });
  useEffect(() => {
    // Figure out col width...

  });

  return (
    <ProductSectionWrapper className={'product__section'}>
      <Container>
        {data.title &&
          <Box {...sectionHeader}>
            <Text content={data.title} {...sectionSubTitle} />
          </Box>
        }
        <Box className="row-wrapper" {...row}>
          {data.items.map((node, index) => (
            <Box className="col-item" {...getCol()} key={index}>

              <ProductBlock
                contentfulAsset={node.image}
                hasOverlay={data.hasOverlay}
                wrapperStyle={blockWrapperStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                title={<Heading content={node.title} {...featureTitle} />}
                description={
                  node.description && <Text className={'productContent'} content={node.description.description} {...featureDescription} />
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    </ProductSectionWrapper>
  );
};

// ProductSection style props
ProductSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  columnWidth: PropTypes.array,
  columnCount: PropTypes.number,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// ProductSection default style
ProductSection.defaultProps = {
  // section header default style
  columnCount: 3,
  columnWidth: [1, 1 / 2, 1 / 3, 1 / 3],
  sectionHeader: {
    mb: ['40px', '40px', '40px', '80px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '42px',
    fontWeight: '700',
    color: '#01c88b',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
  },
  // feature icon default style
  iconStyle: {
    width: ['70px', '75px', '75px', '84px'],
    height: ['70px', '75px', '75px', '84px'],
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ['32px', '36px'],
    color: '#ffffff',
    overflow: 'hidden',
    mb: ['20px', '20px', '20px', '30px'],
    borderBottomLeftRadius: '50%',
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343d4ccc',
  },
};

export default ProductSection;
