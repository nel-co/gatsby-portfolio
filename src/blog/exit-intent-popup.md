---
title: "How to make an Exit Intent popup with JavaScript"
date: "2018-03-22"
---

Exit Intent popups are something we've all had an encounter with. As front-end developers and/or visitors to tons of different sites where it's implemented. They're the modals that popup when you're leaving a site to get you to stay and subscribe to a mailing list or to remind you that you've still got items in your shopping cart you need to buy. Some people think they can be pretty annoying but they've been proven to work, so I'm going to show how you can make one from scratch using HTML/CSS/Javascript.

### How does it work?
Basically all that it does is track mouse movement and when the mouse pointer starts to leave the browsers viewport it displays a popup to get your attention so that you'll stay on the page.
![](https://media.giphy.com/media/3o752bhgQhd3JdGsik/giphy.gif "The Rock as an Exit Intent Popup")

### Tracking mouse movement
Using JavaScript, we can detect when the pointer exits the viewport by utilizing the [`mouseleave`](https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave) event. This event is fired when the pointer moves out of an element that has the event listener attached to it. We'll also want to use the [`clientY`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY) property of the mouse event which just returns the Y coordinate of the mouse pointer. If it returns any number `less than 0`, then you know that the mouse has left the viewport so you can now display the modal.

```javascript
// This example uses 'mousemove' to console log the Y coordinates
document.addEventListener('mousemove', (e) => {
  console.log(e.clientY);
})
```

### Display the popup
The first thing you want to do is create a wrapper for it in HTML and then style and position it any way you like as long as it's initially  set to `display: none`.

```html
<div class="exit-intent-wrapper">
  <!-- Popup content goes here! -->
</div>
```

Next is the most important part. This is what causes the exit-intent popup to actually...popup.

```javascript
// Select the HTML element for the popup
const popUp = document.querySelector('.exit-intent-wrapper');

// display your exit intent popup on mouseleave
// by changing the style from none
document.addEventListener('mouseleave', (e) => {
  if(e.clientY <= 0) {
    popUp.style.display = 'flex';
  }
}, false);
```

### The demo
Once that is finished, you can add any animation, functionality to have it close when you click away from it, and even use cookies to have the modal not display again for a certain time. You can view a basic demo on codepen [here](https://codepen.io/NelCo/full/dmEawO/). With the demo, you can click away from the modal to close it then move the pointer away to have it reopen.