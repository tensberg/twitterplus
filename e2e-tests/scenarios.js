'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Twitter+', function() {

  browser.get('index.html');

  it('should automatically redirect to /select when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/select");
  });


  describe('select', function() {

    beforeEach(function() {
      browser.get('index.html#/select');
    });


    it('should render the account select when user navigates to /select', function() {
      expect(element.all(by.css('[ng-view] div div')).first().getText()).
        toMatch(/Twitter handle/);
    });

  });

});
