/**
 * Created by md7030 on 8/17/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { routing }        from './app.routing';
import { AppComponent }  from './app.component';

import {FormDetailsComponent} from "./form-details/form-details.component";
import {QuestionsComponent} from "./questions"
import {FormService} from "./shared/services/form.service";
import {DragDropModule,DropdownModule,DialogModule} from "primeng/primeng";
import {AddQuestionsService} from "./shared/services/add-questions.service";
import {TextfieldQuestionComponent} from "./questions/textfield-question/textfield-question.component";
import {CheckboxQuestionComponent} from "./questions/checkbox-question/checkbox-question.component";
import {DropdownQuestionComponent} from "./questions/dropdown-question/dropdown-question.component";
import {RadioGroupQuestionComponent} from "./questions/radio-group-question/radio-group-question.component";
import {NumericValidator} from "./shared/Directives/numeric-validator"
import {UniqueValueValidator} from "./shared/Directives/unique-value-validator"
import {CheckboxGroupQuestionComponent} from "./questions/checkbox-group-question/checkbox-group-question.component";
import {AtLeastOneValidator} from "./shared/Directives/at-least-one-validator";
import {DragulaModule} from "ng2-dragula/ng2-dragula";

@NgModule({
  imports:      [ BrowserModule,
    FormsModule,routing,ReactiveFormsModule,DragDropModule,DropdownModule,DialogModule,DragulaModule  ],
  declarations: [ AppComponent,FormDetailsComponent,QuestionsComponent,
    TextfieldQuestionComponent,
    CheckboxQuestionComponent,
    NumericValidator,
    DropdownQuestionComponent,
    RadioGroupQuestionComponent,
    CheckboxGroupQuestionComponent,
    UniqueValueValidator,
    AtLeastOneValidator],
  providers: [
    FormService,
    AddQuestionsService

  ],
  entryComponents:[TextfieldQuestionComponent,CheckboxQuestionComponent,DropdownQuestionComponent,RadioGroupQuestionComponent,CheckboxGroupQuestionComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
