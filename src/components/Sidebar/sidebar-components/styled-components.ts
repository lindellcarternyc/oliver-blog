import styled from 'react-emotion'

import { Link } from 'gatsby'

import { colors, heights, widths } from '../../../styles/variables'

interface StyledSidebarProps {
  isVisible: boolean
}

export const StyledSidebar = styled.aside`
  background: ${colors.gray.medium};
  position: fixed;
  top: ${heights.header}px;
  width: ${widths.sidebar}px;
  bottom: 0;
  padding: 1rem;
  z-index: 5;
  left: ${(props: StyledSidebarProps) => (props.isVisible ? 0 : '-100%')};
  transition: left 0.5s ease-in-out;
`

export const StyledCloseButton = styled.button`
  background: transparent;
  width: 100%;
  text-align: center;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
`

export const StyledSidebarHeader = styled.h4`
  color: ${colors.white};
`

export const StyledSidebarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyledSidebarListItem = styled(Link)`
  color: white;
  display: block;
`
