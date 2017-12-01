import { LoginComponent } from '../account/login/login.component';
import { RegistrationComponent } from '../account/registration/registration.component';
import { TeacherEntryComponent } from '../teacher/teacher-entry/teacher-entry.component';
import { StudentEntryComponent } from '../student/student-entry/student-entry.component';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { CourseListComponent } from './../course/course-list/course-list.component';
import { ClassListComponent } from './../class/class-list/class-list.component';
import { TeacherListComponent } from '../teacher/teacher-list/teacher-list.component';
import { StudentListComponent } from './../student/student-list/student-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseEntryComponent } from '../course/course-entry/course-entry.component';

import { AuthGuard } from '../common/authGuard';
import { ContentEntryComponent } from '../course/content/content-entry/content-entry.component';
import { ContentListComponent } from '../course/content/content-list/content-list.component';

const appRouting: Routes =[
  {path: '',redirectTo:'/dashbord',pathMatch:'full'},
  {path: 'dashbord', component:DashbordComponent},
  {  path: 'student',
     component:StudentListComponent ,
     canActivate:[AuthGuard]
  },
  { 
    path: 'student/new',
    component:StudentEntryComponent,
    canActivate:[AuthGuard]
  },
  { 
    path: 'student/:id',
    component:StudentEntryComponent,
    canActivate:[AuthGuard]
  },
  { 
    path: 'teacher',
    component:TeacherListComponent,
    canActivate:[AuthGuard]
  },
  { path: 'teacher/new',
    component:TeacherEntryComponent,
    canActivate:[AuthGuard]
  },
  { path: 'teacher/:id',
    component:TeacherEntryComponent,
    canActivate:[AuthGuard]
  },
  { path: 'class',
    component:ClassListComponent,
    canActivate:[AuthGuard],
  },
  { 
    path: 'course',
    component:CourseListComponent,
    canActivate:[AuthGuard]
  },
  { path: 'course/new',
    component:CourseEntryComponent,
    canActivate:[AuthGuard]
  },
  { path: 'content',
    component:ContentListComponent,
    canActivate:[AuthGuard]
 },
  { path: 'content/new',
    component:ContentEntryComponent,
    canActivate:[AuthGuard]
  },
  { path: 'registration',
    component:RegistrationComponent,
    canActivate:[AuthGuard]
  },
  { path: 'login',
    component:LoginComponent,
   
  },

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouting)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
