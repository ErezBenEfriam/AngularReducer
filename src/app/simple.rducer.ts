import { Action } from "@ngrx/store";

export function simpleReducer( state : string="hello world",action: Action){
    console.log(action.type,)
    

    switch(action.type){
        case 'SPANISH':
            return state = 'hola Mundo'
            case 'FRENCH':
                return state = 'FRENCH'
                default:
                    return state;


    }

}