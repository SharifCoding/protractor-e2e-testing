import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Public message', () => {
    page.navigateTo();
    browser.sleep(4000);
    expect(page.getParagraphText()).toEqual('Public');
  });
});
