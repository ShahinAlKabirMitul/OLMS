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
  studentList:FormGroup;
  student:Student[]
   students=new FormArray([]);
  constructor(private stuService:StudentService) { }

  ngOnInit() {
    this.initForm();
    this.search();
    
  }
  search(){
   this.stuService.Search(this.studentList.value).subscribe((response:Response)=>{
      console.log(response);
      this.student=response.json();
      console.log( this.student);
      for(let stu of this.student){
        console.log(stu.name);
        this.students.push(
          new FormGroup({
            'name':new FormControl(stu["Name"]),
            'address':new FormControl(stu["Address"])
          })
        );
      }
    
   });
  }
  private initForm(){
    let studentName='';
    let address='';
   
    console.log('form init');
   

    this.studentList = new FormGroup({
     'name':new FormControl(studentName),
     'address':new FormControl(address),
     'studentsformArry':this.students
   });

  }
}
