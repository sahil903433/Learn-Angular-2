import {QuestionModel} from "./question-model";
import {QuestionType} from "./question-type";
import {ValidationType} from "./validation-type";
import {ValidationModel} from "./validation-model";
import {FormGroup,FormBuilder,Validators,FormControl,FormArray} from '@angular/forms';
export class DropdownQuestionModel extends QuestionModel{
  public options:{key:string,value:string}[]=[{key:"",value:""}];
  constructor(){
    super(QuestionType.DropDown);
    }

  populateFromFormGroup(formGroup:FormGroup){
    if(formGroup.get("label").value !=null)
    {
      this.questionLabel=formGroup.get("label").value;
    }
    this.options.splice(0);
    let optionsArray=<FormArray>formGroup.controls['options'];
    for(var _i=0;_i<optionsArray.length;_i++ ){
      this.options.push({key:(<FormControl>optionsArray.at(_i)).get("Key").value,value:(<FormControl>optionsArray.at(_i)).get("Value").value});
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



  createOptionFormGroup(option:{key:string,value:string},fb:FormBuilder):FormGroup{

    return fb.group({
      Key:option.key,
      Value:option.value
    }
    );
  }

  toFormGroup(fb:FormBuilder ):FormGroup{

    let requiredValidation=this.validations.find(validation=>validation.validationType===ValidationType.Required);
    let formGroup:FormGroup= fb.group({
      label:typeof this.questionLabel != 'undefined' && this.questionLabel?this.questionLabel:"",
      options:fb.array([]),
      validations:fb.group(
        {
          requiredValidation:typeof requiredValidation != 'undefined' && requiredValidation.values[0]?requiredValidation.values[0]:'',
        }
      )
    });
    let optionsArray=<FormArray>formGroup.controls['options'];
    this.options.forEach(option=>{

      optionsArray.push(this.createOptionFormGroup(option,fb))
    });
    return formGroup;
  }
}
