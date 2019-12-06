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
  width: 28rem;
   ${DropdownSection} {
    margin-bottom: 30px;
  }
`

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 40px;
  }
 
`

const LearnDropdown = () => {
  return (
    <LearnDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <div>
          <Heading>Learning and Knowledgebase</Heading>
          <p>Are you a developer looking to integrate or a customer on the quest of knowledge?</p>
          <Flex>
            <div>
              <h4>Developers API</h4>
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
              <h4>Product Knowledgebase</h4>
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
        </div>
      </DropdownSection>
      <DropdownSection>
        <Heading>Learning</Heading>
        <ul>
          <HeadingLink>
            <a href="/docs">
              <Icon /> Knowledge Center
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon /> Support
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon /> Demo Request
            </a>
          </HeadingLink>

        </ul>
      </DropdownSection>
    </LearnDropdownEl>
  )
}

export default LearnDropdown
