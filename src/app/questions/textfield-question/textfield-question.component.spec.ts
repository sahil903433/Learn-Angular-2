/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TestBed, async, inject,ComponentFixture } from '@angular/core/testing';
import { TextfieldQuestionComponent } from './textfield-question.component';
import {AddQuestionsService} from "../../shared/services/add-questions.service";
import {DragDropModule,DropdownModule,DialogModule} from "primeng/primeng";
import { FormsModule,ReactiveFormsModule,FormControlName }   from '@angular/forms';
import { routing }        from '../../app.routing';
import { BrowserModule } from '@angular/platform-browser';

describe('Component: TextfieldQuestion', () => {
  let fixture: ComponentFixture<TextfieldQuestionComponent>;
  let comp: TextfieldQuestionComponent;
  beforeEach(async(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [BrowserModule,
        FormsModule, ReactiveFormsModule, DragDropModule, DropdownModule, DialogModule],
      declarations: [TextfieldQuestionComponent],
      providers: [
        AddQuestionsService
      ]
    });


  }));

  it('should create an instance', () => {
    console.log("should create an instance");
      TestBed.compileComponents().then(()=> {
        // create component and test fixture
        fixture = TestBed.createComponent(TextfieldQuestionComponent);
        // get test component from the fixture
        comp = fixture.componentInstance;
        let headerElement: DebugElement;
        headerElement = fixture.debugElement.query(By.css('ui-dialog-title'));
        expect(headerElement.nativeElement.textContent).toEqual('Add a Text Component');
      });
    }
  );

  it('should save a text field question', () => {

    TestBed.compileComponents().then(()=> {
        // create component and test fixture
        fixture = TestBed.createComponent(TextfieldQuestionComponent);
        // get test component from the fixture
        comp = fixture.componentInstance;
        var compiled = fixture.debugElement.nativeElement;

        let labelElement: DebugElement;
        fixture.debugElement.queryAll(By.directive(FormControlName)).forEach(
          (debugElement)=> {
            if (debugElement.attributes['formControlName'] === 'label')
              labelElement = debugElement;
          }
        )
        expect(labelElement).toBeDefined();
        labelElement.nativeElement.value = 'TextField';
        let saveBtn: Element;

        compiled.querySelectorAll("button").forEach((btn)=> {
            if (btn.value === 'Save') {
              btn.click();
            }
          }
        );
        fixture.whenStable().then(()=> {
          console.log("should save a text field question---"+comp.textQuestionModel.questionLabel);
          expect(comp.textQuestionModel.questionLabel).toEqual('TextField');
          expect(comp.theAddQuestionsService.getQuestionLabels()).toEqual(['TextField']);
        });

      }
    );


  });
})
