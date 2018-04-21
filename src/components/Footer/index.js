import React from 'react'
import './Footer.css'

const Footer = () => (
  <footer style={{marginBottom:12}}>
    <div className="footer-top">
      <div>
        <h2>Get In Touch</h2>
        <div className="footer-social">
          <a className="social-link" href="#" target="_blank">Email</a>
          <a className="social-link" href="#" target="_blank">Instagram</a>
          <a className="social-link" href="#" target="_blank">Linkedin</a>
          <a className="social-link" href="#" target="_blank">Github</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div>
        <span>© 2018 HEYIMNELSON.COM</span>
        <span>Built with <a target="_blank" href="https://www.gatsbyjs.org/">Gatsby.js</a></span>
      </div>
    </div>
  </footer>
);

export default Footer;