import * as React from 'react'

import { graphql } from 'gatsby'

import Container from '../components/Container'
import Page from '../components/Page'
import IndexLayout from '../layouts'

import Review from '../components/Review'

import { ReviewModel } from '../models/review.model'

interface Markdown {
  html: string
  excerpt: string
  frontmatter: ReviewFrontMatter
}

interface ReviewFrontMatter {
  albumTitle: string
  releaseDate: string
  coverArt: string
  artist: string
  reviewDate: string
}

interface ReviewData {
  markdownRemark: Markdown
}

interface ReviewTemplateProps {
  data: ReviewData
}

const getReviewFromMarkdown = (markdown: Markdown): ReviewModel => {
  const { frontmatter, html } = markdown

  return {
    album: {
      title: frontmatter.albumTitle,
      artist: frontmatter.artist,
      releaseDate: frontmatter.releaseDate,
      coverArt: frontmatter.coverArt
    },
    reviewDate: frontmatter.reviewDate,
    reviewText: html
  }
}

const ReviewTemplate: React.SFC<ReviewTemplateProps> = ({ data }) => {
  const review = getReviewFromMarkdown(data.markdownRemark)

  return (
    <IndexLayout>
      <Page>
        <Container>
          <Review review={review} />
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default ReviewTemplate

export const query = graphql`
  query ReviewTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        releaseDate(formatString: "MMMM DD, YYYY")
        albumTitle
        coverArt
        reviewDate(formatString: "MMMM DD, YYYY")
        artist
      }
    }
  }
`
