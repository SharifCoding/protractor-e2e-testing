# Testing Login page with Protractor

Testing a login app with protractor where user should login with credentials.

### Test Scenarios
List of scenarios to be tested with protractor:
- User browses to the app, should see the default “public” screen.
- Not authenticated user tries to access “protected” page, should redirect to “login” page.
- User trying to login with wrong credentials, should stay on “login” page and see “error” message.
- Login is successful, should redirect to default “public” page.

It's common practice to divide each of protractor specs to `specs` themselves and `po`'s (Page objects).
While `spec` part contains the tests code, the `po` part — exports various selectors and methods specific to the page.

![files structure](https://cdn-images-1.medium.com/max/1600/1*QBEkS2JCR35sJCHtWlDNzQ.png)

### Jasmine result
```bash
Apples-MacBook-Pro:protractorTutorial$ ng e2e
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

...
Jasmine started

  protractor-tutorial - Public page
    ✓ when user browses to our app he should see the default “public” screen

  protractor-tutorial - Login page
    ✓ when user trying to login with wrong credentials he should stay on “login” page and see error notification
    ✓ when login is successful — he should redirect to default “public” page

  protractor-tutorial - Protected page
    ✓ when not authenticated user tries to access “protected” page he should redirect to “login” page and see error notification
    ✓ not authenticated user tries to access “protected” page and after being redirected to “login” screen, after successful
       login he should redirect to  “protected”

Executed 6 of 6 specs SUCCESS in 33 secs.
[19:00:28] I/launcher - 0 instance(s) of WebDriver still running
[19:00:28] I/launcher - chrome #01 passed
```
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

#### Further Reading
- [Building Your First Tests For Angular5 With Protractor](https://blog.cloudboost.io/building-your-first-tests-for-angular5-with-protractor-a48dfc225a75) - Testing happens at various levels — Unit testing, Integration testing, End to End testing and more.
- [Angular JWT Authentication Example & Tutorial](http://jasonwatmore.com/post/2016/08/16/angular-2-jwt-authentication-example-tutorial) - The following is a custom example of how to setup a simple login page using Angular 2/5 and JWT authentication.

#### [Return to main README](../README.md)
