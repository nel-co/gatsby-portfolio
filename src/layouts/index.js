import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Border from '../components/Border'
import Footer from '../components/Footer'
import './index.css'
import 'prismjs/themes/prism.css'


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hey I'm Nelson | Front-End Developer"
      link={[
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css' },
      ]}
      meta={[
        { name: 'description', content: 'A Front-End Developer working in South Carolina.' },
        { name: 'keywords', content: 'Front end developer, web developer, web design, javascript, html, south carolina, greenville, spartanburg, upstate, charlotte, asheville, north carolina, remote' },
      ]}
    />
    <Border />
    <div className="main-wrapper">
      {children()}
    </div>
    <Footer />          
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
