'use strict';

/* Services */

var Streamitem = function(created) {
    this.created = created;
};

Streamitem.prototype.hasTweet = function() {
        return this.tweet !== undefined;
    };

Streamitem.prototype.hasGoogleplus = function() {
        return this.googleplus !== undefined;
    };

var twitterplusServices = angular.module('twitterplus.services', []);

twitterplusServices.factory('Twitter', [ '$http',
          function($http) {
              return {
                get: function(screenName, successFunc) {
                    return $http.get('examples/twitter-example.json?screen_name=:screenName').then(function(twitterStream) {
                        var stream = twitterStream.data.map(function(tweet) {
                            var item = new Streamitem(new Date(tweet.created_at));
                            item.tweet = tweet;
                            return item;
                        });
                        successFunc(stream);
                    });
                }
              };
          }]);

twitterplusServices.factory('GooglePlus',  [ '$http',
          function($http) {
            return {
                get: function(googleplus, successFunc) {
                    return $http.get('examples/googleplus-example.json?userId=:googleplus').then(function(googleplusStream) {
                        var stream = googleplusStream.data.items.map(function(activity) {
                            var item = new Streamitem(new Date(activity.published));
                            item.googleplus = activity;
                            return item;
                        });
                        successFunc(stream);
                    });
                  }
                }
          }]);
