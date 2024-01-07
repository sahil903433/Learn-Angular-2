import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormGroup,FormBuilder,FormArray} from '@angular/forms';
import {AddQuestionsService} from "../../shared/services/add-questions.service";
import {RadioGroupQuestionModel} from "../../shared/model/radiogroup-question-model";

@Component({
  selector: 'app-radio-group-question',
  templateUrl: 'app/questions/radio-group-question/radio-group-question.component.html',
  styleUrls: ['app/questions/radio-group-question/radio-group-question.component.css']
})
export class RadioGroupQuestionComponent implements OnInit {

  isDisplayTabOn:boolean=true;
  isValidationTabOn:boolean=false;
  radioGroupQuestionModel:RadioGroupQuestionModel=new RadioGroupQuestionModel();
  @Output() onClose=new EventEmitter();
  radioGroupForm:FormGroup;
  constructor(private theAddQuestionsService:AddQuestionsService,private formBuilder:FormBuilder) {

  }

  ngOnInit() {
    this.radioGroupForm=this.radioGroupQuestionModel.toFormGroup(this.formBuilder);
  }


  onRadioGroupTabClick(tabName:string){
    if(tabName==='Display'){
      this.isDisplayTabOn=true;
      this.isValidationTabOn=false;
    }
    else if(tabName==='Validations'){
      this.isValidationTabOn=true;
      this.isDisplayTabOn=false;
    }
  }
  onRadioGroupFieldSave(){
    this.radioGroupQuestionModel.populateFromFormGroup(this.radioGroupForm);
    this.theAddQuestionsService.addQuestionModel(this.radioGroupQuestionModel);

    this.onClose.emit();
  }
  onRadioGroupFieldClose(){
    this.onClose.emit();
  }
  addOption(){
    this.radioGroupQuestionModel.options.push({key:"",value:""});
    let optionsArray=<FormArray>this.radioGroupForm.controls['options'];
    optionsArray.push(this.radioGroupQuestionModel.createOptionFormGroup(this.radioGroupQuestionModel.options.pop(),this.formBuilder));


  }
  deleteOption(atIndex:number){
    this.radioGroupQuestionModel.options.splice(atIndex,1);
    let optionsArray=<FormArray>this.radioGroupForm.controls['options'];
    optionsArray.removeAt(atIndex);

  }

}
