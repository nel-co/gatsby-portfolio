import React from 'react'
import Link from 'gatsby-link'
import NavBar from '../components/NavBar'

export default ({data}) => {
  const blogPosts = data.allMarkdownRemark.edges.filter( ({node}) => {
    return node.frontmatter.date !== null
  })
  return (
    <div>
      <NavBar />
      <div  className="blog-page-wrapper">
        <div className="blog-wrapper__home" id="home-blog">
          {blogPosts.map(({ node }) => {
            return (
              <div className="blog-block__home" key={node.id}>
                <div className="blog-block-top-row">
                  <span>{node.frontmatter.date}</span>
                </div>
                <h2 className="blog-title__home"><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h2>
                <p className="blog-excerpt">{node.excerpt}</p>
                <Link to={node.fields.slug} className="small-link">READ</Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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