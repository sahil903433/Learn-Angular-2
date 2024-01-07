import {Directive,forwardRef,Attribute,Input} from '@angular/core';
import {NG_VALIDATORS,Validator,AbstractControl,FormArray} from '@angular/forms';
@Directive(
  {
    selector:'[atLeastOneRequired][formArrayName]',
    providers:[
      {
        provide:NG_VALIDATORS,useExisting:forwardRef(()=>AtLeastOneValidator),multi:true
      }
    ]

  }
)
export class AtLeastOneValidator implements Validator{

  constructor(){

  }
  validate(c:AbstractControl): { [key: string]: any } {
    let formGroupValue:FormArray=<FormArray>c.value;
    if(formGroupValue.length == 0){
      return {
        'atLeastOne':false
      };

    }
    return null;
  }
}

