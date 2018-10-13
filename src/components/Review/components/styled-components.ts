import styled from 'react-emotion'

import { colors } from '../../../styles/variables'

export const StyledReviewTitle = styled.h3`
  color: ${colors.white};
`

export const StyledReviewDate = styled.p`
  color: ${colors.gray.medium};
`

export const StyledCoverArt = styled.img`
  border: 2px solid ${colors.white};
  width: 80px;
  height: 80px;
`

export const StyledReviewHeaderText = styled.div`
  display: flex;
  flex-direction: column;

  * {
    padding: 0;
    margin: 0;
  }
`

export const StyledReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 2px solid ${colors.white};
  padding-bottom: 0.5rem;
`
