# Simple Protractor Tutorial

Another simple tutorial that shows how to set up Protractor and start running tests.

#### Prerequisites
- Protractor is a Node.js program. To run, Node.js will need to be installed.
- Protractor package downloaded using npm, which comes with Node.js.
- Protractor uses the Jasmine testing framework by default.
- Will be using a local standalone Selenium Server to control browsers.
- Java Development Kit ([JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html)) has to be installed to run the standalone Selenium Server.

### Write a Test
Create a simple test that navigates to an AngularJS application [Super Calculator](http://juliemr.github.io/protractor-demo/) application, and checks its title. 

Protractor needs two files to run, a `spec` file and a `configuration` file.
```js
// spec.js
// The `describe` and `it` syntax is from the Jasmine framework.
// `browser` is a global created by Protractor, which is used for browser-level commands.
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});

// conf.js
// This configuration tells Protractor where the test files are, and where to talk to the Selenium Server.
// It specifies that Jasmine will be used for the test framework.
// It will use the defaults for all other configuration. Chrome is the default browser.
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']
}
```

### Interacting with Elements
Modify the test to interact with elements on the page to include the following:
```js
...
  it('should add one and two', function() {
    ...
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);
    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('3');
  });
...
```
This uses the globals `element` and `by`, which are created by Protractor. The `element` function is used for finding HTML elements on the webpage. It returns an `ElementFinder` object, which can be used to interact with the element or get information from it. In this test, using `sendKeys` to type into `<input>s`, `click()` to click a button, and `getText` to return the content of an `element`.

`element` takes one parameter, a `Locator`, which describes how to find the element. The `by` object creates `Locators`. Types of `Locators`:

- `by.model('first')` to find the element with ng-model="first". Inspect the Calculator page source, this locator points to `<input type="text" ng-model="first">`.
- `by.id('gobutton')` to find the element with the given id. This finds `<button id="gobutton">`.
- `by.binding('latest')` to find the element bound to the variable latest. This finds the span containing `{{latest}}`.

### Final Result
```bash
Apples-MBP:simpleTutorial$ protractor conf.js
[15:33:08] I/launcher - Running 1 instances of WebDriver
[15:33:08] I/hosted - Using the selenium server at http://localhost:4444/wd/hub
Started
Jasmine started
.
  Protractor Demo App
    ✓ should have a title
.    ✓ should add one and zero
.    ✓ should divide four by two
.    ✓ should modular five by two
.    ✓ should multiple two and two
.    ✓ should substract seven by two
.    ✓ should add five and one

7 specs, 0 failures
Finished in 13.494 seconds

Executed 7 of 7 specs SUCCESS in 13 secs.
[15:33:23] I/launcher - 0 instance(s) of WebDriver still running
[15:33:23] I/launcher - chrome #01 passed
```

#### Further Reading
- [protractortest.org](https://www.protractortest.org/#/tutorial) - This is a simple tutorial that shows you how to set up Protractor and start running tests.
- [Using Locators](https://www.protractortest.org/#/locators) - Learn more about locators and ElementFinders.

#### [Return to main README](../README.md)
