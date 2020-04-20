import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartNetwork, faParachuteBox, faBrowser, faCalendarEdit, faUsersClass  } from '@fortawesome/pro-duotone-svg-icons'
import styled from "styled-components"
export default {
  'manage' : <FontAwesomeIcon icon={faCalendarEdit }/>,
  'channel-management' : <FontAwesomeIcon icon={faChartNetwork}/>,
  'supply'  : <FontAwesomeIcon icon={faParachuteBox}/>,
  'cooperative'  : <FontAwesomeIcon icon={faUsersClass}/>,
  'direct-booking-website' : <FontAwesomeIcon icon={faBrowser}/>
};