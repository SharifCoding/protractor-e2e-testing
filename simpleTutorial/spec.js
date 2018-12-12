describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
  it('should add one and zero', function() {
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(0);

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('1');
  });
  it('should divide four by two', function() {
    element(by.model('first')).sendKeys(4);
    element(by.model('second')).sendKeys(2);
    element(by.xpath('/html/body/div/div/form/select/option[2]')).click();

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('2');
  });
  it('should modular five by two', function() {
    element(by.model('first')).sendKeys(11);
    element(by.model('second')).sendKeys(4);
    element(by.xpath('/html/body/div/div/form/select/option[3]')).click();

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('3');
  });
  it('should multiple two and two', function() {
    element(by.model('first')).sendKeys(2);
    element(by.model('second')).sendKeys(2);
    element(by.xpath('/html/body/div/div/form/select/option[4]')).click();

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('4');
  });
  it('should substract seven by two', function() {
    element(by.model('first')).sendKeys(7);
    element(by.model('second')).sendKeys(2);
    element(by.xpath('/html/body/div/div/form/select/option[5]')).click();

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('5');
  });
  it('should add five and one', function() {
    element(by.model('first')).sendKeys(5);
    element(by.model('second')).sendKeys(1);
    element(by.xpath('/html/body/div/div/form/select/option[1]')).click();

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('6');
  });
});
