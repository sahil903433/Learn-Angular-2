/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: QmctApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[AppComponent],
      }
    );

  });
  it('should create the app component',()=>{
    TestBed.compileComponents().then(()=>{
    let fixture=TestBed.createComponent(AppComponent);

    let appComponentInstance=<AppComponent>fixture.componentInstance;
    expect(appComponentInstance.title).toEqual('app works!');
    })
  });

});
