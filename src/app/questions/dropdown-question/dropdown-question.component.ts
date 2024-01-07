import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FormGroup,FormBuilder,FormArray} from '@angular/forms';
import {AddQuestionsService} from "../../shared/services/add-questions.service";
import {DropdownQuestionModel} from "../../shared/model/dropdown-question-model";

@Component({
  selector: 'app-dropdown-question',
  templateUrl: 'app/questions/dropdown-question/dropdown-question.component.html',
  styleUrls: ['app/questions/dropdown-question/dropdown-question.component.css']
})
export class DropdownQuestionComponent implements OnInit {

  isDisplayTabOn:boolean=true;
  isValidationTabOn:boolean=false;
  dropDownQuestionModel:DropdownQuestionModel=new DropdownQuestionModel();
  @Input() displayCheckBoxFieldDialog:boolean;
  @Output() onClose=new EventEmitter();
  dropDownFieldForm:FormGroup;
  constructor(private theAddQuestionsService:AddQuestionsService,private formBuilder:FormBuilder) {

  }

  ngOnInit() {
    this.dropDownFieldForm=this.dropDownQuestionModel.toFormGroup(this.formBuilder);
  }


  onDropDownFieldTabClick(tabName:string){
    if(tabName==='Display'){
      this.isDisplayTabOn=true;
      this.isValidationTabOn=false;
    }
    else if(tabName==='Validations'){
      this.isValidationTabOn=true;
      this.isDisplayTabOn=false;
    }
  }
  onDropDownFieldSave(){
    this.dropDownQuestionModel.populateFromFormGroup(this.dropDownFieldForm);
    this.theAddQuestionsService.addQuestionModel(this.dropDownQuestionModel);

    this.onClose.emit();
  }

  onDropDownFieldClose(){
    this.onClose.emit();
  }
  addOption(){
    this.dropDownQuestionModel.options.push({key:"",value:""});
    let optionsArray=<FormArray>this.dropDownFieldForm.controls['options'];
    optionsArray.push(this.dropDownQuestionModel.createOptionFormGroup(this.dropDownQuestionModel.options.pop(),this.formBuilder));


  }
  deleteOption(atIndex:number){
    this.dropDownQuestionModel.options.splice(atIndex,1);
    let optionsArray=<FormArray>this.dropDownFieldForm.controls['options'];
    optionsArray.removeAt(atIndex);

  }

}
