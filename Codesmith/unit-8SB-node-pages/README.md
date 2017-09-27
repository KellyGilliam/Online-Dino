# Node Pages

## Summary
The purpose of this challenge is to understand server fundamentals - notably the request and response object.
![alt text](https://gregorybeamer.files.wordpress.com/2009/12/request_response5b35d.png).

Clients (browsers, mobile devices, and more) send requests to servers. The server's responsibility is to interpret the request and then respond with the the appropriate information. For example, the client might request the most recent 20 tweets from all of its friends. The server would process the request in the following order:

 - Find the user requesting the tweets
 - Find the friends of that user
 - Find their most recent tweets
 - Sort the tweets
 - Give the client what was requested via the response object

All of this information can be gathered based on the information in the request object. If, however, the server is unable to provide the data the client requested, then the response object is returned with information about the error. The most common error the response object provides is the 404 error:
![alt text](http://www.404errorpages.com/images/image003.png)

## How do I get started?
1. A node http server has been started for you in the `src/server.js` file. Add more code to have the server serve the `index.html` page on a GET request. (For this exercise, do not use Express or any other Node framework.) Run your server with the following command:

````
npm start
````

To exit the server, press `ctrl+C`
 **Note: Whenever you make changes to your server, you will need to restart your server by exiting your server then opening it again.**

1. When you successfully serve the index.html page, have your server respond to a POST request to the url `/button` with the text "hello". (Notice how we've set up the POST request functionality for you in index.html.)

## How do I test if my answer is correct?
There are two ways to test your code:
 - start your node server and visit `http://localhost:3000/`
 - run the following command in your terminal `npm test`

## Extension Work
1. Have your server respond to GET requests for `/style.css`. Where is this being requested?

1. Set up a templating engine so you can write your pages in a templating language. If you don't know which one to pick some great ones are
  1. [markdown](http://daringfireball.net/projects/markdown/)
  1. [pug](https://pugjs.org/) (formerly `jade`)
