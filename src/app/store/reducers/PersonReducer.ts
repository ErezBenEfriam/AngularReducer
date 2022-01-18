import { Action } from "@ngrx/store";
import { PersonAction } from "../actions/PersonAction";
import { Person } from "../Models/Person.Model";

const PersonDefault = new Person();
PersonDefault.Age = 20; PersonDefault.Name = "dani";

export const PersonReducer = (state: Person = PersonDefault, action: Action) => {
    const personAction = action as PersonAction;
    console.log(personAction.type, "From Reducer type")
    console.log(personAction.payLoad, "From Reducer pay ")

    switch (personAction.type) {

        case "FIRST_PERSON_CASE":
            const p = new Person();
            p.Age = 25;
            p.Name = "Ronen"
            return p;

        case "SECOND_PERSON_CASE":
            const p2 = new Person();
            p2.Age = 30;
            p2.Name = "Tal"
            return p2;
        case "CUSTOM_PERSON_CASE":
            return personAction.payLoad;
        default:

            return state
    }

}