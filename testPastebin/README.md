# E2E tests for a Pastebin app

Writing E2E tests for a basic [Pastebin](http://laserpants.github.io/pastebin-angular/#/) application. And writing E2E tests using Page Objects by encapsulating information about the elements on the application page.

### Test Scenarios
- The application will initially load a message "You have not yet pasted any code snippets".
- Selecting either "Click here to get started!" or "Paste Code" opens up a bootstrap modal window.
- The modal window displays the paste data with options to edit and save the paste.
- Each row in the table is selectable via the title, when clicked on, isplays the paste data.

The [pastebin-specPO.js](https://github.com/SharifCoding/protractor-e2e-testing/blob/master/testPastebin/pastebin-specPO.js) is the spec file with Page Objects appied which works alongside the [paste-objects.js](https://github.com/SharifCoding/protractor-e2e-testing/blob/master/testPastebin/paste-objects.js) file.

Running the test:
```bash
## run server in terminal 1
webdriver-manager start
## run test script in terminal 2
protractor conf.js
```

### Jasmine Output
```bash
[20:16:26] I/launcher - Running 1 instances of WebDriver
[20:16:26] I/hosted - Using the selenium server at http://localhost:4444/wd/hub
Started
Jasmine started
.
  Protractor Demo
    ✓ should display the name of the application
.    ✓ should click the create Paste button
.    ✓ should accept and save input values

.  Protractor Demo - Page Object
    ✓ should display the name of the application
.    ✓ should click the Paste Code button
.    ✓ should accept and save input values

6 specs, 0 failures
Finished in 10.617 seconds

Executed 6 of 6 specs SUCCESS in 11 secs.
[20:16:38] I/launcher - 0 instance(s) of WebDriver still running
[20:16:38] I/launcher - chrome #01 passed
```

#### Further Reading
- [E2E tests for a Pastebin app](https://code.tutsplus.com/tutorials/getting-started-with-end-to-end-testing-in-angular-using-protractor--cms-29318) - Getting Started With End-to-End Testing in Angular Using Protractor.
- [Using Page Objects to Organize Tests](http://www.protractortest.org/#/page-objects) - Page Objects help you write cleaner tests by encapsulating information about the elements on your application page.
- [Organizing test suites with Protractor](https://codeburst.io/organizing-test-suites-with-protractor-ed2150718072) - A test suite is a collection of test cases or specs designed to test a program for checking a particular behavior.

#### [Return to main README](../README.md)
