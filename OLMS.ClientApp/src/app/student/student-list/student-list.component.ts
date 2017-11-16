
import { StudentService } from './../../service/student.service';
import { BaseService } from '../../common/base.service';
import { Observable } from 'rxjs/Rx';
import { async } from 'rxjs/scheduler/async';
import { BaseRequestModel } from '../../request.model/base.request';
import { of } from 'rxjs/observable/of';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Student } from '../../model/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  student$;
  student:Observable<Student[]>;
  requestModel:BaseRequestModel;

  
  constructor(private service:StudentService,private router:Router) {

    console.log(' I am StudentList')
    this.requestModel=new BaseRequestModel();
   
   
   }

  ngOnInit() {
   
  }
async search( requestModel:BaseRequestModel){

    if(!requestModel.orderBy){
      requestModel.orderBy='name';
    }
   
    this.student= await this.service.search(requestModel);
   // this.student=this.student$;
    console.log(this.student$);

   
  
  }
  
  editStudent(student:Student){
    this.router.navigate(['/student',student.id])
  }
  sort(property:string){
    this.requestModel.isAscending=! this.requestModel.isAscending;
    this.requestModel.orderBy=property;
    this.search(this.requestModel);
  }
 
next(){
this.requestModel.page=this.requestModel.page+1;

this.search(this.requestModel);
}
pre(){
  this.requestModel.page=this.requestModel.page-1;
  if(this.requestModel.page<1){
    this.requestModel.page=1;
  }
  this.search(this.requestModel);
}
  
}
