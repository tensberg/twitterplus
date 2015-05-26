'use strict';

/* Controllers */

var demoMode = true;

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

twitterplusControllers.controller('ShowStreamsCtrl', ['$scope', '$rootScope', '$location', 'Twitter', 'GooglePlus',
        function($scope, $rootScope, $location, Twitter, GooglePlus) {
                $scope.viewMode = 'unified';
                $scope.newestFirst = true;
        
                $scope.twitter = $rootScope.accounts !== undefined ? $rootScope.accounts.twitter : '_tensberg_';
                $scope.googleplus = $rootScope.accounts !== undefined ? $rootScope.accounts.googleplus : 'tensberg@gmail.com';
                
                $scope.hasTweet = function(item) {
                    return item.tweet !== undefined;
                };
                
                $scope.hasGoogleplus = function(item) {
                    return item.googleplus !== undefined;
                };
                
                $scope.showSelect = function() {
                   $location.path('select');
                } 

                var reload = function() {
                      $scope.stream = [];
                      Twitter.get(demoMode, $scope.twitter, function(tweets) { 
                          $scope.stream = $scope.stream.concat(tweets);
                      });
                      GooglePlus.get($scope.googleplus, function(tweets) { 
                          $scope.stream = $scope.stream.concat(tweets);
                      });
                  };
                      
                $scope.reload = reload;
                reload();
           }]);

twitterplusControllers.directive('streamitem', 
        function() {
            return {
                restrict: 'E',
                scope: { item : '=' },
                templateUrl: 'partials/streamitem.html'
            };
        });
