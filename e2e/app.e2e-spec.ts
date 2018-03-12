import {AppPage} from './app.po';
import {CatalogPage} from './catalog.po';
import {CartPage} from './cart.po';
import {browser} from 'protractor';

describe('bookstore App', () => {
  const appPage = new AppPage();
  const catalogPage = new CatalogPage();
  const cartPage = new CartPage();
  const book0 = {
    title: 'La Horde du Contrevent',
    author: 'Alain Damasio',
    price: '10,90 €',
    amount: '10,90 €',
    quantity: 1
  };
  const book1 = {
    title: 'Black-out',
    author: 'Connie Willis',
    price: '9,90 €',
    amount: '9,90 €',
    quantity: 1
  };

  beforeEach(() => {
    appPage.loadApplication();
  });

  afterEach(() => {
    browser.executeScript('window.localStorage.clear();');
  });

  it('should display title', () => {
    expect(appPage.getTitleText()).toEqual('Bookstore');
  });

  it('should display a catalog of more than 10 books', () => {
    expect(catalogPage.getRowCount()).toBeGreaterThan(10);
    expect(catalogPage.getTextOnRow(0, '.catalog-author'))
      .toContain('Alain');
  });

  // fit to focus on a test
  // xit to exclude a test

  it('should add to cart', () => {
    catalogPage.buyBookOnRow(0);
    expect(cartPage.getRowCount()).toEqual(1);
    expect(cartPage.getQuantityOnRow(0)).toEqual(1);
    // browser.pause(5000);
    appPage.clickOnMenuLink('Catalogue');
    catalogPage.buyBookOnRow(1);
    expect(cartPage.getRowCount()).toEqual(2);
    expect(cartPage.getQuantityOnRow(1)).toEqual(1);

    expect(cartPage.getRowsData()).toEqual([
      book0,
      book1
    ]);
    cartPage.changeQuantityOnRow(1, 3);
    expect(cartPage.getRowsData()).toEqual([
      book0,
      {
        title: 'Black-out',
        author: 'Connie Willis',
        price: '9,90 €',
        amount: '29,70 €',
        quantity: 3
      }
    ]);
  });
});
