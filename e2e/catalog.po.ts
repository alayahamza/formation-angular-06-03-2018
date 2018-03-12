import {AbstractListPage} from './abstract-list.po';

export class CatalogPage extends AbstractListPage {

  protected getRowClass(): string {
    return 'catalog-row';
  }

  buyBookOnRow(rowIndex: number) {
    const button = this.getOnRow(rowIndex, '.catalog-button app-buy-button');
    button.click();
  }

}
