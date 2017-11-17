

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
import { BaseController } from '../../controller/baseController';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent extends BaseController<Student> implements OnInit {
 


  
  constructor(public service:StudentService,private router:Router) {
    super(service);

    console.log(' I am StudentList')
   
   
   
   }

  ngOnInit() {
   
  }

  
  editStudent(student:Student){
    this.router.navigate(['/student',student.id])
  }
reset(){
  this.requestModel=new BaseRequestModel();
}
  
}
