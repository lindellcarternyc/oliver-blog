import * as React from 'react'

import Header from './Header'
import Sidebar from './Sidebar'

import { widths } from '../styles/variables'

interface NavigationProps {
  title: string
}

interface NavigationState {
  isSidebarVisible: boolean
  showsSidebarCloseButton: boolean
  showsMenuButton: boolean
}

class Navigation extends React.Component<NavigationProps, NavigationState> {
  public readonly state: NavigationState = {
    isSidebarVisible: false,
    showsSidebarCloseButton: false,
    showsMenuButton: false
  }

  private readonly containerRef = React.createRef<HTMLDivElement>()

  public componentDidMount() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  public render() {
    // tslint:disable:prettier
    return (
      <div ref={this.containerRef}>
        <Header
          title={this.props.title}
          showsMenuButton={this.state.showsMenuButton}
          onClickMenuButton={this.toggleSidebar}
          isMenuButtonActive={this.state.isSidebarVisible}
        />
        <Sidebar
          visible={this.state.isSidebarVisible}
          close={this.closeSidebar}
          showCloseButton={this.state.showsSidebarCloseButton}
        />
      </div>
    )
  }

  private onResize = (_?: Event) => {
    if (this.containerRef.current !== null) {
      const currentWidth = this.containerRef.current.clientWidth

      if (currentWidth > widths.lg + widths.sidebar) {
        return this.setState({
          isSidebarVisible: true,
          showsSidebarCloseButton: false,
          showsMenuButton: false
        })
      }

      return this.setState({
        isSidebarVisible: false,
        showsSidebarCloseButton: true,
        showsMenuButton: true
      })
    }
  }

  private closeSidebar = () => {
    return this.setState({ isSidebarVisible: false })
  }

  private toggleSidebar = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    evt.stopPropagation()

    return this.setState(({ isSidebarVisible }) => ({ isSidebarVisible: !isSidebarVisible }))
  }
}

export default Navigation
