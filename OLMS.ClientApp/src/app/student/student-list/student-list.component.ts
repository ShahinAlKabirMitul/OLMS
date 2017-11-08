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
  requestModel:BaseRequestModel;

  
  constructor(private stuservice:StudentService,private router:Router) {
    this.requestModel=new BaseRequestModel();
   
   }

  ngOnInit() {
   
  }
  search( requestModel:BaseRequestModel){

    if(!requestModel.orderBy){
      requestModel.orderBy='name';
    }
   
    console.log(requestModel);
    this.stuservice.search(requestModel).subscribe((responese:Response)=>{
     
      this.student =responese.json();

      
    } )

   
  
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
