/**
 * Created by md7030 on 9/8/2016.
 */
///<reference path="../typings/globals/angular-protractor/index.d.ts"/>
///<reference path="../typings/globals/selenium-webdriver/index.d.ts"/>
export class TextFieldQuestionComponentPage {

   _label=element(by.xpath('//input[@formcontrolname="label"]'));
   _defaultValue=element(by.xpath('//input[@formcontrolname="defaultValue"]'));
   _placeHolder=element(by.xpath('//input[@formcontrolname="placeHolder"]'));
   _minimumLengthValidation=element(by.xpath('//input[@formcontrolname="minimumLengthValidation"]'));
   _maximumLengthValidation= element(by.xpath('//input[@formcontrolname="maximumLengthValidation"]'));
  _validationsTab=element(by.linkText('Validations'));
  _saveButton=element(by.buttonText('Save'));

  typeLabel(label:string){
    this._label.clear();
    this._label.sendKeys(label);
  }
  typeDefaultValue(defaultValue:string){
    this._defaultValue.clear();
    this._defaultValue.sendKeys(defaultValue);
  }
  typePlaceHolder(placeHolder:string){
    this._placeHolder.clear();
    this._placeHolder.sendKeys(placeHolder);
  }
  typeMinimumLengthValidation(minimumLengthValidation:string){
    this._minimumLengthValidation.clear();
    this._minimumLengthValidation.sendKeys(minimumLengthValidation);
  }
  typeMaximumLengthValidation(maximumLengthValidation:string){
    this._maximumLengthValidation.clear();
    this._maximumLengthValidation.sendKeys(maximumLengthValidation);
  }


  createANewOrEditTextField(options:{label?:string,
                        defaultValue?:string,
                        placeHolder?:string,
                        minimumLengthValidation?:string,
                        maximumLengthValidation?:string}={})
  {
    if(options.label!=null)
      this.typeLabel(options.label);
    if(options.defaultValue!=null)
      this.typeDefaultValue(options.defaultValue);
    if(options.placeHolder!=null)
      this.typePlaceHolder(options.placeHolder);
    this._validationsTab.click();
    if(options.minimumLengthValidation!=null)
      this.typeMinimumLengthValidation(options.minimumLengthValidation);
    if(options.maximumLengthValidation!=null)
      this.typeMaximumLengthValidation(options.maximumLengthValidation);
    browser.actions().click(this._saveButton.getWebElement()).perform();

  }



  getDialogTitle() {
    return element(by.xpath('//span[@class="ui-dialog-title"]')).getText();
  }


}
