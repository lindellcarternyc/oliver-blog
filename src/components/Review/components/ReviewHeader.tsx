import * as React from 'react'

import { AlbumModel } from '../../../models/album.model'
import { ReviewModel } from '../../../models/review.model'

import CoverArt from './CoverArt'
import { StyledReviewDate, StyledReviewHeader, StyledReviewHeaderText, StyledReviewTitle } from './styled-components'

type ReviewHeaderProps = Pick<ReviewModel, 'album' | 'reviewDate'>

interface ReviewTitleProps {
  album: AlbumModel
}

const ReviewTitle: React.SFC<ReviewTitleProps> = ({ album }) => {
  return (
    <StyledReviewTitle>
      {album.artist} - {album.title}
    </StyledReviewTitle>
  )
}

interface ReviewHeaderTextProps {
  reviewDate: string
  album: AlbumModel
}

const ReviewHeaderText: React.SFC<ReviewHeaderTextProps> = ({ reviewDate, album }) => {
  return (
    <StyledReviewHeaderText>
      <StyledReviewDate>{reviewDate}</StyledReviewDate>
      <ReviewTitle album={album} />
      <StyledReviewDate>{album.releaseDate}</StyledReviewDate>
    </StyledReviewHeaderText>
  )
}

const ReviewHeader: React.SFC<ReviewHeaderProps> = ({ album, reviewDate }) => {
  return (
    <StyledReviewHeader>
      <ReviewHeaderText reviewDate={reviewDate} album={album} />
      <CoverArt src={album.coverArt} alt={album.title} />
    </StyledReviewHeader>
  )
}

export default ReviewHeader
