import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {
  Heading,
  HeadingLink,
  LinkList,
  DropdownSection,
  Icon
} from "./Components"
// import IconTogether from  '-!babel-loader!svg-react-loader?classIdPrefix=dmo!svg/doodles/rockets_people_person_avatar.svg';

const CompanyDropdownEl = styled.div`
  width: 50rem;
  display: flex; 
`


const Col = styled.div`
 flex-grow: 1;
`

// const IconRocket = styled(IconTogether)`
//   height: 180px;
//   float:right;
//   margin-top: -30px;
// `;

const WhyCallout = styled(Col)`
  background: #f2f2f2;
  margin: -40px -40px -40px 20px;
  padding: 40px 0px 20px 40px;
  position: relative;
  flex-grow: 1;
  min-width: 20rem;  
  

`
const CalloutText = styled('p')`
  
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;
  letter-spacing: 1px;
`
const CalloutHeader = styled(CalloutText)`
  font-size: 24px;  
`
const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 40px;
  }
 
`



const CompanyDropdown = () => {
  return (
    <CompanyDropdownEl>
      <Col>
        <DropdownSection data-first-dropdown-section>
          <ul>
            <HeadingLink>
              <Link to="/about">
                <Icon /> About Rentivo
              </Link>
            </HeadingLink>
            <HeadingLink>
              <Link to="/partners">
                <Icon /> Our Partners
              </Link>
            </HeadingLink>
            <HeadingLink>
              <Link to="/integrations">
                <Icon /> Our Integrations
              </Link>
            </HeadingLink>
            <HeadingLink>
              <a href="/">
                <Icon /> Case Studies
              </a>
            </HeadingLink>

          </ul>
        </DropdownSection>
      </Col>
      <WhyCallout>
          {/*<IconRocket />*/}
          <CalloutHeader>Why Rentivo</CalloutHeader>
          <CalloutText>Find out why Rentivo is the preferred choice</CalloutText>
          <a href={'/demo-request'}>Going places together</a>
      </WhyCallout>




    </CompanyDropdownEl>
  )
}

export default CompanyDropdown
