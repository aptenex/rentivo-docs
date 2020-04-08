import React, { Component } from "react"
import styled from "styled-components"

const NavbarEl = styled.nav`
  margin: auto;
`

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  a {
    color: #1C4A6E;
    font-weight: 600 !important;
  }
`



class Navbar extends Component {
  render() {
    const { children, onMouseLeave } = this.props
    return (
      <NavbarEl onMouseLeave={onMouseLeave}>
        <NavbarList>{children}</NavbarList>
      </NavbarEl>
    )
  }
}

export default Navbar
