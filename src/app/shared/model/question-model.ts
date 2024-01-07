import {ValidationModel} from "./validation-model";
export class QuestionModel {
  public questionType:number;
  public questionLabel:string;
  public validations:Array<ValidationModel>=[];
  constructor(theType:number){
    this.questionType=theType;
  }

}
