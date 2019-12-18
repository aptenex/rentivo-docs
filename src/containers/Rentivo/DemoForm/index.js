import React, {Component, Fragment} from 'react'
// import * as Icons from './index'

import styled from "styled-components"
import HubspotForm from "react-hubspot-form";
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';

class Main extends Component {

  componentDidMount(){

  }

  render() {
    return <Fragment>
          <Heading content={"Request More Information"}></Heading>
            <HubspotForm
            portalId='6851922'
            formId="5b6cf631-afa4-4e30-be1f-ff950612d604"
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
          />
    </Fragment>
  }
}

export default Main