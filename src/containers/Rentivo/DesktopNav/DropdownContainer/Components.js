import styled, { keyframes } from "styled-components"
import { promoteLayer } from "./utils"

const getDropdownRootKeyFrame = ({ animatingOut, direction }) => {
  if (!animatingOut && direction) return null
  return keyframes`
  from {
    transform: ${animatingOut ? "rotateX(0)" : "rotateX(-15deg)"};
    opacity: ${animatingOut ? 1 : 0};
  }
  to {
    transform: ${animatingOut ? "rotateX(-15deg)" : "rotateX(0)"};
    opacity: ${animatingOut ? 0 : 1};
  }
`
}

export const DropdownRoot = styled.div`
  transform-origin: 0 0;
  ${promoteLayer}
  animation-name: ${getDropdownRootKeyFrame};
  animation-duration: ${props => props.duration}ms;
  /* use 'forwards' to prevent flicker on leave animation */
  animation-fill-mode: forwards;
  /* flex styles will center the caret child component */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 0px;
`

export const Caret = styled.div`
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent white;
  /* make sure it's above the main dropdown container so now box-shadow bleeds over it */
  z-index: 1;
  position: relative;
  /* prevent any gap in between caret and main dropdown */
  top: 1px;
`

export const DropdownBackground = styled.div`
  transform-origin: 0 0;
  background-color: var(--white);
  border-radius: 4px;
  overflow: hidden;
  background: white;
  padding: 40px 40px;
  position: relative;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.32);
  ${promoteLayer}
  
  
  // @media (max-width: 1350px) {
  //   position: static;
  //   width: 100vw;
  // }
  
  
`

export const AltBackground = styled.div`
  background-color: var(--grey);
  width: 300%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -100%;
  transform-origin: 0 0;
  z-index: 0;
  transition: transform ${props => props.duration}ms;
`

export const InvertedDiv = styled.div`
  ${promoteLayer}
  position: ${props => (props.absolute ? "absolute" : "relative")};
  top: 0;
  left: 0;
  &:first-of-type {
    z-index: 1;
  }
  &:not(:first-of-type) {
    z-index: -1;
  }
`
