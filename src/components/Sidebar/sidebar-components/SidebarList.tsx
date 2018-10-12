import * as React from 'react'

import { StyledSidebarList, StyledSidebarListItem } from './styled-components'

export interface SidebarListItemProps {
  to: string
  text: string
}

const SidebarListItem: React.SFC<SidebarListItemProps> = ({ to, text }) => {
  return <StyledSidebarListItem to={to}>{text}</StyledSidebarListItem>
}

export interface SidebarListProps {
  items: SidebarListItemProps[]
}

const SidebarList: React.SFC<SidebarListProps> = ({ items }) => {
  // tslint:disable-next-line:arrow-parens
  const listItems = items.map(item => {
    return <SidebarListItem key={item.text} {...item} />
  })
  return <StyledSidebarList>{listItems}</StyledSidebarList>
}

export default SidebarList
