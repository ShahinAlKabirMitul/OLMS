import { StudentEntryComponent } from '../student/student-entry/student-entry.component';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { CourseListComponent } from './../course/course-list/course-list.component';
import { ClassListComponent } from './../class/class-list/class-list.component';
import { TeacherListComponent } from '../teacher/teacher-list/teacher-list.component';
import { StudentListComponent } from './../student/student-list/student-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRouting:Routes=[
  {path:'',redirectTo:'/dashbord',pathMatch:'full'},
  {path:'dashbord',component:DashbordComponent},
  {path:'student',component:StudentListComponent},
  {path:'student/new',component:StudentEntryComponent},
  {path:'student/:id',component:StudentEntryComponent},
  {path:'teacher',component:TeacherListComponent},
  {path:'class',component:ClassListComponent},
  {path:'course',component:CourseListComponent},
 
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouting)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
