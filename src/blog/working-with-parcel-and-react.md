---
title: "Using Parcel with a React Project"
date: "2018-06-21"
---

When you're working with React, most of the projects you come across use webpack. Before webpack 4, it could take hours getting the configuration file set up how you want.  This is where [Parcel](https://parceljs.org/) really shines. Parcel's slogan is "Blazing fast, zero-configuration web application bundler", and it truly does all of that.

Here are a few things it can do with zero-config right out of the box.
- Use the `import()` syntax
- Hot module replacement so you can instantly see the changes you make in the browser
- Transforms `es6` and `SASS` to `es5` and `CSS`
- Compiles TypeScript down to vanilla JavaScript

![](https://media.giphy.com/media/SJX3gbZ2dbaEhU92Pu/giphy.gif)

### The Basics
Getting set up is a breeze. Just install the parcel-bundler wherever you'd like. I installed it globally.

```javascript
npm install -g parcel-bundler`
```

After that, you'll need to create a `package.json` file in the root directory of your project folder. 

```javascript
npm init -y
```

The next thing you need to do is create a `src` directory that your `HTML`,`JavaScript`, and `CSS` files will live. Inside the `src` directory, make sure you have created an `index.html` as well as an `index.js` file. These will be the entry points that Parcel uses.

Inside your `package.json` file you need to add the following:

```javascript
  "scripts": {
    "dev": "parcel ./src/index.html",
    "build": "parcel build ./src/index.html"
  }
 ```
 
 So when you run `npm run dev`, Parcel starts a development server and watches for changes in your files. You can open [http://localhost:1234](#) in your browser to see your app.

### Working with React
To bring React into the project, you'll need to run this command.

```javascript
npm install react react-dom
```

Since React is written in es6, you have to install these presets below to help transform the code down.

```javascript
npm install --save-dev babel-preset-env babel-preset-react
```

This step is optional, but if you're wanting to write your component's methods as arrow functions, you'll need to run `npm install --save-dev transform-class-properties` as well. 

Once those are installed, create a `.babelrc` file and type the following.

```javascript
{
  "presets": ["env", "react"],
  "plugins": ["transform-class-properties"]
}
```

Now you can open up the `index.html` file and make sure the body is empty of all elements except for a `div` to render your React app with and a `script` tag linking to your `index.js` file.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React & Parcel</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./src/index.js"></script>
  </body>
</html>
```

Next, in your `index.js` file you'll want to add the following.

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom;

class MyParcelMessage extends Component {
  render() {
    return (
      <h1>I'm built with React & Parcel!</h1>
   )
  }
}

ReactDOM.render(<MyParcelMessage  />, document.getElementById('app'));
```

Once you've made it this far, you've got it! You can start extending it with more components, importing images into the .js files, importing CSS and SASS into the .js files, and building whatever you want to.

### Deploying
After you've got your project built and uploaded to GitHub (GitLab and Bitbucket work fine too), you'll want to deploy online for other people to see, right? I typically use [Netlify](https://www.netlify.com/) and I can't recommend it enough. All you have to do is create a new project and link it to your repository, in the build settings add the command `npm run build` and now whenever you make changes to the projects repository it automatically builds and deploys the site for you. Can't get more simple than that.

All in all Parcel is really cool and it's been fun building a few projects with it. I can't wait to see where it goes from here!