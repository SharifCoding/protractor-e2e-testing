# First Protractor Test

A simple test that navigates to the todo list example in the [AngularJS](https://angularjs.org/#add-some-control) website and adds a new todo item to the list.

Protractor needs two files to run, a `spec` file and a `configuration` file. By default, Protractor uses the Jasmine test framework for its testing interface.
```js
// todo-spec.js:
describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    // loads web site "https://angularjs.org"
    browser.get('https://angularjs.org');

    // looks for ng-model "todoList.todoText" found in form and sendKeys()
    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    // clicks "add" button found in input tag
    element(by.css('[value="add"]')).click();
    // "by.repeater" is the method in protractor which can fetch specified index or list item
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    // counts "3" items in todo list
    expect(todoList.count()).toEqual(3);
    // todo list[2] equals to "write first protractor test"
    expect(todoList.get(2).getText()).toEqual('write first protractor test');
    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});
```
The `describe` (test suite) and `it` (test case) syntax is from the Jasmine framework. `browser` is a global created by Protractor, which is used for browser-level commands such as navigation with `browser.get`.
```js
// conf.js:
exports.config = {
  // selenium server url
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // test files location
  specs: ['todo-spec.js']
};
```
This configuration tells Protractor where the test files (specs) are, and where to talk to your Selenium Server (seleniumAddress). It will use the defaults for all other configuration. Chrome is the default browser. Java Development Kit (JDK) need to be installed to run the standalone Selenium Server. 

Now run the test with:
```bash
## run server in terminal 1
webdriver-manager start
## run test script in terminal 2
protractor conf.js
```
Chrome browser window open up and navigate to the todo list in the AngularJS page, then close itself. Command `browser.sleep(5000)` used to delay each test steps.
```bash
Apples-MBP:firsttest$ protractor conf.js
[16:18:40] I/launcher - Running 1 instances of WebDriver
[16:18:40] I/hosted - Using the selenium server at http://localhost:4444/wd/hub
Started
Jasmine started
.
  angularjs homepage todo list
    ✓ should add a todo

1 spec, 0 failures
Finished in 3.263 seconds

Executed 1 of 1 spec SUCCESS in 3 secs.
[16:18:45] I/launcher - 0 instance(s) of WebDriver still running
[16:18:45] I/launcher - chrome #01 passed
```

#### Further Reading
- [protractortest.org](https://www.protractortest.org) - Protractor is an end-to-end test framework for Angular and AngularJS applications.

#### [Return to main README](../README.md)
