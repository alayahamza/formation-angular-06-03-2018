import {browser, By, element} from 'protractor';

export class AppPage {
  loadApplication() {
    return browser.get('/');
  }

  // return a promise of string (waits until angular finishes loading page)
  getTitleText() {
    return element(By.css('app-root h1')).getText();
  }

  clickOnMenuLink(linkText: string) {
    element(By.linkText(linkText)).click();
  }
}
