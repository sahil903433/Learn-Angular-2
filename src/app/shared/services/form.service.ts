import { Injectable } from '@angular/core';
import {FormModel} from '../model/form-model';

@Injectable()
export class FormService {
  public formObject:FormModel;
  constructor() {
    this.formObject= new FormModel("");

  }
  getFormObject(){
    
    return this.formObject;
  }

}
