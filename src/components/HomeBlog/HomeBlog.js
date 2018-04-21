import React from 'react'
import Link from 'gatsby-link'

import './HomeBlog.css'

const HomeBlog = ({data}) => {
  const blogPosts = data.allMarkdownRemark.edges.filter( ({node}) => {
    return node.frontmatter.date !== null
  });
  return (
    <div className="blog-container" id="blog">
      <div className="blog-wrapper__home" id="home-blog">
        {blogPosts.slice(blogPosts.length - 4).reverse().map(({ node }) => {
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
      <div className="blog-page-link">
          <Link to="/blog" className="small-link">MORE POSTS</Link>
        </div>
    </div>
  );
}

export default HomeBlog;
