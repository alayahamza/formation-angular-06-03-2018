import { browser, By, element } from 'protractor';
import {link} from 'fs';

export class AppPage {
  loadApplication() {
    return browser.get('/');
  }

  getTitleText() {
    return element(By.css('app-root h1')).getText();
  }

  clickOnMenuLink(linkText: string) {
    element(By.linkText(linkText)).click();
  }
}
