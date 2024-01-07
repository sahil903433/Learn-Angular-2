import {QuestionModel} from "./question-model";
import {QuestionType} from "./question-type";
import {FormGroup,FormBuilder} from '@angular/forms';
import {ValidationType} from "./validation-type";
import {ValidationModel} from "./validation-model";
export class TextQuestionModel extends QuestionModel{
  public defaultValue:string;
  public placeHolder:string;
  constructor(){
    super(QuestionType.Text);
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
    if(formGroup.get("placeHolder").value !=null)
    {
      this.placeHolder=formGroup.get("placeHolder").value;
    }
    if(formGroup.get("validations").value !=null)
    {
      if(formGroup.get("validations").get("minimumLengthValidation").value !=null)
      {
        let minimumLengthValidation=this.validations.find(validation=>validation.validationType===ValidationType.MinimumLength);
        if(minimumLengthValidation!=null){
          minimumLengthValidation.values=Array.of([formGroup.get("validations").get("minimumLengthValidation").value]);
        }
        else{
          this.validations.push(new ValidationModel(ValidationType.MinimumLength,[formGroup.get("validations").get("minimumLengthValidation").value]));
        }
      }
      if(formGroup.get("validations").get("maximumLengthValidation").value !=null)
      {
        let maximumLengthValidation=this.validations.find(validation=>validation.validationType===ValidationType.MaximumLength);
        if(maximumLengthValidation!=null){
          maximumLengthValidation.values=Array.of([formGroup.get("validations").get("maximumLengthValidation").value]);
        }
        else{
          this.validations.push(new ValidationModel(ValidationType.MaximumLength,[formGroup.get("validations").get("maximumLengthValidation").value]));
        }
      }

    }
  }

  toFormGroup(fb:FormBuilder ):FormGroup{
    let minimumLengthValidation=this.validations.find(validation=>validation.validationType===ValidationType.MinimumLength);

    let maximumLengthValidation=this.validations.find(validation=>validation.validationType===ValidationType.MaximumLength);

    return fb.group({
      label:typeof this.questionLabel != 'undefined' && this.questionLabel?this.questionLabel:"",
      defaultValue:typeof this.defaultValue != 'undefined' && this.defaultValue?this.defaultValue:"",
      placeHolder:typeof this.placeHolder != 'undefined' && this.placeHolder?this.placeHolder:"",
      validations:fb.group(
        {

          minimumLengthValidation:typeof minimumLengthValidation != 'undefined' && minimumLengthValidation.values[0]?minimumLengthValidation.values[0]:'',
          maximumLengthValidation:typeof maximumLengthValidation != 'undefined' && maximumLengthValidation.values[0]?maximumLengthValidation.values[0]:''
        }
      )
    })
  }
}
