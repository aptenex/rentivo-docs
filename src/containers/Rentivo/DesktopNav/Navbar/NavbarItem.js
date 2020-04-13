import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {DropdownBackground, DropdownRoot} from "../DropdownContainer/Components"

const NavbarItemTitle = styled.button`
  background: transparent;
  border: 0;
  font-weight: bold;
  font-family: inherit;
  font-size: 18px;
  padding: 1rem 1.5rem 1rem 1.5rem;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  /* position above the dropdown, otherwise the dropdown will cover up the bottom sliver of the buttons */
  position: relative;
  z-index: 2;
  &:hover, &:focus {
    opacity: 0.7;
    outline:none;
  }
`

const NavbarItemEl = styled.li`
    position: relative;
    @media(max-width: 1349px){
      AAAAA:first-child {
          position: static;
        > div {
            position: absolute;
            left: 0;
            transform: translateX(0%);
            width: 100vw;
            right: 100%;
          }
        }
    }
    @media(min-width: 1350px){
      AAAAA:first-child {
        ${DropdownRoot} > div:first-child{
          transform: translateX(-180px);
        }
        position: static;
      > div {
          width: 100vw;
          transform: translateX(0);
          left: 0px;
        > div {
            transform: translateX(0);
          }
        }
  
      }
    }
`
// position: relative;
// @media(max-width: 1349px){
//   :first-child {
//       position: static;
//     > div {
//         position: absolute;
//         left: 0;
//         transform: translateX(0%);
//         width: 100vw;
//         right: 100%;
//       }
//     }
//   }
// @media(min-width: 1350px){
//   :first-child {
//       ${DropdownRoot} > div:first-child{
//         transform: translateX(-380px);
//       }
//       position: static;
//     > div {
//         width: 100vw;
//         transform: translateX(0);
//         left: 0px;
//       > div {
//           transform: translateX(0);
//         }
//       }
//
//     }
//   }
const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
  z-index: 3;
`

export default class NavbarItem extends Component {
  static propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node
  }
  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index)
  }

  render() {
    const { title, children } = this.props
    return (
      <NavbarItemEl onMouseEnter={this.onMouseEnter} onFocus={this.onMouseEnter}>
        <NavbarItemTitle>{title}</NavbarItemTitle>
        <DropdownSlot>{children}</DropdownSlot>
      </NavbarItemEl>
    )
  }
}
