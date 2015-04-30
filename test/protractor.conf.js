/* - For more details about portractor http://angular.github.io/protractor/#/ 
*  - See a full list of available options for a config.js 
*  https://github.com/angular/protractor/blob/master/docs/referenceConf.js
*  - Good doc here http://ramonvictor.github.io/protractor/slides/#/
*/

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://127.0.0.1:8080/',

  capabilities: {
    'browserName': 'chrome'
  },

  jasmineNodeOpts: {
    showColors: true
  },

  specs: ['e2e/**/*spec.js']
  
};