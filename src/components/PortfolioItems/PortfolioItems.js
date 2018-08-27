import React from 'react'
import Link from 'gatsby-link'

// For build
const isBrowser = typeof window !== 'undefined'
const MyScroll = isBrowser ? require('scrollreveal') : undefined

import './Portfolio.css'

import Discflix from '../../content/img/p-discflix.png'
import Ikes from '../../content/img/p-ikes.png'
import ScoreBoard from '../../content/img/p-scoreboard.png'
import Dogs from '../../content/img/p-dogs.png'
import Wash from '../../content/img/p-wash.png'
import Projects from '../../content/img/p-projects.png'

export default class PortfolioItems extends React.PureComponent {
  // For build  
  componentDidMount = () => {
    window.sr = MyScroll();
    const portfolioItems = document.querySelectorAll('.portfolio-box');
    sr.reveal(portfolioItems, {
      reset: 'true'
    });
  }
  
  render() {
    return (
      <div className="portfolio-wrapper" id="portfolio">

        <div className="portfolio-box">
          <div className="portfolio-text">
            <h2>Discflix</h2>
            <p>Discflix.com is a web app to watch the newest disc golf videos.</p>
            <div className="portfolio-btn-wrapper">
              <a href="https://www.discflix.com/" target="_blank" rel="noreferrer" className="small-link">VIEW PROJECT</a>
              <Link to="/work/discflix" className="small-link">MORE INFO</Link>
            </div>
          </div>
          <div className="portfolio-image">
            <img src={Discflix} alt="discflix" />
          </div>
        </div>

        <div className="portfolio-box">
          <div className="portfolio-image">
            <img src={Ikes} alt="Ikes" />
          </div>
          <div className="portfolio-text">
            <h2>Ikes Korner Grill</h2>
            <p>Custom built WordPress theme for a local restaraunt.</p>
            <div className="portfolio-btn-wrapper">
              <a href="http://ikes.x10host.com/" target="_blank" rel="noreferrer" className="small-link">VIEW PROJECT</a>
              <Link to="/work/ikes" className="small-link">MORE INFO</Link>
            </div>
          </div>
        </div>

        <div className="portfolio-box">
          <div className="portfolio-text">
            <h2>DG Score Board</h2>
            <p>A disc golf score keeping web app.</p>
            <div className="portfolio-btn-wrapper">
              <a href="https://www.discgolfscoreboard.com/" target="_blank" rel="noreferrer" className="small-link">VIEW PROJECT</a>
              <Link to="/work/scoreboard" className="small-link">MORE INFO</Link>
            </div>
          </div>
          <div className="portfolio-image">
            <img src={ScoreBoard} alt="discgolfscoreboard.com" />
          </div>
        </div>

        <div className="portfolio-box">
          <div className="portfolio-image">
              <img src={Dogs} alt="discgolfscoreboard.com" />
          </div>
          <div className="portfolio-text">
            <h2>iheartdogs.com</h2>
            <p>Translated design mockups into front-end code.</p>
            <div className="portfolio-btn-wrapper">
              <a href="https://iheartdogs.com/coffee/" target="_blank" rel="noreferrer" className="small-link">VIEW PROJECT</a>
              <Link to="/work/heart-dogs" className="small-link">MORE INFO</Link>
            </div>
          </div>
        </div>

        <div className="portfolio-box">
          <div className="portfolio-text">
            <h2>LXR Wash</h2>
            <p>Design and code multiple components throughout the site.</p>
            <div className="portfolio-btn-wrapper">
              <a href="https://lxrwash.com/landing-page-32oz-offer/" target="_blank" rel="noreferrer" className="small-link">VIEW PROJECT</a>
              <Link to="/work/lxr" className="small-link">MORE INFO</Link>
            </div>
          </div>
          <div className="portfolio-image">
            <img src={Wash} alt="lxr components" />
          </div>
        </div>

        <div className="portfolio-box">
          <div className="portfolio-image">
            <img src={Projects} alt="side projects image" />
          </div>
          <div className="portfolio-text">
            <h2>Side Projects</h2>
            <p>A collection of my projects that I’ve built.</p>
            <div className="portfolio-btn-wrapper">
              <Link to="/projects" className="small-link small-link__single">VIEW PROJECTS</Link>
            </div>
          </div>
        </div>

      </div>
    )
  } 
}