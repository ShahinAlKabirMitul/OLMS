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
  keyword:string;
  requestModel:BaseRequestModel;
  public courses: Observable<Course[]>;
  constructor(private courseService:CourseService) {
    this.localTime=new Date();
    this. requestModel=new BaseRequestModel();
    this. requestModel.page=-1;
    this. requestModel.keyword=this.keyword;
    this.requestModel.orderBy='Modified';

   }

  ngOnInit() {
    this.search();
    console.log(this.courses);
  }
  

  async search() {
    console.log('Search'+this.requestModel.keyword);
    //let t=new BaseRequestModel();
   
   this.courses= await this.courseService.search(this.requestModel);
 
   console.log('course list',this.courses);
  
  }

  
  mytiply(a:number,b:number):number{
    return a*b;
  }
}
