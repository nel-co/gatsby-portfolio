import React, { Component } from 'react'
import moment from 'moment'

import './Greeting.css';

export default class Greeting extends Component {

  getDay = () => {
    return moment().format('dddd');
  }

  getTimeOfDay = () => {
    const time = moment().format('HH');
    if(time < 12) {
      return 'Good Morning ';
    } else if(time >= 12 && time <= 17) {
      return 'Good Afternoon ';
    } else if(time > 17 && time <= 24) {
      return 'Good Evening ';
    }
  }
  
  render() {
    this.getTimeOfDay();
    return (
      <p>{this.getTimeOfDay()} and Happy {this.getDay()}! <span className="greeting-wave">👋</span> Here’s some stuff I’ve done recently.</p>
    )
  }
}
