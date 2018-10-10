import * as React from 'react'

import logo from '../../assets/logo.jpg'
import MenuButton from './header-components/MenuButton'
import { HeaderInner, HomepageLink, Logo, StyledHeader } from './header-components/styled-components'

export interface HeaderProps {
  title: string
  showsMenuButton: boolean
  isMenuButtonActive: boolean
  onClickMenuButton: (evt: React.SyntheticEvent<HTMLButtonElement>) => void
}

const Header: React.SFC<HeaderProps> = ({ title, showsMenuButton, onClickMenuButton, isMenuButtonActive }) => (
  <StyledHeader>
    <HeaderInner>
      {showsMenuButton && <MenuButton toggle={onClickMenuButton} isActive={isMenuButtonActive} />}
      <Logo src={logo} />
      <HomepageLink to="/">{title}</HomepageLink>
    </HeaderInner>
  </StyledHeader>
)

export default Header
