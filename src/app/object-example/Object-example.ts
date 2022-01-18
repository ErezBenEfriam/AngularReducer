import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { PersonAction } from '../store/actions/PersonAction';
import{Person} from'../store/Models/Person.Model'
import { PersonReducer } from '../store/reducers/PersonReducer';

interface AppState{
myperson:Person;
}
@Component({
  selector: 'Object-example',
  templateUrl: './Object-example.html',
  styleUrls: ['./Object-example.css']
})
export class MyTestRecucTwoComponent implements OnInit {
  Person$ : Observable<Person>;
  constructor(public store :Store<AppState>) {
    this.Person$ = store.select("myperson")

   }

  ngOnInit(): void {
  }

  FirstCase():void{
    this.store.dispatch({type:"FIRST_PERSON_CASE"})
  }
  SecondCase():void{
    this.store.dispatch({type:"SECOND_PERSON_CASE"})
  }

  CustomePerson(age: any,name:string):void{
    const p = new Person();
    p.Age = age;
    p.Name =name
    const Action = new PersonAction(p);
    Action.type="CUSTOM_PERSON_CASE"
    this.store.dispatch(Action);
  }



}
