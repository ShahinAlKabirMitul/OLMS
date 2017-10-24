import { StudentRequestModel } from './../../model/studentRequestModel';
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
  studentReq:StudentRequestModel=new StudentRequestModel('','')
  
  constructor(private stuservice:StudentService) { }

  ngOnInit() {
   
   // this.search(this.studentReq);
   this.search(this.studentReq);
  }
  search(studentReq){
    this.stuservice.Search(studentReq).subscribe((responese:Response)=>{
      console.log(responese);
      this.student =responese.json();
    } )
    console.log(studentReq);
  }
  sort(property:string){
    this.studentReq.isAscending=! this.studentReq.isAscending;
    this.studentReq.orderBy=property;
    this.search(this.studentReq);

  }
 
next(){
this.studentReq.Page=this.studentReq.Page+1;
this.search(this.studentReq);
}
pre(){
  this.studentReq.Page=this.studentReq.Page-1;
  if(this.studentReq.Page<1){
    this.studentReq.Page=1;
  }
  this.search(this.studentReq);
}
  
}
