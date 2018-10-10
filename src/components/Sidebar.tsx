import * as React from 'react'
import styled from 'react-emotion'

import { colors, heights, widths } from '../styles/variables'

interface SidebarProps {
  visible: boolean
  showCloseButton: boolean

  close: (evt: React.SyntheticEvent<HTMLButtonElement>) => void
}

type StyledSidebarProps = Pick<SidebarProps, 'visible'>

const StyledSidebar = styled.div`
  background: ${colors.gray.medium};
  position: fixed;
  top: ${heights.header}px;
  width: ${widths.sidebar}px;
  bottom: 0;
  padding: 1rem;
  z-index: 5;
  left: ${(props: StyledSidebarProps) => (props.visible ? 0 : '-100%')};
  transition: left 0.5s ease-in-out;
`

const StyledCloseButton = styled.button`
  background: transparent;
  width: 100%;
  text-align: center;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
`

const Sidebar: React.SFC<SidebarProps> = ({ visible, close, showCloseButton }) => {
  // tslint:disable-next-line:prettier
  return (
    <StyledSidebar visible={visible}>
      <>{showCloseButton && <StyledCloseButton onClick={close}>close</StyledCloseButton>}</>
    </StyledSidebar>
  )
}

export default Sidebar
