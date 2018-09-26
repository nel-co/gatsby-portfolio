import React from 'react'
import './Commits.css'

import moment from 'moment'

const Commits = (props) => (
  <section id="recent-commits">
    <div className="commit-wrapper">
      <h3>Recent Commits</h3>
      <div className="commits">

      {props.commits && props.commits.slice(0,3).map((commit) => {
        return (
          <div className="commit" key={commit.id}>
            <div className="commit-top">
              <a href={`https://github.com/${commit.repo.name}`} target="_blank">{commit.repo.name}</a>
              <span>{moment(commit.created_at).format('MM/DD')}</span>
            </div>
            <div className="commit-bottom">
              <span>{commit.payload.commits[0].message}</span>
            </div>
          </div>
        );
      })}

      </div>
    </div>
  </section>
);

export default Commits;

// https://api.github.com/users/nel-co/events

// change scrollbar color?