import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Row from 'components/Flex/Row'
import Col from 'components/Flex/Col'
import styled from 'styled-components';
const ScheduleForm = styled('div')`
  width: 100%;
  `;
export default class Calendly extends React.Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }

  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }

  render(){
    return (

        <ScheduleForm>
          <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/marc-ribail"
              style={{ minWidth: '100%', width: '100%', height: '880px' }} />
        </ScheduleForm>

    );
  }
}
