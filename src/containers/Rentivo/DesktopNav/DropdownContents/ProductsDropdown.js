import React from "react"
import styled from "styled-components"
import { Icon, DropdownSection, Heading } from "./Components"
import { ThemeProvider } from 'styled-components';
// import IconManage from '-!babel-loader!svg-react-loader?classIdPrefix=manage!./svg/wireless_touch_home_smart_home.svg';
// import IconDistribute from '-!babel-loader!svg-react-loader?classIdPrefix=distribution!./svg/cloud_distribution.svg';
// import IconEngine from '-!babel-loader!svg-react-loader?classIdPrefix=store!./svg/store.svg';
// import IconGrow from '-!babel-loader!svg-react-loader?classIdPrefix=care!./svg/global_care.svg';
// import IconAPI from '-!babel-loader!svg-react-loader?classIdPrefix=coding!./svg/browser_coding.svg';
// import IconDMO from '-!babel-loader!svg-react-loader?classIdPrefix=dmo!./svg/global_care.svg';

import { IconManage, IconGrow, IconEngine, IconAPI, IconDMO, IconDistribute } from '../../Icons';

// const IconManage = styled.div``;
// import  IconManage from '../../../../../static/img/svg/fire_flame_safety_heat.svg'
// const IconDistribute = styled.div``;
// const IconEngine = styled.div``;
// const IconGrow = styled.div``;
// const IconAPI = styled.div``;
// const IconDMO = styled.div``;

const ProductsDropdownEl = styled.div`
  
  max-width: 100vw !important;
  @media (min-width:1349px) {
    max-width: 70rem !important;
  }
  display: flex; 
  left: 0%;
  transform: translateX(20%)
  @media (max-width:1349px) {
    position: relative;
    flex-direction: column;
    width: 100vw;
    transform: translateX(0%)
  }
`


const Col = styled.div`
 
  @media (max-width: 768px) {    
    width: 100vw;
  }

`

const Integrations = styled(Col)`
  background: #f2f2f2;
  margin: -40px -40px -40px 20px;
  padding: 40px;
  position: relative;
  min-width: 20rem;
`

const SectionHeader = styled.h4`  
  height: 38px;
  margin-bottom: 20px;
`

const Logo = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 0px;
  border-radius: 100%;
  position: relative;
  left: -15px;
`

// background: ${props => props.theme.main};
Logo.defaultProps = {
  theme : {
    main: 'red'
  }
};

const theme = {
  main: "blue"
};

const SubProductsList = styled.ul`
  li {
    display: flex;
    margin-bottom: 1rem;
  }
  h3 {
    margin-right: 1rem;
    width: 3.2rem;
    display: block;
  }
  a {
    color: var(--dark-grey);
  }
  
`

const ProductsSection = styled.ul`
  li {
    display: flex;
    div p {
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }
    
  
  
`

const DemoRequest = styled.div`
 border-top: 2px solid #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacer);
  padding-top: var(--spacer);
}
h3 {
  margin-bottom: 0;
}
`

const ProductsDropdown = () => {
  return (
    <ProductsDropdownEl>
      <Col>
        <DropdownSection data-first-dropdown-section>
          {/*<SectionHeader>Products</SectionHeader>*/}
          <ProductsSection>
            <li>
              <div>
                <Logo >
                  <IconManage/>
                </Logo>
              </div>
              <div>
                <Heading color="blue">Manage</Heading>
                <p>A complete end-to-end solution for short-term property management</p>
              </div>
            </li>
            <li>
              <div>
                <Logo >
                  <IconDistribute/>
                </Logo>
              </div>
              <div>
                <Heading color="blue">Channel Distribution</Heading>
                <p>Reach and automate Airbnb, HomeAway, Booking.com (and more)</p>
              </div>
            </li>
            <li>
              <div>
                <Logo >
                  <IconEngine/>
                </Logo>
              </div>
              <div>
                <Heading color="blue">Booking Engine</Heading>
                <p>Create your own booking marketplace for direct opportunities</p>
              </div>
            </li>

          </ProductsSection>
        </DropdownSection>

        <DropdownSection>
          <DemoRequest>
            <Heading noMarginBottom>
              <a href="/">
                <Icon /> Demo Request
              </a>
            </Heading>
          </DemoRequest>
        </DropdownSection>


      </Col>
      <Col>
        <DropdownSection data-first-dropdown-section>
          {/*<SectionHeader>Expert Partner Services</SectionHeader>*/}
          <ProductsSection>
            <li>
              <div>
                <Logo >
                  <IconGrow/>
                </Logo>
              </div>
              <div>
                <Heading color="blue">Grow and Acquire</Heading>
                <p>A complete end-to-end solution for short-term property management</p>
              </div>
            </li>
            <li>
              <div>
                <Logo >
                  <IconAPI/>
                </Logo>
              </div>
              <div>
                <Heading color="blue">APIs as a Service</Heading>
                <p>Reach and automate Airbnb, HomeAway, Booking.com (and more)</p>
              </div>
            </li>
            <li>
              <div>
                <Logo >
                  <IconDMO/>
                </Logo>
              </div>
              <div>
                <Heading color="blue">DMO</Heading>
                <p>Create a destination marketing website for your organisation.</p>
              </div>
            </li>

          </ProductsSection>
        </DropdownSection>

      </Col>
      <Integrations>
        <DropdownSection data-first-dropdown-section>
          <SectionHeader>Integrations</SectionHeader>
          <ProductsSection>
            <li>
              <div>
                <Logo color="blue" />
              </div>
              <div>
                <Heading color="blue">Airbnb</Heading>
              </div>
            </li>
            <li>
              <div>
                <Logo color="blue" />
              </div>
              <div>
                <Heading color="blue">Booking.com</Heading>
              </div>
            </li>
            <li>
              <div>
                <Logo color="blue" />
              </div>
              <div>
                <Heading color="blue">HomeAway</Heading>
              </div>
            </li>

          </ProductsSection>
        </DropdownSection>

      </Integrations>
    </ProductsDropdownEl>
  )
}

export default ProductsDropdown
