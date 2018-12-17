import { ProtectedPage } from './protected.po';
import { PublicPage } from '../public/public.po';
import { LoginPage } from '../login/login.po';
import { browser } from 'protractor';

describe('protractor-tutorial - Protected page', () => {
  let page: ProtectedPage;
  let publicPage: PublicPage;
  let loginPage: LoginPage;
  beforeEach(() => {
    page = new ProtectedPage();
    publicPage = new PublicPage();
    loginPage = new LoginPage();
  });

  it('when not authenticated user tries to access “protected” page he should redirect to “login” page and see error notification', () => {
    publicPage.navigateTo();
    // must be logged out before trying access "protected" page
    publicPage.logOut();
    page.navigateTo();
    browser.sleep(4000);
    expect(loginPage.getPageTitleText()).toEqual('Login');
  });

  it(`not authenticated user tries to access “protected” page and after being redirected to “login” screen, after successful
   login he should redirect to  “protected”`, () => {
    publicPage.navigateTo();
    // must be logged out before trying access "protected" page
    publicPage.logOut();
    page.navigateTo();
    loginPage.fillCredentials();
    browser.sleep(4000);
    expect(page.getPageTitleText()).toEqual('Protected');
  });
});
