import { Action } from "@ngrx/store";
import { StringAction } from "../actions/StringAction";

export function StringReducer(state: string = "hello world", action: Action) {
    const myFirstAction = action as StringAction;
    console.log(myFirstAction, "hey")
    console.log(myFirstAction.payload)
    console.log(action.type, myFirstAction.payload)

    switch (myFirstAction.type) {
        case 'FIRST_STRING_CASE':
            return state = 'this is the first case '
        case 'SECOND_STRING_CASE':
            return state = 'this is the second case'
        case 'CUSTOM_VALUE':
            return state = myFirstAction.payload
        default:
            return state;


    }

}