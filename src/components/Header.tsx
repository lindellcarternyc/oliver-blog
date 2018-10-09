import * as React from 'react'
import styled from 'react-emotion'

import { transparentize } from 'polished'

import { Link } from 'gatsby'

import logo from '../assets/logo.jpg'

import { colors, dimensions, heights } from '../styles/variables'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.gray.medium};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const Logo = styled.img`
  height: ${heights.header - 10}px;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 1rem;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <Logo src={logo} />
      <HomepageLink to="/">{title}</HomepageLink>
    </HeaderInner>
  </StyledHeader>
)

export default Header
