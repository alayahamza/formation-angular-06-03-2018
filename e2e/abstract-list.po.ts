import {By, element} from 'protractor';

export abstract class AbstractListPage {
  protected abstract getRowClass(): string ;

  getRows() {
    return element.all(By.className(this.getRowClass()));
  }

  getRowCount() {
    return this.getRows().count();
  }

  getOnRow(index: number, cssSelector: string) {
    return this.getRows()
      .get(index)
      .element(By.css(cssSelector));
  }

  getTextOnRow(rowIndex: number, cssSelector: string) {
    return this.getOnRow(rowIndex, cssSelector)
      .getText();
  }
}
