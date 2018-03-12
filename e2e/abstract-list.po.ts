import { browser, By, element } from 'protractor';

export abstract class AbstractListPage {

  protected abstract getRowClass(): string;

  getRows() {
    return element.all(By.className(this.getRowClass()));
  }
  getRowsCount() {
    return this.getRows().count();
  }

  getOnRow(rowIndex: number, cssSelector: string) {
    return this.getRows().get(rowIndex)
      .element(By.css(cssSelector));
  }
  getTextOnRow(rowIndex: number, cssSelector: string) {
    return this.getOnRow(rowIndex, cssSelector)
      .getText();
  }

}
