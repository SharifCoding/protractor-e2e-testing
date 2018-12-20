describe('Protractor Demo', () => {

  beforeEach(() => {
    // The code here will get executed before each it block is called  
    browser.get('http://laserpants.github.io/pastebin-angular/#/');
  });
 
  it('should display the name of the application',() => {
   /* Expectations accept parameters that will be matched with the real value
   using Jasmine's matcher functions. eg. toEqual(),toContain(), toBe(), toBeTruthy() etc. */
   expect(browser.getTitle()).toEqual('Insignificant Pastebin App');
   expect(element(by.className('navbar-brand')).getText()).toContain('Insignificant Pastebin App');
  });
   
  it('should click the create Paste button',() => {
    expect(element(by.name('form')).isPresent()).toBeFalsy('The modal window shouldn\'t appear right now');
    element(by.partialLinkText('Paste code')).click();
    expect(element(by.name('form')).isPresent()).toBeTruthy('The modal window should appear now');    
  });

});
