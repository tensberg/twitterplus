# Twitterplus

Integrated view of Twitter and Google+ feeds.

Toy project for learning AngularJS.

[![Build Status](https://travis-ci.org/tensberg/twitterplus.svg?branch=master)](https://travis-ci.org/tensberg/twitterplus)

To try out:

1. `npm install`
2. `npm start`
3. open [http://localhost:3000/](http://localhost:3000/)
4. Enter Twitter handle and Google+ name. (They are currently irrelevant because only static demo data is shown.)

To use live Twitter API:

1. Set environment variables with Twitter credentials (see express/app.js).
2. Set demoMode to false in app/controllers.js.
3. Start server and open app. 

Todo:

* Error handling.
* Nicer page formatting.
* Improve unit test coverage.
* Improve E2E test coverage.
* Real API access using OAuth for Google+.
* Post Tweets to Google+ and vice versa.
