/* tslint:disable:no-unused-variable */

import {  async, inject,TestBed } from '@angular/core/testing';
import { FormService } from './form.service';

describe('Service: FormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [FormService] });
  });

  it('should ...',
    inject([FormService],
      (service: FormService) => {
        expect(service).toBeTruthy();
      }));
});
