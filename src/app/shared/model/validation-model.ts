export class ValidationModel {
  public validationType:number;
  public values:any[]=[];
  constructor(theValidationType:number,theValues?:any[]){
    this.validationType=theValidationType;
    this.values=theValues;
  }

}

