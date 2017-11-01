import { async } from 'rxjs/scheduler/async';
import { Router } from '@angular/router';
import { TeacherService } from '../../service/teacher.service';
import { TeacherRequestModel } from './../../request.model/teacher.request.model';
import { Teacher } from './../../model/teacher';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teacher:Teacher[];
  bra$;
  teacherRequestModel:TeacherRequestModel=new TeacherRequestModel('','')
  
  constructor(private teacherService:TeacherService,private router:Router) {
  
   }

  ngOnInit() {
  
  }
  async search(teacherReq){

   await this.teacherService.search(teacherReq).toPromise( ).then(s => this.teacher=s.json());
   
  
  }
  editStudent(student:Teacher){
    this.router.navigate(['/teacher',student["Id"]])
  }
  sort(property:string){
    this.teacherRequestModel.isAscending=! this.teacherRequestModel.isAscending;
    this.teacherRequestModel.orderBy=property;
    this.search(this.teacherRequestModel);
  }
 
next(){
this.teacherRequestModel.page=this.teacherRequestModel.page+1;
 this.search(this.teacherRequestModel);
}
pre(){
  
  if(this.teacherRequestModel.page>1){
    this.teacherRequestModel.page=this.teacherRequestModel.page-1;
   
  }
  this.search(this.teacherRequestModel);
}

}
