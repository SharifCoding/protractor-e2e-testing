describe('Protractor Demo', () => {

  beforeEach(() => {
    browser.get('http://laserpants.github.io/pastebin-angular/#/');
  });
 
  it('should display the name of the application',() => {
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('Insignificant Pastebin App');
    expect(element(by.className('navbar-brand')).getText()).toContain('Insignificant Pastebin App');
  });
   
  it('should click the create Paste button',() => {
    browser.sleep(1000);
    expect(element(by.name('form')).isPresent()).toBeFalsy('The form shouldn\'t appear right now');
    element(by.partialLinkText('Paste code')).click();
    browser.sleep(1000);
    expect(element(by.name('form')).isPresent()).toBeTruthy('The form should appear now');    
  });

  it('should accept and save input values', () => {
    element(by.partialLinkText('Paste code')).click();

    // send input values to the form using sendKeys
    element(by.name('title')).sendKeys('Hello world in Javascript');
    element(by.cssContainingText('option', 'Javascript')).click();
    element(by.name('body')).sendKeys('console.log(\"Hello, World!\");');
    element(by.css('input[type="submit"]')).click();
    browser.sleep(2000);

    // expect the table to contain the new paste
    const lastRow = element.all(by.tagName('tr')).last();
    expect(lastRow.getText()).toContain("Hello world in Javascript");
});
});
