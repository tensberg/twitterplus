'use strict';

/* Services */

var twitterplusServices = angular.module('twitterplus.services', []);

twitterplusServices.factory('Twitter', [ '$http',
          function($http) {
              return {
                get: function(screenName, successFunc) {
                    return $http.get('examples/twitter-example.json?screen_name=:screenName').then(function(twitterStream) {
                        var stream = twitterStream.data.map(function(tweet) {
                            return {
                                created: Date.parse(tweet.created_at),
                                'tweet': tweet
                            };
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
                            return {
                                created: Date.parse(activity.published),
                                googleplus: activity
                            };
                        });
                        successFunc(stream);
                    });
                  }
                }
          }]);
