---
title: "Making my first Chrome extension (hiding results from google search)"
date: "2018-04-07"
---

 I was going through a Google image search the other day (trying to find some design inspiration), and Pinterest images were everywhere. With Pinterest, you can't see a high-resolution image unless you sign up for an account with their site. With each search, I would have to add `-site:pinterest.com`, which works great to filter out the results from pinterest.com, but gets to be a lot if you're making more than a few searches. I thought to myself that if I could automatically add that to my search that it'd be a great concept for an extension and set out to build my first Chrome extension.

### What is an extension anyway?
An [extension](https://developer.chrome.com/extensions) is just a small piece of software that adds more functionality to Chrome. Think adblockers and password managers. They're built with HTML, CSS, and Javascript and can be made to work on all pages with a [`"browser_action"`](https://developer.chrome.com/extensions/browserAction), only on certain pages with a [`"page_action"`](https://developer.chrome.com/extensions/pageAction), or inject javascript into pages using [`"content_scripts"`](https://developer.chrome.com/extensions/content_scripts).

I'm going to be using [`"content_scripts"`](https://developer.chrome.com/extensions/content_scripts) for mine since I want to inject a `string` into the search bar.

### Starting the project
The first thing we need to do is get an empty directory set up, so open up your terminal and use `mkdir hide-pinterest && cd hide-pinterest` to create an empty folder named `hide-pinterest` for all the files in this project and move to inside the folder.

Next thing we need to do is enter `touch manifest.json` to create our [manifest](https://developer.chrome.com/apps/manifest), which just provides some important information for our extension. We'll also need a file for our javascript, so we'll enter `touch main.js` as well. Now that the `manifest.json` file is created, open it up in your editor of choice and enter this information.

```javascript
{
  "name": "hide-pinterest",
  "version": "1.0",
  "description": "An Extension that hides pinterest.com from showing up!",
  "manifest_version": 2,
  "content_scripts": [
    {
      "matches": [
        "*://*.google.com/*"
      ],
      "js": [
        "main.js"
      ]
    }
  ]
}
```

The important part here is `"content_scripts"`. This will inject `main.js` into any webpage that matches the URL patterns inside the `"matches"` array. So the above pattern in our `manifest.json` will inject the javascript file into `google.com`, `www.google.com`, `https://google.com`, and any other domain that matches the pattern. We can extend it to more Google domains easily by using their list of [supported domains](https://www.google.com/supported_domains).

### The logic
The first thing we need to do inside `main.js` is to start creating our module for the extension.
```javascript
const noPinterest = (function() {
  const injectText = function() {
    // put the logic here
  }
  return {
    hide: function() {
      injectText();
    }
  }
})();

noPinterest.hide(); // calls the hide function
```

Since we want to inject the text into the search bar, we'll need to wrap the contents of `injectText()` inside of a `onbeforeunload` event handler. This event runs when the "document is about to be unloaded". This works perfectly for this extension since it'll run as soon as we hit `enter` to start our search.

```javascript
const injectText = function() {
    window.onbeforeunload = function() {
        // put the logic here
    }
}
```

The next thing we need to do is figure out where we're going to inject the text into. We need to go to `google.com` and open up the developer tools with `f12`. Use the inspect element tool to get the `id` of the search bar.

!['insert image of dev tools](https://res.cloudinary.com/dkutta9yu/image/upload/v1524077565/blog/google-input.jpg "google input id")

The selector is `input#lst-ib.gsfi`, we'll use `#lst-ib` to select it with `getElementById`.

```javascript
const injectText = function() {
    window.onbeforeunload = function() {
      const googleInput = document.getElementById('lst-ib');
    }
}
```
Now that we know where to inject the text, we can change the value of the input to hide Pinterest. With Google, if you add `-site:domain.com` to your search, it will exclude results from that specific domain. Knowing this, we can set up our function to add ` -site:pinterest.com` to our input `value`. Notice the space before to keep the string separated.

```javascript
const injectText = function() {
    window.onbeforeunload = function() {
      const googleInput = document.getElementById('lst-ib');
      googleInput.value += ' -site:pinterest.com';
    }
}
```

It will work now but we see `-site:pinterest.com` flash up inside the input form. It's fine if you don't mind it but I didn't want to see it for each search. A quick workaround is to just change the `color` of the text to match the input `background`.

```javascript
const injectText = function() {
    window.onbeforeunload = function() {
      const googleInput = document.getElementById('lst-ib');
      googleInput.style.color = '#ffffff'; // changes the text color to white
      googleInput.value += ' -site:pinterest.com';
    }
}
```

### Loading the extension in Chrome
The last step is to load it into Chrome. Type `chrome://extensions` into the address bar to browse to your extensions page. Make sure `Developer Mode` is enabled so that you'll be able to load unpacked extensions. Click `load unpacked` and browse to the `hide-pinterest` directory to select it. Once it's loaded, you can test it out and you won't be bothered to sign-in to Pinterest anymore!

