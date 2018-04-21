import React from "react"
import NavBarPost from '../components/NavBar/NavBarPost'

import './InnerBlog.css'

const InnerBlog = ({data}) => {
  const post = data.markdownRemark;
  return (
    <div>
    <NavBarPost />
    <div className="blog-wrapper__inner">
      <h1 className="blog-title__inner">{post.frontmatter.title}</h1>
      <div className="blog-post-info">
        <span>{post.frontmatter.date}</span>
      </div>
      <div className="blog-post" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
    </div>
  );
}

export default InnerBlog;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      timeToRead
    }
  }
`;