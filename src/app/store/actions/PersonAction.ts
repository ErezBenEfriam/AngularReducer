import { Action } from "@ngrx/store";
import{Person} from'../Models/Person.Model'


export class PersonAction implements Action{
    type: string;
    constructor(public payLoad:Person){

    }

}

