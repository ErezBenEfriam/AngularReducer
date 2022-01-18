import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PersonAction } from '../store/actions/PersonAction';
import { Person } from '../store/Models/Person.Model';
interface AppState{
  PersonList:Person[];
  }
@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.css']
})
export class ListExampleComponent implements OnInit {

  PersonList$ : Observable<Person[]>;
  constructor(public store :Store<AppState>) {
    this.PersonList$ = store.select("PersonList")

   }
  ngOnInit(): void {
  }
  
  firstcase():void{
    this.store.dispatch({type:"FIRST_List_CASE"})
  }
  CustomePerson(age: any,name:string):void{
    const p = new Person();
    p.Age = age;
    p.Name =name
  const  action: PersonAction= new PersonAction(p)
  action.type ="CUSTOM_ListPERSON_CASE"
    this.store.dispatch(action)
  }

}
