import {AbstractListPage} from './abstract-list.po';
import {By} from 'protractor';

export class CartPage extends AbstractListPage {
  protected getRowClass(): string {
    return 'cart-row';
  }

  private getQuantityInputOnRow(rowIndex: number) {
    return this.getOnRow(rowIndex, '.cart-quantity input');

  }

  getQuantityOnRow(rowIndex: number) {
    const input = this.getQuantityInputOnRow(rowIndex);
    return input.getAttribute('value').then(text => +text);
  }

  getRowsData() {
    return this.getRows()
      .map(tr => {
        const title = tr.element(By.css('.cart-title'))
          .getText();
        const author = tr.element(By.css('.cart-author'))
          .getText();
        const price = tr.element(By.css('.cart-price'))
          .getText();
        const amount = tr.element(By.css('.cart-amount'))
          .getText();
        const quantity = tr.element(By.css('.cart-quantity input'))
          .getAttribute('value')
          .then(text => +text);

        return {title, author, price, amount, quantity};
      });
  }


  changeQuantityOnRow(rowIndex: number, newQuantity: number) {
    const input = this.getQuantityInputOnRow(rowIndex);
    input.clear();
    // input.sendKeys(newQuantity.toString());
    input.sendKeys(newQuantity);
  }
}
