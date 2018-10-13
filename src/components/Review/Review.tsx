import * as React from 'react'

import { ReviewModel } from '../../models/review.model'

import ReviewHeader from './components/ReviewHeader'

import StyledLink from '../Link'

interface ReviewProps {
  review: ReviewModel
}

const Review: React.SFC<ReviewProps> = ({ review }) => {
  const { album, reviewDate, reviewText } = review
  return (
    <div>
      <ReviewHeader album={album} reviewDate={reviewDate} />
      <div dangerouslySetInnerHTML={{ __html: reviewText }} />
      <StyledLink to="/">Back Home</StyledLink>
    </div>
  )
}

export default Review
