import {QuestionModel} from "./question-model";
import {QuestionType} from "./question-type";
import {ValidationModel} from "./validation-model";
import {FormGroup,FormBuilder} from '@angular/forms';
import {ValidationType} from "./validation-type";
export class CheckboxQuestionModel extends QuestionModel{
  public defaultValue:boolean=false;
  constructor(){
    super(QuestionType.CheckBox);
  }

  populateFromFormGroup(formGroup:FormGroup){
    if(formGroup.get("label").value !=null)
    {
      this.questionLabel=formGroup.get("label").value;
    }
    if(formGroup.get("defaultValue").value !=null)
    {
      this.defaultValue=formGroup.get("defaultValue").value;
    }
      if(formGroup.get("validations").value !=null)
    {
      if(formGroup.get("validations").get("requiredValidation").value !=null)
      {
        let requiredValidation=this.validations.find(validation=>validation.validationType===ValidationType.Required);
        if(requiredValidation!=null){
          requiredValidation.values=Array.of([formGroup.get("validations").get("requiredValidation").value]);
        }
        else{
          this.validations.push(new ValidationModel(ValidationType.Required,[formGroup.get("validations").get("requiredValidation").value]));
        }
      }
    }
  }
  toFormGroup(fb:FormBuilder ):FormGroup{
    let requiredValidation=this.validations.find(validation=>validation.validationType===ValidationType.Required);
    return fb.group({
      label:typeof this.questionLabel != 'undefined' && this.questionLabel?this.questionLabel:"",
      defaultValue:typeof this.defaultValue != 'undefined' && this.defaultValue?this.defaultValue:"",
      validations:fb.group(
        {
          requiredValidation:typeof requiredValidation != 'undefined' && requiredValidation.values[0]?requiredValidation.values[0]:'',
        }
      )
    })
  }
}
