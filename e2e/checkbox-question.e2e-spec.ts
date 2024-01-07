///<reference path="../typings/globals/jasmine/index.d.ts"/>
import {CheckBoxQuestionPage} from "./checkbox-question.po";
import {AddQuestionsPage} from "./app.po";
/**
 * Created by md7030 on 9/19/2016.
 */

describe('CheckBox component:', function() {
  let page: AddQuestionsPage=new AddQuestionsPage();
  page.navigateTo();
  let checkBoxPage:CheckBoxQuestionPage=
    new CheckBoxQuestionPage();

  it('checkbox component dialog should have correct title', () => {

    page.openCheckBoxDialog();
    expect(checkBoxPage.getDialogTitle()).toEqual('Add a Checkbox Component');
  });

  it('should able to create a checkbox component successfully', () => {
    checkBoxPage.createANewOrEditTextField({label:"label",
      defaultValue:"false",
      requiredValidation:true
    });
    expect(page._firstCreatedComponent.element(by.xpath('//label')).getText()).toEqual('label');
  });
  it('should able to edit a checkbox component successfully', () => {
    page.editFirstComponent();
    checkBoxPage.createANewOrEditTextField({label:"label_modified",defaultValue:"true"});
    expect(page._firstCreatedComponent.element(by.xpath('//label')).getText()).toEqual('label_modified');
    expect(page._firstCreatedComponent.element(by.xpath('//input[@id="checkBoxQuestionLabel"]')).getAttribute('checked')).toBeTruthy();
  });

  it('should able to delete a checkbox component successfully', () => {

    page.deleteFirstComponenet();
    expect(page._firstCreatedComponent.isPresent()).toBe(false);
  });
});
