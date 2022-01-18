import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store'
import {simpleReducer} from './simple.rducer'
import { StringReducer } from './store/reducers/StringReducer';
import { PersonReducer } from './store/reducers/PersonReducer';
import { MyTestRecucTwoComponent } from './object-example/Object-example';
import { StringExampleComponent } from './string-example/string-example.component';
import { ListExampleComponent } from './list-example/list-example.component';
import { ListReducer } from './store/reducers/PersonListReducer';

@NgModule({
  declarations: [
    AppComponent,
    MyTestRecucTwoComponent,
    StringExampleComponent,
    ListExampleComponent
  ],
  imports: [
    BrowserModule,     //string example               //object example        //List example
    StoreModule.forRoot({ Stringobject: StringReducer,myperson:PersonReducer ,PersonList:ListReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
