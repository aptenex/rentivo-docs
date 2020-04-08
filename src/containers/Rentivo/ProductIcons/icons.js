import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartNetwork, faParachuteBox, faBrowser, faCalendarEdit  } from '@fortawesome/pro-duotone-svg-icons'
import styled from "styled-components"
export default {
  'manage' : <FontAwesomeIcon icon={faCalendarEdit }/>,
  'channel-management' : <FontAwesomeIcon icon={faChartNetwork}/>,
  'supply'  : <FontAwesomeIcon icon={faParachuteBox}/>,
  'direct-booking-website' : <FontAwesomeIcon icon={faBrowser}/>
};