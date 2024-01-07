import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormGroup,FormBuilder,FormArray} from '@angular/forms';
import {AddQuestionsService} from "../../shared/services/add-questions.service";
import {CheckboxgroupQuestionModel} from "../../shared/model/checkboxgroup-question-model";

@Component({
  selector: 'app-checkbox-group-question',
  templateUrl: 'app/questions/checkbox-group-question/checkbox-group-question.component.html',
  styleUrls: ['app/questions/checkbox-group-question/checkbox-group-question.component.css']
})
export class CheckboxGroupQuestionComponent implements OnInit {
  isDisplayTabOn:boolean=true;
  isValidationTabOn:boolean=false;
  checkBoxGroupQuestionModel:CheckboxgroupQuestionModel=new CheckboxgroupQuestionModel();
  @Output() onClose=new EventEmitter();
  checkBoxGroupForm:FormGroup;
  constructor(public theAddQuestionsService:AddQuestionsService,private formBuilder:FormBuilder) {

  }

  ngOnInit() {
    this.checkBoxGroupForm=this.checkBoxGroupQuestionModel.toFormGroup(this.formBuilder);
  }


  onCheckBoxGroupTabClick(tabName:string){
    if(tabName==='Display'){
      this.isDisplayTabOn=true;
      this.isValidationTabOn=false;
    }
    else if(tabName==='Validations'){
      this.isValidationTabOn=true;
      this.isDisplayTabOn=false;
    }
  }
  onCheckBoxGroupFieldSave(){
    this.checkBoxGroupQuestionModel.populateFromFormGroup(this.checkBoxGroupForm);
    this.theAddQuestionsService.addQuestionModel(this.checkBoxGroupQuestionModel);

    this.onClose.emit();
  }

  onCheckBoxGroupFieldClose(){
    this.onClose.emit();
  }

  addOption(){
    this.checkBoxGroupQuestionModel.options.push({key:"",value:""});
    let optionsArray=<FormArray>this.checkBoxGroupForm.controls['options'];
    optionsArray.push(this.checkBoxGroupQuestionModel.createOptionFormGroup(this.checkBoxGroupQuestionModel.options.pop(),this.formBuilder));


  }
  deleteOption(atIndex:number){
    this.checkBoxGroupQuestionModel.options.splice(atIndex,1);
    let optionsArray=<FormArray>this.checkBoxGroupForm.controls['options'];
    optionsArray.removeAt(atIndex);

  }

}
