import { Component, OnInit,Input,EventEmitter,Output  } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import {AddQuestionsService} from "../../shared/services/add-questions.service";
import {CheckboxQuestionModel} from "../../shared/model/checkbox-question-model"

@Component({
  selector: 'app-checkbox-question',
  templateUrl: 'app/questions/checkbox-question/checkbox-question.component.html',
  styleUrls: ['app/questions/checkbox-question/checkbox-question.component.css']
})
export class CheckboxQuestionComponent implements OnInit {

  isDisplayTabOn:boolean=true;
  isValidationTabOn:boolean=false;
  checkboxQuestionModel:CheckboxQuestionModel=new CheckboxQuestionModel();
  @Input() displayCheckBoxFieldDialog:boolean;
  @Output() onClose=new EventEmitter();
  checkBoxFieldForm:FormGroup;
  constructor(private theAddQuestionsService:AddQuestionsService,private formBuilder:FormBuilder) {

  }

  ngOnInit() {
    this.checkBoxFieldForm=this.checkboxQuestionModel.toFormGroup(this.formBuilder);
  }


  onCheckBoxFieldTabClick(tabName:string){
    if(tabName==='Display'){
      this.isDisplayTabOn=true;
      this.isValidationTabOn=false;
    }
    else if(tabName==='Validations'){
      this.isValidationTabOn=true;
      this.isDisplayTabOn=false;
    }
  }
  onCheckBoxFieldSave(){
  this.checkboxQuestionModel.populateFromFormGroup(this.checkBoxFieldForm);
  console.log("this.textQuestionModel=="+this.checkboxQuestionModel.questionLabel);
  this.theAddQuestionsService.addQuestionModel(this.checkboxQuestionModel);

  this.onClose.emit();
}

  onCheckBoxFieldClose(){

    this.onClose.emit();
  }
}
