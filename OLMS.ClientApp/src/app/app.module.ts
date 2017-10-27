import { TeacherService } from './service/teacher.service';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { HttpModule } from '@angular/http';
import { StudentService } from './service/student.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student/student-entry/student-entry.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherEntryComponent } from './teacher/teacher-entry/teacher-entry.component';
import { ClassListComponent } from './class/class-list/class-list.component';
import { ClassEntryComponent } from './class/class-entry/class-entry.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseEntryComponent } from './course/course-entry/course-entry.component';
import { DashbordComponent } from './dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentListComponent,
    NavbarComponent,
    TeacherListComponent,
    TeacherEntryComponent,
    ClassListComponent,
    ClassEntryComponent,
    CourseListComponent,
    CourseEntryComponent,
    DashbordComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    StudentService,
    TeacherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
