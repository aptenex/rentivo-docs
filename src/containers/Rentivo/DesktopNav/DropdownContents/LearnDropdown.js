import React from "react"
import styled from "styled-components"
import {
  Icon,
  DropdownSection,
  Heading,
  HeadingLink,
  LinkList
} from "./Components"

const LearnDropdownEl = styled.div`
  width: 34rem;
   ${DropdownSection} {
    margin-bottom: 30px;
  }
  h3 {
    margin-bottom: 30px;
  }
`

const Flex = styled.div`
  display: flex;
  margin-top: 60px;
  > div:first-of-type {
    margin-right: 40px;
  }
 
`

const Col = styled.div`
 flex-grow: 1;
 min-width: 22rem;
 padding: 20px 40px;
`

const LearnDropdown = () => {
  return (
    <LearnDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <Col>
          <h3>Learning and Knowledgebase</h3>
          <p>Are you a developer looking to integrate or a customer on the quest of knowledge?</p>
          <LinkList>
            <li>
              <a href="/docs">
                <Icon /> Knowledge Center
              </a>
            </li>
            <li>
              <a href="/">
                <Icon /> Support
              </a>
            </li>

          </LinkList>

          <Flex>
            <div>
              <h3>Developers API</h3>
              <LinkList>
                <li>
                  <a href="/">Channel Connection API</a>
                </li>
                <li>
                  <a href="/">Rentivo Manage API</a>
                </li>
              </LinkList>
            </div>
            <div>
              <h3>Knowledgebase</h3>
              <LinkList>
                <li>
                  <a href="/">Channel Connection</a>
                </li>
                <li>
                  <a href="/">Rentivo Manage</a>
                </li>
              </LinkList>
            </div>
          </Flex>
        </Col>
      </DropdownSection>

    </LearnDropdownEl>
  )
}

export default LearnDropdown
