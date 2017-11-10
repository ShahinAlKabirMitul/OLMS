import { Observable } from 'rxjs/Rx';
import { BaseRequestModel } from '../../request.model/base.request';
import { async } from 'rxjs/scheduler/async';
import { Router } from '@angular/router';
import { TeacherService } from '../../service/teacher.service';

import { Teacher } from './../../model/teacher';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teacher:Observable<Teacher[]>;
  bra$;
  RequestModel:BaseRequestModel;
  
  constructor(private teacherService:TeacherService,private router:Router) {
    this.RequestModel=new BaseRequestModel();
    
   }

  ngOnInit() {
  
  }
  async search(RequestModel:BaseRequestModel){
   
    if(!RequestModel.orderBy){
      RequestModel.orderBy='name';
    }
    console.log(RequestModel);
    this.teacher= await this.teacherService.search(RequestModel);
   
  
  }
  editStudent(student:Teacher){
    this.router.navigate(['/teacher',student.id])
  }
  sort(property:string){
    this.RequestModel.isAscending=! this.RequestModel.isAscending;
    this.RequestModel.orderBy=property;
    this.search(this.RequestModel);
  }
 
next(){
this.RequestModel.page=this.RequestModel.page+1;
 this.search(this.RequestModel);
}
pre(){
  
  if(this.RequestModel.page>1){
    this.RequestModel.page=this.RequestModel.page-1;
   
  }
  this.search(this.RequestModel);
}

}
