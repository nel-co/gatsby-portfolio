import React, { Component } from 'react'
import Link from 'gatsby-link'
import moment from 'moment'

import me from '../../content/img/resume-img.jpg'
import './resume.css';

export default class ResumeWrapper extends Component {
  
  render() {
    return (
      <div className="resume-wrapper">

        <div className="resume-column resume-bio">
          <img src={me}></img>
          <h2>Hey, I'm Nelson! 👋</h2>
          <p>I'm a front-end designer/developer based out of the Upstate of South Carolina (also where I grew up 🤙), working with companies around the globe. I studied design in college, and have been teaching my self to code and building things ever since. I really love working on projects that require me to use both my design and code skill set to see a project to completion. Turning complex problems into clean, easy to use designs is something I take great pride in.</p>
          <p>My commitment to learning and unique skill set that spans various disciplines from digital/print design to UI/UX to front-end development has allowed me to take on positions that I'm honored to have had. I'm grateful to have ended up in this field and get to create and build things for a living.</p>
          <div className="point-wrapper">
            <Link to="/">Back to Portfolio</Link>          
          </div>
        </div>

        <div className="resume-column resume-exp">
          <h3>Experience</h3>

          <div className="exp-block">
            <div className="exp-title">heyimnelson.com (2013-Present) <br /> Front End Developer</div>
            <ul>
              <li>Collaborated in creative briefs with both large and small teams to advise and plan projects</li>
              <li>Translated wireframes and mockups into responsive, interactive features, using HTML/SASS and JavaScript</li>
              <li>Maintained client websites on an ongoing basis</li>
            </ul>
          </div>

          <div className="exp-block">
            <div className="exp-title">Cocoon (2018-Present) <br /> Front End Developer</div>
            <ul>
              <li>Used HTML5, CSS, React.js, JavaScript, Git, Webpack, and REST APIs to develop complex and responsive web applications</li>
              <li>Wrote templates and front-end code for Django-based app</li>
              <li>Maintained client websites on an ongoing basis</li>
            </ul>
          </div>

          <div className="exp-block">
            <div className="exp-title">Tekna Fill Inc. (2017-2018) <br /> Front End Developer</div>
            <ul>
              <li>Created, improved, and maintained critical components of e-commerce websites, including shopping cart and checkout page</li>
              <li>Analyzed traffic and made necessary changes for a better user experience</li>
              <li>Created HTML email templates and newsletters that improved email CTR rates by ~15%</li>
            </ul>
          </div>

          <div className="exp-block">
            <div className="exp-title">Bombtech Golf (2013-2016) <br /> Web Designer</div>
            <ul>
              <li>Gained diverse experience in creative strategy, design, production, and web design/development</li>
              <li>Designed numerous marketing programs (logos, brochures, newsletters, infographics, custom icons & ads)</li>
            </ul>
          </div>

        </div>

        <div className="resume-column resume-points">
          <div className="resume-row">
            <h3>Side Projects</h3>
            <p>Here's a few side projects of mine that I've built.</p>
            <div className="point-wrapper">
              <a target="_blank" href="https://discflix.com">Discflix</a>
              <a target="_blank" href="https://discgolfscoreboard.com">dgsb</a>
              <a target="_blank" href="https://enigmatic-peak-56673.herokuapp.com/">Mineworthy</a>
              <a target="_blank" href="https://nel-co.github.io/react-preloading-component-demo/">react-preloading-component</a>
              <a target="_blank" href="https://wizardly-clarke-3cb969.netlify.com/">National Park Lookup</a>
            </div>
          </div>

          <div className="resume-row">
            <h3>Tools</h3>
            <p>These are the tools that I typically use for any given project. 🔨</p>
            <div className="point-wrapper">
              <span>VS Code</span>
              <span>Figma</span>
              <span>Adobe CC</span>
              <span>Github</span>
              <span>Dev Tools</span>
              <span>Webpack</span>
              <span>pingdom</span>
              <span>Postman</span>
            </div>
          </div>

          <div className="resume-row">
            <h3 style={{paddingBottom: 0}}>Skills</h3>
            <div className="point-wrapper">
              <span>HTML5</span>
              <span>CSS</span>
              <span>SASS</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Gatsby.js</span>
              <span>WordPress</span>
              <span>Responsive Design</span>
              <span>Git</span>
              <span>CMS</span>
              <span>Googling</span>
              <span>Debugging</span>
            </div>
          </div>

        </div>

        <div className="resume-column resume-contact">
          <div className="resume-row resume-projects" style={{display: 'flex', justifyContent: 'space-between'}}>
            <h3>🚀 55+ Successful Projects!</h3>
            <h3>{`${moment().format('M')}-${moment().format('D')}-${moment().format('YY')}`} | {`${moment().format('LT')}`}</h3>
          </div>
          <div className="resume-row" style={{paddingTop: 30}}>
            <h3>Contact</h3>
            <div className="point-wrapper">
              <a href="mailto:heyimnelson@gmail.com">Email</a>
              <a href="https://www.linkedin.com/in/nelson-cothran/">LinkedIn</a>
              <a href="https://github.com/nel-co">Github</a>
              <a href="https://www.instagram.com/nelsoncothran/">Instagram</a>
            </div>
          </div>

          <div className="resume-row">
            <h3>Hobbies</h3>
            <p>When I'm not designing/coding, I can be found occupied with one of the things listed below. 😎</p>
            <div className="point-wrapper">
              <span>Disc Golf</span>
              <span>Kayaking</span>
              <span>Hiking</span>
              <span>Museums</span>
              <span>Guitar</span>
              <span>Harmonica</span>
              <span>Basketball</span>
              <span>Cooking</span>
              <span>Video Games</span>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
