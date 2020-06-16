import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRecordComponent } from './components/student-record/student-record.component';
import {ReverseString} from './pipes/reverse-pipe'
import {DateTransform} from './pipes/date-transform'
@NgModule({
  declarations: [
    AppComponent,
    StudentRecordComponent,
    ReverseString,
    DateTransform
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
