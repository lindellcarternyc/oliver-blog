import * as React from 'react'
import Helmet from 'react-helmet'

import { graphql, StaticQuery } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import LayoutMain from '../components/LayoutMain'
import LayoutRoot from '../components/LayoutRoot'
import Navigation from '../components/Navigation'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const IndexLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'gatsbyjs, gatsby, javascript, sample, something' }
          ]}
        />
        <Navigation title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
