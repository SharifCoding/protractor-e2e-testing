const Pastebin = function() {

  this.navigateToHome = function() {
    return browser.get('http://laserpants.github.io/pastebin-angular/#/');
  };

  this.getPastebin = function() {
    return browser.getTitle();
  }

  this.getPastebinHeading = function() {
    return element(by.className('navbar-brand')).getText();
  }

  this.isFormPresent = function() {
    return element(by.name('form')).isPresent();
  }

  this.clickPasteCodeButton = function() {
    return element(by.partialLinkText('Paste code')).click();
  }

  this.addNewTitle = function(inputTitle) {
    return element(by.name('title')).sendKeys(inputTitle);
  }
  
  this.selectOptionJavascript = function() {
    return element(by.cssContainingText('option', 'Javascript')).click();
  }

  this.addNewBody = function(inputBody) {
    return element(by.name('body')).sendKeys(inputBody);
  }

  this.clickSubmitButton = function() {
    return element(by.css('input[type="submit"]')).click();
  }

  this.getLastRowData = function() {
    return element.all(by.tagName('tr')).last().getText();
  }
};

module.exports = new Pastebin();
