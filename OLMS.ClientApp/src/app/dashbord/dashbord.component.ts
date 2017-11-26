import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/course.service';
import { Course } from '../model/Course';
import { Observable } from 'rxjs/Observable';
import { BaseRequestModel } from '../request.model/base.request';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  localTime;
  public courses: Observable<Course[]>;
  constructor(private courseService:CourseService) {
    this.localTime=new Date();
   

   }

  ngOnInit() {
    this.loadTeacher();
    console.log(this.courses);
  }
  async loadTeacher() {
    
    let t=new BaseRequestModel();
    t.page=-1;
    t.orderBy='Modified';
    this.courses= await this.courseService.search(t);
   // console.log(this.teachers);
  
  }

  
  mytiply(a:number,b:number):number{
    return a*b;
  }
}
