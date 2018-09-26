import React from 'react'
import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="footer-wrapper">
      <div className="footer-email">
        <span>Have an interesting project? Or just want to get in touch? I’d love to hear from you.</span>
        <a href="mailto:heyimnelson@gmail.com">heyimnelson@gmail.com</a>
      </div>
      <div className="footer-bottom">
        <span>© 2018 HeyImNelson.com</span>
        <span></span>
        <span>Made in South Carolina</span>
      </div>
    </div>
  </footer>
);

export default Footer;