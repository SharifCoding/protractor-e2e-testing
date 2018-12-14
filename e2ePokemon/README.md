# E2E testing on NG-Pokédex app

Creating an end to end testing (E2E) on Angular Pokédex app, an [NG-Pokédex](https://ng-pokedex.firebaseapp.com/pokemon) app which allows users to view and search Pokemon characters.

End to end testing (E2E) or also known as integration testing to make sure at a high-level overview that an applications function correctly. E2E tests are not Unit tests. Unit tests should test a small isolated piece of code while the E2E test is a high-level test of a feature or several interactions.

The NG-Pokédex app allows users to view and search Pokemon characters. The E2E tests can open the app in the browser and interact with it to make sure the feature works correctly. 

The E2E tests are powered by the Protractor testing library, an E2E test runner that can take scenario tests and run them in the browser. The test code is a Jasmine testing library that provides all the assertion and utility functions needed to write unit and E2E tests.

Now run the test with:
```bash
## run server in terminal 1
webdriver-manager start
## run test script in terminal 2
protractor conf.js
```
In this test, click the first Pokémon card opening the modal component. Once opened, trigger arrow key events and check that the view updates with different Pokémon by checking the heading value. Jasmine result outputted:
```bash
Apples-MBP:e2ePokemon$ protractor conf.js
[20:39:00] I/launcher - Running 1 instances of WebDriver
[20:39:00] I/hosted - Using the selenium server at http://localhost:4444/wd/hub
Started
Jasmine started
.
  E2E testing on NG-Pokédex app
    ✓ getTitle "Search for Pokémon"
.    ✓ should display a list of pokemon
.    ✓ should open and view a particular pokemon
.    ✓ should open and allow arrow keys to navigate between pokemon

4 specs, 0 failures
Finished in 4.662 seconds

Executed 4 of 4 specs SUCCESS in 5 secs.
[20:39:06] I/launcher - 0 instance(s) of WebDriver still running
[20:39:06] I/launcher - chrome #01 passed
Apples-MBP:e2ePokemon$
```

#### Further Reading
- [Introduction to E2E Testing with the Angular CLI and Protractor](https://coryrylan.com/blog/introduction-to-e2e-testing-with-the-angular-cli-and-protractor) - End to end testing (E2E) or also known as integration testing is a great way to make sure at a high-level overview that our applications function correctly.

#### [Return to main README](../README.md)
