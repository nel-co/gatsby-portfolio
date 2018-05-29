import React from 'react'
import Link from 'gatsby-link'

import PortfolioItems from '../components/PortfolioItems/PortfolioItems'
import HomeBlog from '../components/HomeBlog/HomeBlog'
import Greeting from '../components/Greeting/Greeting'

export default class IndexPage extends React.PureComponent {
  render() {
    return (
      <div className="main-container">
        <div className="hero-section">
          <h1>Hey I'm <Link to="#blog">Nelson</Link></h1>
          <p>A <Link to="#portfolio" className="mid-link">front-end developer</Link> in South Carolina!</p>
        </div>

        <div className="greeting">
          <Greeting />
        </div>
        <PortfolioItems />
        <HomeBlog data={this.props.data}/>
      </div>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date]}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;