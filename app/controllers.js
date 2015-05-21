'use strict';

/* Controllers */

var twitterplusControllers = angular.module('twitterplus.controllers', ['twitterplus.services']);

twitterplusControllers.controller('SelectAccountsCtrl', ['$scope', '$rootScope', '$location',
          function($scope, $rootScope, $location) {
            $scope.twitter = $scope.googleplus = '';
            $scope.showStreams = function() {
                  $rootScope.accounts = {
                      twitter: $scope.twitter,
                      googleplus: $scope.googleplus,
                    };
                  $location.path('show');
              };
              
              $scope.isShowEnabled = function() {
                return $scope.twitter.length > 0 && $scope.googleplus.length > 0;
              };
          }]);

twitterplusControllers.controller('ShowStreamsCtrl', ['$scope', '$rootScope', 'Twitter', 'GooglePlus',
        function($scope, $rootScope, Twitter, GooglePlus) {
                $scope.twitter = $rootScope.accounts !== undefined ? $rootScope.accounts.twitter : 'Twitter Demo';
                $scope.googleplus = $rootScope.accounts !== undefined ? $rootScope.accounts.googleplus : 'Google+ Demo';
                
                var reload = function() {
                      $scope.twitterStream = [];
                      Twitter.get({twitter:$scope.twitter}, function(tweets) { 
                          $scope.twitterStream = $scope.twitterStream.concat(tweets);
                      });
                      $scope.googleplusStream = GooglePlus.get({googleplus:$scope.googleplus});
                      };
                      
                $scope.reload = reload;
                reload();
           }]);

