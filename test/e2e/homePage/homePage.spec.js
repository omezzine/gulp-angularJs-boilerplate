var AngularHomepage = require('./homePage.po.js');

describe('HomePage Tests', function() {
  var ptor,
  	  angularHomepage;

  beforeEach(function() {
   angularHomepage = new AngularHomepage();
   angularHomepage.get();
  });

  it('Should navigate to my homePage', function(){
  	var ele = by.id('main');
    expect(browser.isElementPresent(ele)).toBe(true);
  })

   

});