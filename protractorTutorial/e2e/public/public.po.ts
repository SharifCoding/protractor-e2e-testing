import { browser, by, element } from 'protractor';

export class PublicPage {
  navigateTo() {
    // we can navigate to '/' for get public page since this is the default route
    return browser.get('/');
  }

  getPageTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  logOut() {
    return element(by.css('a[href="/login"]')).click();
  }
}
