'use strict';

describe('Twitter+ controllers', function() {
    beforeEach(module('twitterplus.services'));
    beforeEach(module('twitterplus.controllers'));

    describe('SelectAccountsCtrl', function() {
        var scope, ctrl;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('SelectAccountsCtrl', {$scope:scope});
        }));

        it('should initialize accounts to be empty', function() {
            expect(scope.twitter).toBe('');
            expect(scope.googleplus).toBe('');
        });

        it('should enable show if both accounts are set', function() {
            expect(scope.isShowEnabled()).toBe(false);
            scope.twitter = 'foo';
            expect(scope.isShowEnabled()).toBe(false);
            scope.googleplus = 'bar';
            expect(scope.isShowEnabled()).toBe(true);
            scope.twitter = '';
            expect(scope.isShowEnabled()).toBe(false);
        });
    });
});
