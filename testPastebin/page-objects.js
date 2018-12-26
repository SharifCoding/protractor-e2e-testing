const Pastebin = function() {

  this.navigateToHome = () => {
    return browser.get('http://laserpants.github.io/pastebin-angular/#/');
  };

  this.getPastebin = () => {
    return browser.getTitle();
  }

  this.getPastebinHeading = () => {
    return element(by.className('navbar-brand')).getText();
  }

  this.isFormPresent = () => {
    return element(by.name('form')).isPresent();
  }

  this.clickPasteCodeButton = () => {
    return element(by.partialLinkText('Paste code')).click();
  }

  this.addNewTitle = (inputTitle) => {
    return element(by.name('title')).sendKeys(inputTitle);
  }
  
  this.selectOptionJavascript = () => {
    return element(by.cssContainingText('option', 'Javascript')).click();
  }

  this.addNewBody = (inputBody) => {
    return element(by.name('body')).sendKeys(inputBody);
  }

  this.clickSubmitButton = () => {
    return element(by.css('input[type="submit"]')).click();
  }

  this.getLastRowData = () => {
    return element.all(by.tagName('tr')).last().getText();
  }
};

module.exports = new Pastebin();
