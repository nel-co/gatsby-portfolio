import React from 'react'
import Link from 'gatsby-link'
import NavBar from '../components/NavBar'

import img1 from '../content/img/dgsb/dgsb-project-1.jpg'
import img2 from '../content/img/dgsb/dgsb-project-2.jpg'
import img3 from '../content/img/dgsb/dgsb-project-3.jpg'
import img4 from '../content/img/dgsb/dgsb-project-4.jpg'
import img5 from '../content/img/dgsb/dgsb-project-5.jpg'
import img6 from '../content/img/dgsb/dgsb-project-6.jpg'
import img7 from '../content/img/dgsb/dgsb-project-7.jpg'
import img8 from '../content/img/dgsb/dgsb-project-8.jpg'

export default ({data}) => {
  return (
    <div>
      <NavBar />
      <div  className="portfolio-page-wrapper">

        <h1 className="portfolio-title">Side Projects</h1>
        <div className="portfolio-project-list">

          <div className="portfolio-project-row">
            <a href="http://certain-agreement.surge.sh/ " target="_blank" className="portfolio-project-link">Contractibly</a>
            <p>A site built for freelance web devoplers to easily generate a PDF contract 📝 to digitally sign and send to their client.</p>
          </div>

          <div className="portfolio-project-row">
            <a href="https://github.com/nel-co/hide-pinterest" target="_blank" className="portfolio-project-link">hide-pinterest</a>
            <span>
              <p>A chrome extension that hides Pinterest from the results. 🕶️ </p>
              <a href="https://github.com/nel-co/hide-pinterest" target="_blank" className="portfolio-project-link --small-project">View Code</a>              
            </span>
          </div>

          <div className="portfolio-project-row">
            <a href="https://nel-co.github.io/text-shadow-generator/build/" target="_blank" className="portfolio-project-link">text-shadow-generator</a>
            <span>
              <p>A text-shadow css generator.</p>
              <a href="https://github.com/nel-co/text-shadow-generator" target="_blank" className="portfolio-project-link --small-project">View Code</a>              
            </span>
          </div>

          <div className="portfolio-project-row">
            <a href="https://nel-co.github.io/react-preloading-component-demo/" target="_blank" className="portfolio-project-link">React-Preloading-Component</a>
            <span>
              <p>A css loading animation component library to use in React projects.</p>
              <a href="https://github.com/nel-co/react-preloading-component" target="_blank" className="portfolio-project-link --small-project">View Code</a>              
            </span>
          </div>

          <div className="portfolio-project-row">
            <a href="https://nel-co.github.io/reddit-clone/" target="_blank" className="portfolio-project-link">Reddit-Clone</a>
            <span>
              <p>A redesign of reddit.com before they released their official redesign.</p>
              <a href="https://github.com/nel-co/reddit-clone" target="_blank" className="portfolio-project-link --small-project">View Code</a>              
            </span>
          </div>

          <div className="portfolio-project-row">
            <a href="https://nel-co.github.io/greenville-coffee/" target="_blank" className="portfolio-project-link">Greenville Coffee Finder</a>
            <span>
              <p>A web app to help find the best coffee shops ☕️ in Greenville, SC.</p>
              <a href="https://github.com/nel-co/greenville-coffee" target="_blank" className="portfolio-project-link --small-project">View Code</a>              
            </span>
          </div>

          <div className="portfolio-project-row">
            <a href="https://nel-co.github.io/pretty-timezones/" target="_blank" className="portfolio-project-link">Pretty Timezones</a>
            <span>
              <p>A minimal web app to see time zones ⌚️ and what people are doing around the world.</p>
              <a href="https://github.com/nel-co/pretty-timezones" target="_blank" className="portfolio-project-link --small-project">View Code</a>              
            </span>
          </div>

          <div className="portfolio-project-row">
            <a href="https://nel-co.github.io/what-to-binge/" target="_blank" className="portfolio-project-link">What to Binge?</a>
            <span>
              <p>Recommends you a random tv show 📺 that you can binge watch.</p>
              <a href="https://github.com/nel-co/what-to-binge" target="_blank" className="portfolio-project-link --small-project">View Code</a>              
            </span>
          </div>

          <div className="portfolio-project-row">
            <a href="https://nel-co.github.io/Mood-Tracker/" target="_blank" className="portfolio-project-link">Mood Tracker</a>
            <span>
              <p>A web app that stores your previous mood 😎 and also boosts it with pretty colors while you type 🎉</p>
              <a href="https://github.com/nel-co/Mood-Tracker" target="_blank" className="portfolio-project-link --small-project">View Code</a>              
            </span>
          </div>

          <div className="portfolio-project-row">
            <a href="http://nelson-rec-box-app.surge.sh/" target="_blank" className="portfolio-project-link">Recipe Box</a>
            <span>
              <p>Web app that lets you save, add, and delete recipes. 🌮</p>
              <a href="https://github.com/nel-co/recipe-box" target="_blank" className="portfolio-project-link --small-project">View Code</a>              
            </span>
          </div>

          <div className="portfolio-project-row">
            <a href="https://nel-co.github.io/Pomodoro-Clock/" target="_blank" className="portfolio-project-link">Pomodoro Clock</a>
            <span>
              <p>Minimal productivity app that allows you to work in short intervals. ⏳</p>
              <a href="https://github.com/nel-co/Pomodoro-Clock" target="_blank" className="portfolio-project-link --small-project">View Code</a>              
            </span>
          </div>

          <div className="portfolio-project-row">
            <a href="https://nel-co.github.io/drum-kit/" target="_blank" className="portfolio-project-link">Drum Kit</a>
            <span>
              <p>Minimal drum kit web app that allows you to play the drums. 🥁 </p>
              <a href="https://github.com/nel-co/drum-kit" target="_blank" className="portfolio-project-link --small-project">View Code</a>              
            </span>
          </div>

        </div>

      </div>
    </div>
  )
}