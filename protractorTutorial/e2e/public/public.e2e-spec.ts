import { PublicPage } from './public.po';
import { browser } from 'protractor';

describe('protractor-tutorial - Public page', () => {
  let page: PublicPage;

  beforeEach(() => {
    page = new PublicPage();
  });

  it('when user browses to our app he should see the default “public” screen', () => {
    page.navigateTo();
    browser.sleep(4000);
    expect(page.getPageTitleText()).toEqual('Public');
  });
});