import styled from 'react-emotion'

import { Link } from 'gatsby'

import { colors, dimensions, heights } from '../../../styles/variables'

export const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.gray.medium};
  color: ${colors.white};
`

export const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

export const Logo = styled.img`
  height: ${heights.header - 10}px;
`

export const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 1rem;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
