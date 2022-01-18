import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StringAction } from '../store/actions/StringAction';

interface AppState{
  Stringobject:string; 
  }
@Component({
  selector: 'app-string-example',
  templateUrl: './string-example.component.html',
  styleUrls: ['./string-example.component.css']
})



export class StringExampleComponent implements OnInit {

  myString$ : Observable<string>;
  constructor(public store :Store<AppState>) {
    this.myString$ = store.select("Stringobject") //"Stringobject" is  from line 7
  
   }

  ngOnInit(): void {
  }
  FirstCase():void{
    this.store.dispatch({type:"FIRST_STRING_CASE"})
  }
  SecondCase():void{

    this.store.dispatch({type:"SECOND_STRING_CASE"})
  }
  CustomValue(value:string):void{

    const Action = new StringAction(value);
    Action.type="CUSTOM_VALUE"
    this.store.dispatch(Action);
  }

}
