import { Component, OnInit,ViewChild,ComponentRef,ViewContainerRef,ComponentFactoryResolver,ViewEncapsulation } from '@angular/core';
import {AddQuestionsService} from "../shared/services/add-questions.service";
import {TextQuestionModel} from "../shared/model/text-question-model";
import {QuestionModel} from "../shared/model/question-model";
import {CheckboxQuestionModel} from "../shared/model/checkbox-question-model";
import {TextfieldQuestionComponent} from "./textfield-question/textfield-question.component";
import {QuestionType} from "../shared/model/question-type";
import {CheckboxQuestionComponent} from "./checkbox-question/checkbox-question.component";
import {DropdownQuestionComponent} from "./dropdown-question/dropdown-question.component";
import {DropdownQuestionModel} from "../shared/model/dropdown-question-model";
import {SelectItem,RadioButton} from "primeng/primeng";
import {RadioGroupQuestionComponent} from "./radio-group-question/radio-group-question.component";
import {RadioGroupQuestionModel} from "../shared/model/radiogroup-question-model";
import {CheckboxGroupQuestionComponent} from "./checkbox-group-question/checkbox-group-question.component";
import {CheckboxgroupQuestionModel} from "../shared/model/checkboxgroup-question-model";


@Component({
  selector: 'app-questions',
  templateUrl: 'app/questions/questions.component.html',
  styleUrls: ['app/questions/questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @ViewChild( 'dialogComponent',{read:ViewContainerRef}) dialogContainerRef:ViewContainerRef;
  displayTextFieldDialog:boolean;
  displayCheckBoxFieldDialog:boolean=false;
  public questionType=QuestionType;

  constructor(public theAddQuestionsService:AddQuestionsService,
    private componentResolver: ComponentFactoryResolver,private viewContainerRef:ViewContainerRef
  ) {

  }

  ngOnInit() {
  }
  dragComponentEnd(componentType:number,event){
    this.createComponent(componentType);
   }

    getSelectItemsArray(theQuestionModel:DropdownQuestionModel):SelectItem[]{
      let dropDownSelectItems:SelectItem[]=[];
      theQuestionModel.options.forEach(option=>
        {
          dropDownSelectItems.push({label:option.key,value:option.value});
        }
      )

      return dropDownSelectItems;
    }

  deleteQuestion(atIndex:number){
    this.theAddQuestionsService.questions.splice(atIndex,1);
  }

  editQuestion(questionModel:QuestionModel){
      this.createComponent(questionModel);
  }

  createComponent(option:number|QuestionModel){
    let componentType:number;
    let questionModel:QuestionModel;
    console.log(option instanceof QuestionModel);
    console.log(option instanceof TextQuestionModel);
    if(typeof option === "number")
    {
      componentType= <number>option;
    }
    if(option instanceof QuestionModel)
    {

      questionModel=<QuestionModel>option;
      componentType=(<QuestionModel>option).questionType;
    }
    if(componentType===QuestionType.Text) {
      let factory = this.componentResolver.resolveComponentFactory(TextfieldQuestionComponent);
      let textFieldComponentRef = this.dialogContainerRef.createComponent(factory, 0, this.viewContainerRef.injector);
      textFieldComponentRef.instance.onClose.subscribe(
        ()=> {
          textFieldComponentRef.destroy();
        });
        if(typeof questionModel != "undefined" && questionModel){
          textFieldComponentRef.instance.textQuestionModel=<TextQuestionModel>questionModel;
        }

    }

    if(componentType===QuestionType.CheckBox) {
      let factory = this.componentResolver.resolveComponentFactory(CheckboxQuestionComponent);
      let checkBoxFieldComponentRef = this.dialogContainerRef.createComponent(factory, 0, this.viewContainerRef.injector);
      checkBoxFieldComponentRef.instance.onClose.subscribe(
        ()=> {
          checkBoxFieldComponentRef.destroy();
        });
      if(typeof questionModel != "undefined" && questionModel){
        checkBoxFieldComponentRef.instance.checkboxQuestionModel=<CheckboxQuestionModel>questionModel;
      }

    }

    if(componentType===QuestionType.DropDown) {
      let factory = this.componentResolver.resolveComponentFactory(DropdownQuestionComponent);
      let dropDownFieldComponentRef = this.dialogContainerRef.createComponent(factory, 0, this.viewContainerRef.injector);
      dropDownFieldComponentRef.instance.onClose.subscribe(
        ()=> {
          dropDownFieldComponentRef.destroy();
        });
      if(typeof questionModel != "undefined" && questionModel){
        dropDownFieldComponentRef.instance.dropDownQuestionModel=<DropdownQuestionModel>questionModel;
      }

    }

    if(componentType===QuestionType.RadioGroup) {
      let factory = this.componentResolver.resolveComponentFactory(RadioGroupQuestionComponent);
      let radioGroupComponentRef = this.dialogContainerRef.createComponent(factory, 0, this.viewContainerRef.injector);
      radioGroupComponentRef.instance.onClose.subscribe(
        ()=> {
          radioGroupComponentRef.destroy();
        });
      if(typeof questionModel != "undefined" && questionModel){
        radioGroupComponentRef.instance.radioGroupQuestionModel=<RadioGroupQuestionModel>questionModel;
      }

    }

    if(componentType===QuestionType.CheckBoxGroup) {
      let factory = this.componentResolver.resolveComponentFactory(CheckboxGroupQuestionComponent);
      let checkboxGroupComponentRef = this.dialogContainerRef.createComponent(factory, 0, this.viewContainerRef.injector);
      checkboxGroupComponentRef.instance.onClose.subscribe(
        ()=> {
          checkboxGroupComponentRef.destroy();
        });
      if(typeof questionModel != "undefined" && questionModel){
        checkboxGroupComponentRef.instance.checkBoxGroupQuestionModel=<CheckboxgroupQuestionModel>questionModel;
      }

    }

  }




}
