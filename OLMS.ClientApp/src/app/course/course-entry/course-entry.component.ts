import { Component, OnInit } from '@angular/core';
import { BaseController } from '../../common/controller/baseController';
import { Course } from '../../model/Course';
import { CourseService } from '../../service/course.service';
import { TeacherService } from '../../service/teacher.service';
import { Teacher } from '../../model/teacher';
import { BaseRequestModel } from '../../request.model/base.request';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrls: ['./course-entry.component.css']
})
export class CourseEntryComponent extends BaseController<Course> {

 public teachers: Observable<Teacher[]>;
  modelss: Observable<Teacher[]>;
  constructor(service:CourseService,public teacherService:TeacherService) {
    super(service)
  
   
    this.reset();
    this.loadTeacher();

 }
 async loadTeacher() {
  console.log(this.model);
  let t=new BaseRequestModel();
  t.page=-1;
  t.orderBy='Modified';
  this.teachers= await this.teacherService.search(t);
  console.log(this.teachers);

}

reset(){
  this.model=new Course();
 

  

  
}
 

}
