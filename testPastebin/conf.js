let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // protractor conf.js --suites
  suites: {
    // protractor conf.js --suite without_po
    without_po: 'pastebin-spec.js',
    // protractor conf.js --suite with_po
    with_po: 'pastebin-specPO.js'
  },
  onPrepare: () => {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  }
};
