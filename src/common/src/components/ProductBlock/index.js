import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProductBlockWrapper, {
  IconWrapper,
  ContentWrapper,
  ButtonWrapper,
  OverlayWrapper
} from './productBlock.style';
import Block from '../../../../containers/Rentivo/Icons/Block';
import Img from 'gatsby-image';
import ContentfulAsset from '../../../../containers/Rentivo/ContentfulAsset';

const ProductBlock = ({
  className,
  icon,
  svg,
  contentfulAsset,
  title,
  button,
  description,
  iconPosition,
  additionalContent,
  wrapperStyle,
  iconStyle,
  contentStyle,
  btnWrapperStyle,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['product__block'];

  // Add icon position class
  if (iconPosition) {
    addAllClasses.push(`icon_${iconPosition}`);
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ProductBlockWrapper
      className={addAllClasses.join(' ')}
      {...wrapperStyle}
      {...props}
      href={'#'}
    >
      <ContentfulAsset data={contentfulAsset}/>


      {title || description || button ? (
        <Fragment>
          <ContentWrapper className="content__wrapper" {...contentStyle}>
            {title}
            {button && (
              <ButtonWrapper className="button__wrapper" {...btnWrapperStyle}>
                {button}
              </ButtonWrapper>
            )}
          </ContentWrapper>
          <OverlayWrapper className={'overlayContentWrapper'}  {...contentStyle}>
            {title}
            {description}
          </OverlayWrapper>
          {additionalContent}
        </Fragment>
      ) : (
        ''
      )}
    </ProductBlockWrapper>
  );
};

ProductBlock.propTypes = {
  /** ClassName of the ProductBlock */
  className: PropTypes.string,

  /** title prop contain a react component. You can use our Heading component from reusecore */
  title: PropTypes.element,

  /** description prop contain a react component. You can use our Text component from reusecore */
  description: PropTypes.element,

  /** button prop contain a react component. You can use our Button component from reusecore */
  button: PropTypes.element,

  /** Set icon position of the ProductBlock */
  iconPosition: PropTypes.oneOf(['top', 'left', 'right']),

  /** wrapperStyle prop contain these style system props:  display, flexWrap, width, height, alignItems,
   * justifyContent, position, overflow, space, color, borders, borderColor, boxShadow and borderRadius. */
  wrapperStyle: PropTypes.object,

  /** iconStyle prop contain these style system props: display, width, height, alignItems, justifyContent,
   * position, space, fontSize, color, borders, overflow, borderColor, boxShadow and borderRadius. */
  iconStyle: PropTypes.object,

  /** contentStyle prop contain these style system props: width, textAlign and space. */
  contentStyle: PropTypes.object,

  /** btnWrapperStyle prop contain these style system props: display, space, alignItems,
   * flexDirection and justifyContent. */
  btnWrapperStyle: PropTypes.object,
};

ProductBlock.defaultProps = {
  iconPosition: 'top',
};

export default ProductBlock;
