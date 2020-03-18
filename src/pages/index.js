import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { rentivoTheme } from 'common/src/theme/rentivo';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Rentivo/rentivo.style';
import Navbar from '../containers/Rentivo/Navbar';
import BannerSection from '../containers/Rentivo/BannerSection';
import FeatureSection from '../containers/Rentivo/FeatureSection';
import ProductSection from '../containers/Rentivo/ProductSection';
import VisitorSection from '../containers/Rentivo/VisitorSection';
import ServiceSection from '../containers/Rentivo/ServiceSection';
import FaqSection from '../containers/Rentivo/FaqSection';
import Footer from '../containers/Rentivo/Footer';
import PricingSection from '../containers/Rentivo/PricingSection';
import TrialSection from '../containers/Rentivo/TrialSection';
import TimelineSection from '../containers/Rentivo/TimelineSection';
import TestimonialCards from '../containers/Rentivo/TestimonialCards';
import TestimonialSection from '../containers/Rentivo/TestimonialSection';
import PartnerSection from '../containers/Rentivo/PartnerSection';
import IntegrationFlipchart from '../containers/Rentivo/IntegrationFlipchart';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import SEO from '../components/seo';
import { useProductHome } from "../containers/Rentivo/ProductSection/hooks/home";
import { useFAQGroupsOnHome } from "../containers/Rentivo/FaqSection/hooks/home";
import { getMenuProducts} from '../containers/Rentivo/DesktopNav/DropdownContents/hooks/home';
import MarketingLayout from "../components/MarketingLayout";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

export default injectIntl( (props) => {
  const menuProducts = getMenuProducts();
  const productCategory = useProductHome();
  const faqGroups = useFAQGroupsOnHome();
  return (
      <MarketingLayout>
            <BannerSection />

            <ProductSection data={productCategory}  />
            <VisitorSection />
            {/*<ServiceSection />*/}

            {/*<PricingSection />*/}
            <TestimonialCards />
            {/*<TestimonialSection />*/}
            {/*<PartnerSection />*/}
            {/*<TimelineSection />*/}

            <FaqSection  data={faqGroups} groups={"General,Billing"} active={"General"}  />
            {/*<TrialSection />*/}
            <IntegrationFlipchart />
      </MarketingLayout>
  );
});
