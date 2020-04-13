import React, { Fragment } from 'react';
import { rentivoTheme } from 'common/src/theme/rentivo';
import { ResetCSS } from 'common/src/assets/css/style';
import SupportSection from '../../containers/Rentivo/SupportSection/index';
import Layout from "../../components/DocsLayout/index";
import Container from "../../common/src/components/UI/Container";
import Heading from "../../reusecore/src/elements/Heading";
import {ErxesEmbed} from "../../containers/Rentivo/ErxesEmbed";
import {FORM_SUPPORT_ACCOUNT, FORM_SUPPORT_GENERAL} from '../../constants/erxesForms';
export default (props) => {

  return (
      <Layout location={location} subNav={true}>
        <Container width={'720px'}>
          <Heading fontWeight={600} textAlign={'center'} as={'h1'} content={'Support - Account Setup'} />
          <Heading fontWeight={400}  textAlign={'center'}  as={'h3'} content={'We love solving support tickets in a single email. Where possible, please include as much information as your fingers will type. .'} />
          <ErxesEmbed embed={FORM_SUPPORT_ACCOUNT}  />
        </Container>
      </Layout>
  );
};
