
import { HttpModule } from '@angular/http';
import { StudentService } from './service/student.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student/student-entry/student-entry.component';
import { StudentListComponent } from './student/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
