import { Action } from "@ngrx/store";



export class StringAction implements Action{
    public   type :string;

    constructor(public payload :string){

    }
    
}