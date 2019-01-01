import React from 'react'
import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="footer-bg"></div>
    <div className="footer-wrapper">
      <div className="footer-email">
        <span>Have an interesting project? Or just want to <em>get in touch</em>? I’d love to hear from you.</span>
        <a href="mailto:heyimnelson@gmail.com">heyimnelson@gmail.com</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} HeyImNelson.com</span>
        <span></span>
        <span>Made in South Carolina</span>
      </div>
    </div>
  </footer>
);

export default Footer;