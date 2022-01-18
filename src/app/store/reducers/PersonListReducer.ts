import { Action } from "@ngrx/store";
import { PersonAction } from "../actions/PersonAction";
import { Person } from "../Models/Person.Model";

const Person1 = new Person();
Person1.Age = 20; Person1.Name = "dani";
const Person2 = new Person();
Person2.Age = 30; Person2.Name = "maya";
const Person3 = new Person();
Person3.Age = 15; Person3.Name = "Yaron";
const Personlist: Person[] = [Person1, Person2, Person3];


export const ListReducer = (state: Person[] = Personlist, action: Action) => {
    const personAction = action as PersonAction;
    console.log(personAction.type, "From Reducer type")
    console.log(personAction.payLoad, "From Reducer pay ")

    switch (personAction.type) {

        case "FIRST_List_CASE":
            const p = new Person();
            p.Age = 25;
            p.Name = "Ronen"
            return  [...state, p];

        case "CUSTOM_ListPERSON_CASE":
            return     [...state, personAction.payLoad];
        default:
            return state
    }

}