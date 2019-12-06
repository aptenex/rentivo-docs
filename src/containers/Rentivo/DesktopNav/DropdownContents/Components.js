import styled from "styled-components"

export const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: ${props => (props.noMarginBottom ? 0 : "0.2rem")};
  color: ${({ color }) => (color ? `var(--${color})` : "var(--blue)")};
`

export const HeadingLink = styled( Heading )`
  margin-bottom: 20px;
`;

    // .withComponent("li")

export const LinkList = styled.ul`
  li {
    margin-bottom: 1rem;
    font-size:1rem;
  }

  li:last-of-type {
    margin-bottom: 0;
  }
  
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`

export const Icon = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 2px;
  background-color: var(--blue);
  opacity: 0.8;
  display: inline-block;
`

export const DropdownSection = styled.div`
  padding: var(--spacer);
  position: relative;
  z-index: 1;
`
