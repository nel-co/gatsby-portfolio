---
title: "Discflix"
---

# Discflix
![cover](https://res.cloudinary.com/dkutta9yu/image/upload/v1523191274/heyimnelson/discflix-project-1.png)
### The Overview

[Discflix.com](https://Discflix.com) is a web app I designed/developed. My goal was to create a site that enabled users to watch and view all    of the new disc golf tournament videos that are uploaded to YouTube. With Discflix, I knew I wanted most of the standard features of a video app (e.g., Netflix), like adding videos to favorites,    adding to a watchlist, and keeping track of what you already watched so I set off on researching existing video apps.

### The Process
![mood board](https://res.cloudinary.com/dkutta9yu/image/upload/v1523191274/heyimnelson/discflix-project-2.jpg)

After the mood board was finished, I knew I wanted a dark background color that’s easy on the eyes with vibrant accents to represent the disc golf community and a sans-serif font for a modern look. So I settled with this color palette and typeface.
<span class="portfolio-img-wrapper-2">
![color](https://res.cloudinary.com/dkutta9yu/image/upload/v1523191271/heyimnelson/discflix-project-3.jpg)
![type](https://res.cloudinary.com/dkutta9yu/image/upload/v1523191272/heyimnelson/discflix-project-4.jpg)
</span>

The front-end was developed with HTML, CSS, React, React-Router, and YouTube APIs. When deciding on how to keep track of user's stats/videos, I wanted the experience to be fast and enjoyable. That means that they would be able to start watching and saving videos right way. So instead of having users create accounts and have to worry about passwords, I decided on utilizing the user's browser with localStorage.

```javascript
this.state = {
 history: JSON.parse(localStorage.getItem('history')) || [],
 favorites: JSON.parse(localStorage.getItem('favorites')) || [],
 watchList: JSON.parse(localStorage.getItem('watchList')) || []
}
```
Since I can’t host the dynamic thumbnail images, I had to bring in a simple function from a previous project of mine to check if a thumbnail exists at a certain size and return the highest quality link. Once I tested this, I found that the quality difference at max resolution vs. high resolution is negligible and the page load speed with high was much faster. So that was a clear choice to use high or lower quality instead of max resolution.

```javascript
getYoutubeThumbnail = (link) => {
 if ('high' in link) {
  return link.high.url;
 } else if ('medium' in link) {
    return link.medium.url;
 } else {
    return link.default.url;
 }
}
```
Another issue I ran into while developing the project was what happens when a channel decides to delete a video that is already in a users list. The lists are stored in arrays, so if the video is deleted the item in the array is null. What I did to solve this was before the component mounts I filter out the falsy items and set the state according to the filtered array.

```javascript
componentWillMount = () => {
 this.setState({
  history: this.state.history.filter(Boolean),
  favorites: this.state.favorites.filter(Boolean),
  watchList: this.state.watchList.filter(Boolean)
 });
 localStorage.setItem('history', JSON.stringify(this.state.history));
 localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
 localStorage.setItem('watchList', JSON.stringify(this.state.watchList));
}
```

### The Results
![](https://res.cloudinary.com/dkutta9yu/image/upload/v1523191272/heyimnelson/discflix-project-5.jpg)
<span class="portfolio-img-wrapper-2">
![](https://res.cloudinary.com/dkutta9yu/image/upload/v1523191273/heyimnelson/discflix-project-6.jpg)
![](https://res.cloudinary.com/dkutta9yu/image/upload/v1523191272/heyimnelson/discflix-project-7.jpg)
</span>