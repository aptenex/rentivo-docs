import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { getFullPath } from '../../../../constants/pageSlugPrefixes';
import ProductBlockWrapper, {
  IconWrapper,
  ContentWrapper,
  ButtonWrapper,
  OverlayWrapper
} from './productBlock.style';
import Block from '../../../../containers/Rentivo/Icons/Block';
import Img from 'gatsby-image';
import ContentfulAsset from '../../../../containers/Rentivo/ContentfulAsset';
import {ConditionalElseWrapper} from "../../../../containers/Rentivo/Contained";
import Container from "../UI/Container";
import Sticky from "react-stickynode";

const ProductBlock = ({
  className,
  icon,
  svg,
  contentfulAsset,
  title,
  button,
  slug,
  linkToPage,
  hasOverlay,
  description,
  iconPosition,
  additionalContent,
  wrapperStyle,
  iconStyle,
  contentStyle,
  btnWrapperStyle,
  ...props
}) => {
  console.log("asdasd", linkToPage);
  // Add all classs to an array
  const addAllClasses = ['product__block'];
  if(hasOverlay && description){
    addAllClasses.push(`hasOverlay`);
  }
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
    >


      <ConditionalElseWrapper
          condition={linkToPage}
          wrapper={children => <Link to={getFullPath(linkToPage)}>{children}</Link>}
          elseWrapper={children => <a href={slug}>{children}</a>} >

          {contentfulAsset && <ContentfulAsset data={contentfulAsset}/> }
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
                {hasOverlay && description &&
                <OverlayWrapper className={'overlayContentWrapper'}  {...contentStyle}>
                  {title}
                  {description}
                </OverlayWrapper>
                }
                {additionalContent}
              </Fragment>
          ) : ( '' )}

      </ConditionalElseWrapper>



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

  hasOverlay: PropTypes.bool,

  /** if provided, we would use this to link to a page instead of slug */
  linkToPage: PropTypes.object,
};

ProductBlock.defaultProps = {
  iconPosition: 'top',
  hasOverlay : true
};

export default ProductBlock;
