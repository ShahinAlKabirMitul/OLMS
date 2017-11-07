import { BaseRequestModel } from '../../request.model/base.request';

import { of } from 'rxjs/observable/of';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Student } from '../../model/student';
import { StudentService } from '../../service/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  student:Student[];
  studentReq:BaseRequestModel;

  
  constructor(private stuservice:StudentService,private router:Router) {
    this.studentReq=new BaseRequestModel();
   }

  ngOnInit() {
   
   // this.search(this.studentReq);
   this.search(this.studentReq);
  }
  search(studentReq){
    console.log(studentReq);
    this.stuservice.search(studentReq).subscribe((responese:Response)=>{
     
      this.student =responese.json();

      
    } )

   
  
  }
  editStudent(student:Student){
    this.router.navigate(['/student',student.id])
  }
  sort(property:string){
    this.studentReq.isAscending=! this.studentReq.isAscending;
    this.studentReq.orderBy=property;
    this.search(this.studentReq);
  }
 
next(){
this.studentReq.page=this.studentReq.page+1;

this.search(this.studentReq);
}
pre(){
  this.studentReq.page=this.studentReq.page-1;
  if(this.studentReq.page<1){
    this.studentReq.page=1;
  }
  this.search(this.studentReq);
}
  
}
