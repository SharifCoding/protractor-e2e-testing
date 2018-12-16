# Testing Login page with Protractor

Testing a login app with protractor where user should login with credentials.

For demonstrating protractor, will be using a testing login angular application with some behavior implemented. Key details about the app:
- the app consist from login page where user should login with credentials
- public page that should be accessible even for not logged in users
- protected page that can be visible only for authenticated users

### Test Scenarios
List of scenarios to be tested with protractor:
- when user browses to the app, should see the default “public” screen.
- when not authenticated user tries to access “protected” page, should redirect to “login” page.
- when user trying to login with wrong credentials, should stay on “login” page and see “error” message.
- when login is successful, should redirect to default “public” page.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

#### Further Reading
- [Building Your First Tests For Angular5 With Protractor](https://blog.cloudboost.io/building-your-first-tests-for-angular5-with-protractor-a48dfc225a75) - Testing happens at various levels — Unit testing, Integration testing, End to End testing and more.
- [Angular JWT Authentication Example & Tutorial](http://jasonwatmore.com/post/2016/08/16/angular-2-jwt-authentication-example-tutorial) - The following is a custom example of how to setup a simple login page using Angular 2/5 and JWT authentication.

#### [Return to main README](../README.md)
