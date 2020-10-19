/**
 * https://prepros.io/help/javascript
*/

//@prepros-prepend ./plugins/scrollreveal.js

/*
* Reveal Animation Settings
*/
ScrollReveal().reveal('.reveal', {
  delay: .2,
  distance: '0px',
  duration: 750,
  origin: 'top',
  // reset: true,
  viewFactor: 0.25,
  viewOffset: {
    top: 0
  }
});

ScrollReveal().reveal('.reveal-wrapper', { 
  delay: .2,
  distance: '0px',
  duration: 800,
  origin: 'top',
  // reset: true,
  afterReveal: afterReveal,
  beforeReveal: beforeReveal,
  viewFactor: 0,
  viewOffset: {
    top: 0
  }
});

function afterReveal(el) {
  // el.classList.remove('is-revealing');
  el.classList.add('is-visible');

}

function beforeReveal(el) {
  el.classList.add('is-revealing');
}