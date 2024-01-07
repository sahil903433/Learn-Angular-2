import { Component, OnInit,Input,EventEmitter,Output,forwardRef,Host  } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AddQuestionsService} from "../../shared/services/add-questions.service";
import {TextQuestionModel} from "../../shared/model/text-question-model";
import {ValidationType} from "../../shared/model/validation-type";



@Component({
  selector: 'app-textfield-question',
  templateUrl: 'app/questions/textfield-question/textfield-question.component.html',
  styleUrls: ['app/questions/textfield-question/textfield-question.component.css']
})
export class TextfieldQuestionComponent implements OnInit {

  textQuestionModel:TextQuestionModel=new TextQuestionModel();
  isDisplayTabOn:boolean=true;
  isValidationTabOn:boolean=false;
  @Output() onClose=new EventEmitter();
  textFieldForm:FormGroup;

  constructor( public theAddQuestionsService:AddQuestionsService,private formBuilder:FormBuilder
  ) {

  }

  ngOnInit() {
  this.textFieldForm=this.textQuestionModel.toFormGroup(this.formBuilder);
  }

  onTextFieldTabClick(tabName:string){
    if(tabName==='Display'){
      this.isDisplayTabOn=true;
      this.isValidationTabOn=false;
    }
    else if(tabName==='Validations'){
      this.isValidationTabOn=true;
      this.isDisplayTabOn=false;
    }
  }
  onTextFieldSave(){
    this.textQuestionModel.populateFromFormGroup(this.textFieldForm);
    console.log("this.textQuestionModel=="+this.textQuestionModel.questionLabel);
    this.theAddQuestionsService.addQuestionModel(this.textQuestionModel);

    this.onClose.emit();
  }

  onTextFieldClose(){
    this.onClose.emit();
  }

}
