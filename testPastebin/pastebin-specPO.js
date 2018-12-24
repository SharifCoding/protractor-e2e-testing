const Pastebin = require('./page-objects.js');

describe('Protractor Demo - Page Object', () => {
  const pasteCodeTitle = 'Hello world in Javascript';
  const pasteCodeBody = 'Hello world in Javascript';

  beforeEach(() => {
    Pastebin.navigateToHome();
  });
 
  it('should display the name of the application',() => {
    expect(Pastebin.getPastebin()).toEqual('Insignificant Pastebin App');
    expect(Pastebin.getPastebinHeading()).toContain('Insignificant Pastebin App');
  });
   
  it('should click the Paste Code button',() => {
    expect(Pastebin.isFormPresent()).toBeFalsy('The form shouldn\'t appear right now');
    Pastebin.clickPasteCodeButton();
    expect(Pastebin.isFormPresent()).toBeTruthy('The form should appear now');    
  });

  it('should accept and save input values', () => {
    Pastebin.clickPasteCodeButton();
    Pastebin.addNewTitle(pasteCodeTitle);
    Pastebin.selectOptionJavascript();
    Pastebin.addNewBody(pasteCodeBody);
    Pastebin.clickSubmitButton();
    expect(Pastebin.getLastRowData()).toContain(pasteCodeTitle);
  });
});
