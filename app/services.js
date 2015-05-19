'use strict';

/* Services */

var twitterplusServices = angular.module('twitterplus.services', ['ngResource']);

twitterplusServices.factory('Twitter', [ '$resource',
          function($resource) {
              return $resource('examples/twitter-example.json?screen_name=:twitter', {}, { 'get':  {method:'GET', isArray:true} });
          }]);

twitterplusServices.factory('GooglePlus',  [ '$resource',
          function($resource) {
              return $resource('examples/googleplus-example.json?userId=:googleplus');
          }]);
