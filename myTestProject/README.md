# My Test Project

[Protractor](http://www.protractortest.org/#/) is an official library to used for writing E2E test suites with an Angular app, a wrapper over the Selenium WebDriverJS Api that translates its code and methods to WebDriver JS methods.

![Working of Automation Scripts using ProtractorJS](https://cdn-images-1.medium.com/max/1600/1*Uf4siFkuBeF2v1Fqw_goMw.png)

- Selenium Web Server listens to Selenium commands in a format called JSON Wire Protocol.
- The automation script written in WebDriver JS shoots these HTTP commands to the browser driver to `“drive”` or `“dictate”` the actions it needs to perform via Selenium web server.
- The server determines the steps needed to be performed by the web driver and execute them on the app being tested and send the status back to the automation script.

The [e2e](https://github.com/SharifCoding/protractor-e2e-testing/blob/master/myTestProject/e2e/) folder contain all necessary protractor files:
```bash
myTestProject
|-- e2e
    |-- src
    |   |-- app.e2e-spec.ts
    |   |-- app.po.ts
    |-- protractor.conf.js
    |--tsconfig.e2e.json
```
[app.e2e-spec.ts](https://github.com/SharifCoding/protractor-e2e-testing/blob/master/myTestProject/e2e/src/app.e2e-spec.ts/) is the main entry file of the automation script.
```ts
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to my-test-project!');
  });
});
```
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further Reading
- [Automate E2E testing of Angular apps with ProtractorJS & Jasmine](https://medium.com/paramsingh-66174/automate-e2e-testing-of-angular-4-apps-with-protractorjs-jasmine-fcf1dd9524d5) - Testing happens at various levels — Unit testing, Integration testing, End to End testing and more.
- [Jasmine Behavior-Driven JavaScript](https://jasmine.github.io/tutorials/your_first_suite) - Jasmine is a behavior-driven development framework for testing JavaScript code.
- [Promises](https://developers.google.com/web/fundamentals/primers/promises) - An Introduction to JavaScript Promises.
- [The Protractor Locators](http://www.protractortest.org/#/api?view=ProtractorBy) - These provide ways of finding elements in Angular applications by binding, model, etc.

#### [Return to main README](../README.md)
