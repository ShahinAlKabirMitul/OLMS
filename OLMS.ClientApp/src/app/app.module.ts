import { AuthGuard } from './common/authGuard';
import { UserProfile } from './model/userProfile';
import { RegistrationService } from './service/registration.service';
import { RegistrationComponent } from './account/registration/registration.component';
import { BaseService } from './common/base.service';



import { AppErrorHandler } from './common/error/app-error-handler';
import { UrlService } from './common/url.service';
import { RepogitoryService } from './common/repogitory.service';
import { TeacherService } from './service/teacher.service';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { HttpModule } from '@angular/http';
import { StudentService } from './service/student.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StudentListComponent } from './student/student-list/student-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherEntryComponent } from './teacher/teacher-entry/teacher-entry.component';
import { ClassListComponent } from './class/class-list/class-list.component';
import { ClassEntryComponent } from './class/class-entry/class-entry.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseEntryComponent } from './course/course-entry/course-entry.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { StudentEntryComponent } from './student/student-entry/student-entry.component';
import { CourseService } from './service/course.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CourseCardComponent } from './course/course-card/course-card.component';
import { LoginComponent } from './account/login/login.component';
import { LoginService } from './service/login.service';

import { ContentService } from './service/content.service';
import { UserService } from './service/user.service';
import { CommonService } from './shared/common.service';
import { ContentListComponent } from './course/content/content-list/content-list.component';
import { ContentEntryComponent } from './course/content/content-entry/content-entry.component';
import { LogoutComponent } from './account/logout/logout.component';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { RoleComponent } from './account/role/role.component';
import { RoleService } from './service/role.service';


@NgModule({
  declarations: [
    AppComponent,
  
    StudentListComponent,
    NavbarComponent,
    TeacherListComponent,
    TeacherEntryComponent,
    ClassListComponent,
    ClassEntryComponent,
    CourseListComponent,
    CourseEntryComponent,
    DashbordComponent,
    StudentEntryComponent,
    CourseCardComponent,
    RegistrationComponent,
    LoginComponent,
  
    ContentListComponent,
    ContentEntryComponent,
    LogoutComponent,
    RoleComponent,

    
 
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatSelectModule,
    MatNativeDateModule
    ,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    
    
    NgbModule.forRoot()
    
    
  ],
  providers: [
    BaseService,
    StudentService,
    TeacherService,
    RepogitoryService,
    UrlService,
    CourseService,
    RegistrationService,
    LoginService,
    ContentService,
    UserService,
    CommonService,
    UserProfile,
    AuthGuard,
    RoleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
