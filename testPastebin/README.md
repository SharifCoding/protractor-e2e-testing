# E2E tests for a Pastebin app

Writing E2E tests for a basic [Pastebin](http://laserpants.github.io/pastebin-angular/#/) application. 

### Test Scenarios
- The application will initially load a message "You have not yet pasted any code snippets".
- Selecting either "Click here to get started!" or "Paste Code" opens up a bootstrap modal window.
- The modal window displays the paste data with options to edit and save the paste.
- Each row in the table is selectable via the title, when clicked on, isplays the paste data.

Running the test:
```bash
## run server in terminal 1
webdriver-manager start
## run test script in terminal 2
protractor conf.js
```

### Jasmine Output
```js
[20:16:26] I/launcher - Running 1 instances of WebDriver
[20:16:26] I/hosted - Using the selenium server at http://localhost:4444/wd/hub
Started
Jasmine started
.
  Protractor Demo
    ✓ should display the name of the application
.    ✓ should click the create Paste button
.    ✓ should accept and save input values

3 specs, 0 failures
Finished in 8.562 seconds

Executed 3 of 3 specs SUCCESS in 9 secs.
[20:16:38] I/launcher - 0 instance(s) of WebDriver still running
[20:16:38] I/launcher - chrome #01 passed
```

#### Further Reading
- [E2E tests for a Pastebin app](https://code.tutsplus.com/tutorials/getting-started-with-end-to-end-testing-in-angular-using-protractor--cms-29318) - Getting Started With End-to-End Testing in Angular Using Protractor.

#### [Return to main README](../README.md)
