import {Directive,forwardRef} from '@angular/core';
import {NG_VALIDATORS,Validator,AbstractControl} from '@angular/forms';
@Directive(
  {
    selector:'[validateNumeric][ngModel],[validateNumeric][formControl],[validateNumeric][formControlName]',
    providers:[
      {
        provide:NG_VALIDATORS,useExisting:forwardRef(()=>NumericValidator),multi:true
      }
    ]

  }
)
export class NumericValidator implements Validator{
  constructor(){}
  validate(c:AbstractControl):{[key:string]:any} {
    let fieldValue=c.value;
    if(isNaN(fieldValue)){
      return {
        'isANumber':false
      };
    }
    return null;
  }


}
