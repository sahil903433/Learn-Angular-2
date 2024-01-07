/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {  async, inject } from '@angular/core/testing';
import { FormDetailsComponent } from './form-details.component';
import {FormService} from '../shared/services/form.service';
import { Router } from '@angular/router';

describe('Component: FormDetails', () => {
  it('should create an instance', () => {
    let service = new FormService();
    //let router= new Router();
   // let component = new ExperimentDetailsComponent(router,service);
    //expect(component).toBeTruthy();
  });
});
