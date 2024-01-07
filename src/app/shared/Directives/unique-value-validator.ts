import {Directive,forwardRef,Attribute,Input} from '@angular/core';
import {NG_VALIDATORS,Validator,AbstractControl} from '@angular/forms';
@Directive(
  {
    selector:'[uniqueValue][ngModel],[uniqueValue][formControl],[uniqueValue][formControlName]',
    providers:[
      {
        provide:NG_VALIDATORS,useExisting:forwardRef(()=>UniqueValueValidator),multi:true
      }
    ]

  }
)
export class UniqueValueValidator implements Validator{

  @Input('uniqueValue') givenValues: string[];

  constructor(){

  }
  validate(c:AbstractControl): { [key: string]: any } {
    let inputValue=c.value;
    let foundItem=this.givenValues.indexOf(inputValue);
    if(foundItem >= 0){
      return {
        'isNotUnique':true
      };

    }
    return null;
  }
}
