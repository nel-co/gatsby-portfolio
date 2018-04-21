import React from "react"
import NavBar from '../components/NavBar'

import './InnerBlog.css'

const InnerBlog = ({data}) => {
  const post = data.markdownRemark;
  return (
    <div>
    <NavBar />
    <div className="portfolio-page-wrapper">
      <div className="portfolio-post" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
    </div>
  );
}

export default InnerBlog;

export const query = graphql`
  query portfolioQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;