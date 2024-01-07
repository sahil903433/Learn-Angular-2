///<reference path="../typings/globals/jasmine/index.d.ts"/>
import { AddQuestionsPage } from './app.po';
import {TextFieldQuestionComponentPage} from "./textfield-question.po";
import {CheckBoxQuestionPage} from "./checkbox-question.po";

describe('Dynamic Form Builder App', function() {
  let page: AddQuestionsPage;

  beforeEach(() => {
    page = new AddQuestionsPage();
    page.navigateTo();
  });

  it('should display correct page Title on Add Questions page', () => {
      expect(page.getPageTitle()).toEqual('Add Questions');
  });


});



