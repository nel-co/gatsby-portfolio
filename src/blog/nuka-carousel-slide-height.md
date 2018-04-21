---
title: "Getting nuka-carousel slides to be full height"
date: "2018-03-29"
---

I was recently working on a front end development project, [Disc Golf Score Board](/work/scoreboard) using [nuka-carousel](http://kenwheeler.github.io/nuka-carousel/#/) and ran into an issue with the `height` of each slide. The problem was that I needed the slide `height` to be the full `height` of the parent element but with [nuka-carousel](http://kenwheeler.github.io/nuka-carousel/#/), the slide `height` is inherited from the child elements inside the slide. I searched and searched for a solution but couldn't find one that worked quite right with my issue.

![](https://media.giphy.com/media/l41lFw057lAJQMwg0/giphy.gif "Looking for a solution")

### The height problem
With the scorecard, I was using [nuka-carousel](http://kenwheeler.github.io/nuka-carousel/#/) to let users swipe to the next hole. I knew I couldn't have a set height for the slides since we wouldn't know how many players are going to be playing for a given round. For example, if only one player was playing, the slide would only extend down to the bottom of the first players `row` and wouldn't allow you to swipe the bottom of the parent container to slide to the next hole.

![](https://res.cloudinary.com/dkutta9yu/image/upload/v1523823840/blog/nuka-1.jpg "Active slide height")

### My solution
The solution ended up being pretty straight forward. Nuka-carousel adds a `.slider-list` class to each slide, so what I did was get the `height` of my  parent element (which is already set) using `getComputedStyle` and then set `.slider-list` height to equal the parent element height.
```javascript
  adjustSlideHeight = () => {
    const slideWrapper = document.querySelector('.option-wrapper'); // my parent element
    if(slideWrapper) {
      const slideHeight = window.getComputedStyle(slideWrapper, null).getPropertyValue('height'); // get the height of parent element
      document.querySelector('.slider-list').style.height = slideHeight; // set slide height to equal the parent element height
    }
  }
```
I call `adjustSlideHeight()` after each slide change using the `afterSlide` method provided by nuka-carousel.
```javascript
<MySlider afterSlide={this.handleSlideChange} />
```

And also when the slider component mounts.
```javascript
componentDidMount = () => {
  this.adjustSlideHeight();
}
```
[Here's](https://discgolfscoreboard.com) a link to the site so you can see a working demo.