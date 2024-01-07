import { Injectable } from '@angular/core';
import {QuestionModel} from "../model/question-model";
import {TextQuestionModel} from "../model/text-question-model";

@Injectable()
export class AddQuestionsService {
  public questions:QuestionModel[]=[];

  constructor() { }

  addQuestionModel(questionModel:QuestionModel){
    let existingQuestionIndex=this.questions.findIndex(element=> element === questionModel);
    if(typeof existingQuestionIndex != "undefined" && existingQuestionIndex > -1){
      this.questions.fill(questionModel,existingQuestionIndex,existingQuestionIndex);
    }
  else {
      this.questions.push(questionModel);
    }
  }

  getQuestionLabels():string[]{
    let returnValue:string[]=[];
    this.questions.forEach(qstn=>returnValue.push(qstn.questionLabel));
    return returnValue;
  }

}
