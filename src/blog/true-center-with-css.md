---
title: "Different ways to center elements with CSS"
date: "2018-04-21"
---

As a front-end developer, I've got to center stuff all of the time, whether it's icons or headlines, it's important to know how to do it. I got asked recently "How would I center an element inside a `div` without using `flexbox`?" I said "I would...ummm...I think I would have to Google it". I've been using `flexbox` so much (and it's really great at what it does) that the other methods just slipped my mind. So I went and brushed up on the material and now I'm here with a few ways to center elements with `CSS`.
![alt text](https://media.giphy.com/media/uUXrdaSBfMpq/giphy.gif "CSS Centering")
### Flexbox (my favorite way)
This is probably the simplest way, only three lines of `CSS`. You style the `parent` element with this and all of the `children` of that element will be both horizontally and vertically centered.
```css
.parent-element {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
I like to create a SASS `mixin` with this so I can easily reuse it.
```sass
@mixin true-center {
  display: flex;
  justify-content: center;
  align-items: center; 
}
```

```css
.parent-element {
  @include true-center;
}
```

### Grid
If you can use `grid` in production, then this works great. But unfortunately all of it's features aren't supported by all of the browsers yet.
```css
.parent-element {
  width: 100%;
  height: 100%;
  display: grid;
}

.centered-element {
  margin: auto;
}
```

### transform: translate(-50%, -50%)
This method uses `position: relative;` on the parent element and `position: absolute;` with the `transform` property on the child element to `translate` it directly to the middle of the parent element.
```css
.parent-element {
  position: relative;
}

.centered-element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### display: table
This last method I've never used but felt that I should include it anyway. It uses `display: table-cell` on the parent element to center all of the content inside. The `html` will look like this.
```html
<div class="container-element">
  <div class="parent-element">
      <!--Your Content Goes Here -->
  </div>  
</div>
```
And the `CSS` will look like this.
```css
.container-element {
  width: 100vw;
  height: 100vh;
  display: table;
}

.parent-element {
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
```