import { Component, OnInit } from '@angular/core';
import {FormModel} from '../shared/model/form-model';

import {FormService} from "../shared/services/form.service";

import { Inject } from '@angular/core';
import {SelectItem} from "primeng/primeng";
import { Router } from '@angular/router';


@Component({
  selector: 'app-experiment-details',
  templateUrl: 'app/form-details/form-details.component.html',

  styleUrls: ['app/form-details/form-details.component.css']
})
export class FormDetailsComponent implements OnInit {

  public formModel:FormModel ;



  submitted = false;
  onSubmit() {
    let link=["/questions"];
    this.router.navigate(link);
    this.submitted = true;
  }

  constructor( private router: Router,private formService:FormService) {
    this.formModel=formService.getFormObject();


  }

  ngOnInit() {

  }

}
