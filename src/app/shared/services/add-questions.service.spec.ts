/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddQuestionsService } from './add-questions.service';
import {TextQuestionModel} from "../model/text-question-model";
import {QuestionModel} from "../model/question-model";
import {CheckboxQuestionModel} from "../model/checkbox-question-model";

describe('Service: AddQuestions', () => {
  let service:AddQuestionsService;
  beforeEach(() => {
    service=new AddQuestionsService();
  });

  it('should create a AddQuestionsservice Instance',
       () => {
        expect(service).toBeTruthy();
      });
  it('#addQuestionModel should add QuestionModel',()=>{
    let questionmodel:QuestionModel= new TextQuestionModel();
      questionmodel.questionLabel="textField";
    service.addQuestionModel(questionmodel);
    expect(service.questions.length).toEqual(1);
    questionmodel=new CheckboxQuestionModel();
    questionmodel.questionLabel="checkBox";
    service.addQuestionModel(questionmodel);
    expect(service.questions.length).toEqual(2);
  });

  it('#getQuestionLabels should retrieve all Questionlabels',()=>{
    let questionmodel:QuestionModel= new TextQuestionModel();
    questionmodel.questionLabel="textField";
    service.addQuestionModel(questionmodel);
    expect(service.getQuestionLabels()).toEqual(['textField']);
    questionmodel=new CheckboxQuestionModel();
    questionmodel.questionLabel="checkBox";
    service.addQuestionModel(questionmodel);
    expect(service.getQuestionLabels()).toEqual(['textField','checkBox']);
  });
});
