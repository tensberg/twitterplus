'use strict';

/* Services */

var twitterplusServices = angular.module('twitterplus.services', ['ngResource']);

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

twitterplusServices.factory('GooglePlus',  [ '$resource',
          function($resource) {
              return $resource('examples/googleplus-example.json?userId=:googleplus');
          }]);
