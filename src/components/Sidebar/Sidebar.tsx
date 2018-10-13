import * as React from 'react'

import { graphql, StaticQuery } from 'gatsby'

import { SidebarListItemProps } from './sidebar-components/SidebarList'
import SidebarComponent from './Sidebar.component'

interface SidebarProps {
  visible: boolean
  showCloseButton: boolean

  close: () => void
}

interface Fields {
  slug: string
  reviewDate: string
}

const fieldsToItem = (fields: Fields): SidebarListItemProps => ({
  to: fields.slug,
  text: fields.reviewDate
})

interface Node {
  fields: Fields
}

interface SidebarData {
  allMarkdownRemark: {
    // tslint:disable-next-line:prefer-array-literal
    edges: Array<{ node: Node }>
  }
}

const getitems = (data: SidebarData): SidebarListItemProps[] => {
  // tslint:disable-next-line:arrow-parens
  return data.allMarkdownRemark.edges.map(edge => fieldsToItem(edge.node.fields))
}

const Sidebar: React.SFC<SidebarProps> = ({ visible, close, showCloseButton }) => {
  // tslint:disable-next-line:prettier
  return (
    <StaticQuery
      query={graphql`
        query SidebarQuery {
          allMarkdownRemark(limit: 5) {
            edges {
              node {
                fields {
                  slug
                  reviewDate
                }
              }
            }
          }
        }
      `}
      render={(data: SidebarData) => {
        const items = getitems(data)

        return <SidebarComponent isVisible={visible} showsCloseButton={showCloseButton} onClose={close} items={items} />
      }}
    />
  )
}

export default Sidebar
