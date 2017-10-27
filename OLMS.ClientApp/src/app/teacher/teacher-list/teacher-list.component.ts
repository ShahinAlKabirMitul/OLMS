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

  student:Teacher[];
  teacherRequestModel:TeacherRequestModel=new TeacherRequestModel('','')
  
  constructor(private teacherService:TeacherService,private router:Router) {
    
   }

  ngOnInit() {
   
   // this.search(this.studentReq);
   this.search(this.teacherRequestModel);
  }
  search(teacherReq){
    this.teacherService.Search(teacherReq).subscribe((responese:Response)=>{
     
      this.student =responese.json();
      
    } )

   
  
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
  this.teacherRequestModel.page=this.teacherRequestModel.page-1;
  if(this.teacherRequestModel.page<1){
    this.teacherRequestModel.page=1;
  }
  this.search(this.teacherRequestModel);
}

}
