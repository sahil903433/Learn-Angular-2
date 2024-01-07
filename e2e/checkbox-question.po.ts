/**
 * Created by md7030 on 9/19/2016.
 */
///<reference path="../typings/globals/angular-protractor/index.d.ts"/>
///<reference path="../typings/globals/selenium-webdriver/index.d.ts"/>
export class CheckBoxQuestionPage{
  _label=element(by.xpath('//input[@formcontrolname="label"]'));
  _defaultValue=element(by.xpath('//input[@formcontrolname="defaultValue"]'));
  _validationsTab=element(by.linkText('Validations'));
  _saveButton=element(by.buttonText('Save'));
  _requiredValidation=element(by.xpath('//input[@formcontrolname="requiredValidation"]'));

  typeLabel(label:string){
    this._label.clear();
    this._label.sendKeys(label);
  }
  typeDefaultValue(defaultValue:string){
    this._defaultValue.clear();
    this._defaultValue.sendKeys(defaultValue);
  }
  checkRequiredValidation(){
      this._requiredValidation.click();

  }



  createANewOrEditTextField(options:{label?:string,
    defaultValue?:string,
    requiredValidation?:boolean}={})
  {
    if(options.label!=null)
      this.typeLabel(options.label);
    if(options.defaultValue!=null)
      this.typeDefaultValue(options.defaultValue);
    this._validationsTab.click();
    if(options.requiredValidation!=null )
    {
      this._requiredValidation.getAttribute('checked').then((value)=>{
        options.requiredValidation.toString() != value;
        this.checkRequiredValidation();
      })
    }


    browser.actions().click(this._saveButton.getWebElement()).perform();

  }



  getDialogTitle() {
    return element(by.xpath('//span[@class="ui-dialog-title"]')).getText();
  }


}
