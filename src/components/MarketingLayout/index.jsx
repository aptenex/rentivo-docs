import React, { Fragment } from 'react';
import { Link } from "gatsby"
import styled from "styled-components";
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { rentivoTheme } from 'common/src/theme/rentivo';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/Rentivo/rentivo.style';
import Navbar from 'containers/Rentivo/Navbar';
import Footer from 'containers/Rentivo/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import SEO from 'components/seo';
import { useFAQGroupsOnHome } from "containers/Rentivo/FaqSection/hooks/home";
import SubNav from 'components/NavSub';
import Container from "../../common/src/components/UI/Container";
import HeroSection from "../../containers/Rentivo/HeroSection";
import ConditionalWrapper from "../../containers/Rentivo/Contained";
import PropTypes from 'prop-types';

const Article = styled('article')`
  margin-top: 180px;
  @media (max-width: 767px) {
    margin-top: 200px;   
  }
  &.top {
    margin-top: 0px;
    section[class^=heroSection] {
      margin-top: 80px;
    }
  }
  
`

const MarketingLayout = props => {
  const { title, children,subNav, wrapperClass = '', menu = [], articleClass, isMenuSticky, location } = props;
  const [toggleNav, setToggleNav] = React.useState(false);
  let menuClasses = menu.includes('inherit') ? [ ...menu, ...articleClass ] : menu;
  return (
      <ThemeProvider theme={rentivoTheme}>
        <Fragment>
          <SEO title="Enterprise Holiday Rental Software for Short Term Vacation Rental Management" />
          <ResetCSS />
          <GlobalStyle />
          <ContentWrapper className={wrapperClass + (menuClasses.includes('contained') ? ' contained' : '')}>


            <ConditionalWrapper
                condition={menu.includes('contained')}
                wrapper={children => <Container>{children}</Container>}>
              <ConditionalWrapper
                  condition={isMenuSticky}
                  wrapper={children => <Sticky top={0} innerZ={9999}  activeClass="sticky-nav-active">{children}</Sticky>}>
                <DrawerProvider>
                  <Navbar location={location} className={menuClasses.join(" ")} />
                  {subNav && <SubNav className={menuClasses.join(" ")} {...props} />}
                </DrawerProvider>

              </ConditionalWrapper>
            </ConditionalWrapper>
            <Article className={articleClass}>
              {children}
            </Article>

            <Footer />
          </ContentWrapper>
        </Fragment>
      </ThemeProvider>
  )
};
MarketingLayout.propTypes = {
  isMenuSticky: PropTypes.bool,
  menu: PropTypes.array

}
MarketingLayout.defaultProps = {
  isMenuSticky: true,
  menu : []
};

export default MarketingLayout

