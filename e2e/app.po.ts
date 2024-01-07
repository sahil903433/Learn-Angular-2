///<reference path="../typings/globals/angular-protractor/index.d.ts"/>
///<reference path="../typings/globals/selenium-webdriver/index.d.ts"/>
export class AddQuestionsPage {
   _textField=element(by.xpath('//span[@title="Text Field"]'));
  _checkBoxField=element(by.xpath('//span[@title="Checkbox"]'));
  _droppableArea=element(by.xpath('//div[@pdroppable="components"]'));
  _firstCreatedComponent=element(by.xpath('//div[contains(@class,"question-btn-block")]'));
  _firstCreatedComponentLabel=this._firstCreatedComponent.element(by.xpath('//div[@class="container-fluid"]/label'));
  _firstCreatedComponentEditBtn=this._firstCreatedComponent.element(by.xpath('//div[contains(@class,"right-corner-btn")]/button[@aria-label="Edit"]'));
  _firstCreatedComponentDeleteBtn=this._firstCreatedComponent.element(by.xpath('//div[contains(@class,"right-corner-btn")]/button[@aria-label="Delete"]'));

  navigateTo() {
    return browser.get('questions');
  }

  getPageTitle() {
    return element(by.css('app-questions h1')).getText();
  }

  openTextFieldDialog() {

    browser.actions().dragAndDrop(this._textField.getWebElement(), this._droppableArea.getWebElement())
      .perform();
  }

  openCheckBoxDialog() {

    browser.actions().dragAndDrop(this._checkBoxField.getWebElement(), this._droppableArea.getWebElement())
      .perform();
  }

  getTheLabelOfFirstComponent(){
     return this._firstCreatedComponentLabel.getText();
  }
  editFirstComponent(){
    this._firstCreatedComponentEditBtn.click();
  }
  deleteFirstComponenet(){
    this._firstCreatedComponentDeleteBtn.click();
  }

}
