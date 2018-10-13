import * as React from 'react'
import styled from 'react-emotion'

import { colors } from '../../../styles/variables'

const StyledMenuButton = styled.button`
  margin-right: 1rem;
  width: 50px;
  height: 50px;
  background: transparent;
  color: white;
  border: 2px solid ${colors.white};
  outline: none;
  cursor: pointer;
  position: relative;

  span {
    display: block;
    width: 35px;
    height: 3px;
    background-color: ${colors.white};
    position: absolute;
    top: 8px;
    left: 50%;

    transition: all 0.3s ease-in;

    transform: translate(-50%, -50%);

    &:nth-child(2) {
      top: calc(50% - 2px);
    }

    &:nth-child(3) {
      top: calc(100% - 10px);
    }
  }

  &.active {
    span {
      &:nth-child(1) {
        top: 50%;
        left: 10%;
        transform: rotateZ(45deg);
      }

      &:nth-child(2) {
        left: -100%;
        opacity: 0;
      }

      &:nth-child(3) {
        top: 50%;
        left: 10%;
        transform: rotateZ(-45deg);
      }
    }
  }
`

interface MenuButtonProps {
  isActive: boolean
  toggle: (evt: React.SyntheticEvent<HTMLButtonElement>) => void
}

const MenuButton: React.SFC<MenuButtonProps> = ({ toggle, isActive }) => {
  return (
    <StyledMenuButton onClick={toggle} className={isActive ? 'active' : ''}>
      <span />
      <span />
      <span />
    </StyledMenuButton>
  )
}

export default MenuButton
