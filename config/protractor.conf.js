// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    '../e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'firefox',
    marionette:true
  },
 // seleniumAddress: 'http://127.0.0.1:58967/hub',
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  firefoxPath: "C://Program Files (x86)//Mozilla Firefox//firefox.exe",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};
