import React from 'react'
import Link from 'gatsby-link'

import './NavBar.css'

export default () => {
  return (
    <div className="nav-wrapper">
      <Link to="/" className="nav-logo">
        <span>Hey</span>
        <span>I'm Nelson</span>
      </Link>
      <Link to="/blog">back to blog</Link>
    </div>
  )
}