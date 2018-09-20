---
title: "Create a box-shadow effect using the colors from an image (Apple Music Style)"
date: "2018-09-19"
---

I'm sure you've seen an effect similar to this before. The one that we're trying to achieve is similar to that of the Apple Music app. On the song info screen, they use a `box-shadow` around the album covers. But they're not just using a low opacity black like `rgba(0, 0, 0, 0.3)`. What they're doing is getting the dominant color of the image and using that as the color of the shadow.

![](https://res.cloudinary.com/dkutta9yu/image/upload/v1537392580/blog/box-shadow.jpg "Apple Music box-shadow example")

### How do we do this?
To get this effect, all that we're doing is adding an extra `<img />` element to our markup and using a [`blur()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur) property on it. The results are great and it's only just a little extra bit of CSS to get there. Here's an example of the HTML you could use.

```html
<!-- Image container -->
<div class="image-container">

   <!-- Copy of image on top -->
  <img src="image.jpg" alt="blurred image">
  
   <!-- Your image -->
  <img src="image.jpg" alt="clear image">
  
</div>
```

Once you have this markup, you'll just need to add the CSS.

```css
  .image-container {
    position: relative; 
  }
  
  .image-container img:nth-of-type(1) {
    position: absolute; 
    filter: blur(25px); /* Where the magic happens! */
  }
  
  .image-container img:nth-of-type(2) {
    position: absolute; 
  }
```
What we're doing here is setting the `container` element to have a position value of `relative`. With the 2 images set to `absolute`. Once they're sitting on top of each other, we apply the `blur` filter to the top image. From there, just change the blur value to what you see fit. 

![](https://res.cloudinary.com/dkutta9yu/image/upload/v1537478029/box-shadow-effect.jpg "box-shadow results")

Check out the [codepen](https://codepen.io/NelCo/pen/dqaaao/)  to see the end result.