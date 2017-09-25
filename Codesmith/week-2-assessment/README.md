# Week-2-Assessment

## Summary
Week 2 assessment will be used to assess your understanding of the material provided in the past week. At the end of the period, commit your work and submit a pull request to your branch name.

This code has been tested on and is intended to run on Node 5.X.

## Style Guide
We'll run your code through a linter configured with the [Airbnb style guide](https://github.com/airbnb/javascript) and provide you style feedback based on the results.

## How do I get started?
1. Run the following command to install external dependencies:
````
npm install
````
1. Complete the React App located in the `client/` directory according to the specifications below.
  - Follow the specifications closely and be sure to name classes correctly.
1. To start your app, run
````
npm start
````
1. To view your app, navigate your browser to `http://localhost:3000`

## Specification
1. Create a React app with the following Component hierarchy:
```
                  Feed
                    |
                    V
                  FeedItem
```
**Here is a sample of how the components should be nested.**
![](https://www.dropbox.com/s/lf38iqjec2nfjcs/instagram-feed_shrink.png?dl=1)

1. The image feed should be populated with data from the following endpoint. The `<App>` component in main.js should pass this url to the `Feed` component as a `prop` called `feedUrl`
  - **Important:** Make sure to name your prop `feedUrl`. Failure to name props and classes correctly for this exercise will cause tests to fail.
````
https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json
````
1. The `Feed` component should render a `<div>` with the ID `feed`
1. The `Feed` component should make an AJAX request to the `feedUrl` prop provided to it.
1. Upon completion of the AJAX request, `Feed` must use setState to add to the state a key named `urls` with its value being the array of URLs.
  - **Important:** Be sure to name the key `urls` for testing purposes.
1.  `Feed` must render a `FeedItem` component for each url in the `urls` array in its state object (these `FeedItem` components should be inside the `#feed` <div>)
1. The `Feed` component must pass each `FeedItem` its image url as a `prop` named `url`
1. The `FeedItem` component must render an `<img>` tag, using its `url` prop for the `src` attribute on the img tag.
1. The `<img>` tag for `FeedItem` must be inside a `<div>` with the class `feedItem`
1. **Bonus** - A `FeedItem` should remove itself from the DOM if its `<img>` tag fails to load for any reason.


## What do I do when I am done?
1. When completed - commit and push your changes to your github
1. Submit a pull request to your branch on the CodesmithLLC organization's repo
