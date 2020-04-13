import React, {Fragment} from 'react';
import NavMain from '../NavMain';
import StatusPage from '../StatusPage';
import Footer from '../Footer';
import withUser from '../withUser';
import SubNav from '../NavSub';
import '../../scss/style-guide.scss';
import Navbar from 'containers/Rentivo/Navbar';
import Sticky from "react-stickynode";
import {DrawerProvider} from 'common/src/contexts/DrawerContext';
import ConditionalWrapper from "../../containers/Rentivo/Contained";
import {rentivoTheme} from 'common/src/theme/rentivo';
import {ResetCSS} from 'common/src/assets/css/style';
import {GlobalStyle, ContentWrapper} from 'containers/Rentivo/rentivo.style';
import {ThemeProvider} from "styled-components";

function MainLayout(props) {
  const {
    children,
    location,
    subNav,
  } = props;

  const pathClass = location.pathname.replace(/\/docs\\|\//g, '');
  const classNames = `docSearch-content docs-wrap ${pathClass}`;
  const renderFooter = location.pathname.indexOf('/api-reference') === -1 ? <Footer/> : null;
  console.log("LAYOUY", location)
  return (
      <ThemeProvider theme={rentivoTheme}>
        <Fragment>
          <ResetCSS/>
          <GlobalStyle/>
          <ContentWrapper className={classNames}>

            <StatusPage/>


            <div className={subNav ? 'nav-wrap has-sub-nav' : 'nav-wrap'}>
              <DrawerProvider>
                <Navbar location={location} />
              </DrawerProvider>

              {subNav && <SubNav {...props} />}
            </div>
            <div className="layout-content">
              {children}
            </div>
            {renderFooter}
          </ContentWrapper>
        </Fragment>
      </ThemeProvider>
  );
}

export default withUser(MainLayout);
