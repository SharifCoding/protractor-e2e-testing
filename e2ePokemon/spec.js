describe('E2E testing on NG-Pokédex app', () => {
  it('getTitle "Search for Pokémon"', () => {
    browser.get('https://ng-pokedex.firebaseapp.com/pokemon');

    expect(browser.getTitle()).toEqual('Search for Pokémon');
  });
  it('should display a list of pokemon', () => {
    expect(element.all(by.css('.card--media')).count()).toBe(151);
  });
  it('should open and view a particular pokemon', () => {
    element.all(by.css('.card--media')).first().click();
    browser.sleep(1000);

    expect(element(by.tagName('app-pokemon-modal'))).toBeTruthy();
    expect(element(by.css('h1')).getText()).toBe('Bulbasaur #1');
  });
  it('should open and allow arrow keys to navigate between pokemon', () => {
    browser.actions().sendKeys(protractor.Key.ARROW_RIGHT).perform();
    browser.sleep(1000);

    expect(element(by.css('h1')).getText()).toBe('Ivysaur #2');

    browser.actions().sendKeys(protractor.Key.ARROW_LEFT).perform();
    browser.actions().sendKeys(protractor.Key.ARROW_LEFT).perform();
    browser.sleep(1000);
    
    expect(element(by.css('h1')).getText()).toBe('Mew #151');
  });
});
