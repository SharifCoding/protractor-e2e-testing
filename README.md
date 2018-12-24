# Protractor - end to end testing for Angular

![protractor](https://flexmanu.files.wordpress.com/2018/02/angular_protector.png)

Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.

### Table of Projects
- [First Protractor Test](./firstTest/README.md)
- [Simple Protractor Tutorial](./simpleTutorial/README.md)
- [E2E testing on NG-Pokédex app](./e2ePokemon/README.md)
- [My Test Project](./myTestProject/README.md)
- [E2E tests for a Pastebin app](./testPastebin/README.md)
- [Testing Login page with Protractor](./protractorTutorial/README.md)

### Setup
Use `npm` to install Protractor globally with:
```bash
npm install -g protractor
```
This will install two command line tools, `protractor` and `webdriver-manager`.

The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running.
```bash
# Use it to download the necessary binaries with:
webdriver-manager update

# Now start up a server with:
webdriver-manager start
```
This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at [http://localhost:4444/wd/hub](http://localhost:4444/wd/hub).

#### Further help
To get more help on the Protractor go check out the [protractortest.org](https://www.protractortest.org).
