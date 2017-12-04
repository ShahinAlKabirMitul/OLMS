import { BaseRequestModel } from '../../../request.model/base.request';
import { Observable } from 'rxjs/Rx';
import { Content } from '../../../model/content';
import { BaseController } from '../../../common/controller/baseController';
import { ContentService } from '../../../service/content.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../../../model/Course';
import { CourseService } from '../../../service/course.service';

@Component({
  selector: 'app-content-entry',
  templateUrl: './content-entry.component.html',
  styleUrls: ['./content-entry.component.css']
})
export class ContentEntryComponent extends BaseController<Content> implements OnInit {

  public courses: Observable<Course[]>;
  constructor(public service:ContentService,private courseServices:CourseService) {super(service);
  }
 
   ngOnInit() {
     this.loadCourse();
   }
 
   reset() {
     throw new Error("Method not implemented.");
   }
   async loadCourse() {
    console.log(this.model);
    let t=new BaseRequestModel();
    t.page=-1;
    t.orderBy='title';
    this.courses= await this.courseServices.search(t);
    console.log(this.courses);
  
  }
  

}
