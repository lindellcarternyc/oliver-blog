import * as React from 'react'

import SidebarList, { SidebarListItemProps } from './sidebar-components/SidebarList'
import { StyledCloseButton, StyledSidebar, StyledSidebarHeader } from './sidebar-components/styled-components'

interface SidebarProps {
  isVisible: boolean
  showsCloseButton: boolean

  items: SidebarListItemProps[]

  onClose: () => void
}

class Sidebar extends React.PureComponent<SidebarProps> {
  public render() {
    const { isVisible, showsCloseButton, items } = this.props
    return (
      <StyledSidebar isVisible={isVisible}>
        {/* {JSON.stringify(data.allMarkdownRemark.edges)} */}
        <>{showsCloseButton && <StyledCloseButton onClick={this.onClose}>close</StyledCloseButton>}</>
        <StyledSidebarHeader>Recent Reviews</StyledSidebarHeader>
        <SidebarList items={items} />
      </StyledSidebar>
    )
  }

  private onClose = (evt: React.SyntheticEvent) => {
    evt.preventDefault()
    evt.stopPropagation()

    this.props.onClose()
  }
}

export default Sidebar
