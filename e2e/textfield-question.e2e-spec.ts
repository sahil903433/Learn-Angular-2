///<reference path="../typings/globals/jasmine/index.d.ts"/>
import {TextFieldQuestionComponentPage} from "./textfield-question.po";
import {AddQuestionsPage} from "./app.po";
/**
 * Created by md7030 on 9/19/2016.
 */

describe('Text Field component:', function() {
  let page: AddQuestionsPage=new AddQuestionsPage();
  page.navigateTo();
  let textFieldPage:TextFieldQuestionComponentPage=
    new TextFieldQuestionComponentPage();

  it('text field dialog should have correct title', () => {

    page.openTextFieldDialog();
    expect(textFieldPage.getDialogTitle()).toEqual('Add a Text Component');
  });

  it('should able to create a text field successfully', () => {
    textFieldPage.createANewOrEditTextField({label:"label",
      defaultValue:"defaultValue",
      placeHolder:"placeHolder",
      minimumLengthValidation:"1",
      maximumLengthValidation:"10"});
    expect(page.getTheLabelOfFirstComponent()).toEqual('label');
  });
  it('should able to edit a text field successfully', () => {
    page.editFirstComponent();
    textFieldPage.createANewOrEditTextField({label:"label_modified"});
    expect(page.getTheLabelOfFirstComponent()).toEqual('label_modified');
  });

  it('should able to delete a text field successfully', () => {

    page.deleteFirstComponenet();
    expect(page._firstCreatedComponent.isPresent()).toBe(false);
  });
});

